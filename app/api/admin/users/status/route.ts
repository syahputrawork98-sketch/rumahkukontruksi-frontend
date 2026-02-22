import { AUTH_COOKIE_NAMES } from "@/constants/auth";
import { ROLES } from "@/constants/roles";
import { getAdminUserById, updateAdminUserStatus } from "@/lib/admin-data";
import { canManageAdminActions, normalizeRole } from "@/lib/rbac";
import type { AdminUserStatus } from "@/types/admin.types";
import { NextRequest, NextResponse } from "next/server";

const VALID_STATUSES: AdminUserStatus[] = ["ACTIVE", "INACTIVE"];

function getRoleFromRequest(request: NextRequest) {
  return normalizeRole(request.cookies.get(AUTH_COOKIE_NAMES.role)?.value);
}

export async function POST(request: NextRequest) {
  const role = getRoleFromRequest(request);
  const hasSession = request.cookies.get(AUTH_COOKIE_NAMES.session)?.value === "1";

  if (!hasSession || !role) {
    return NextResponse.json(
      {
        error: {
          code: "UNAUTHORIZED",
          message: "Authentication required.",
        },
      },
      { status: 401 }
    );
  }

  if (!canManageAdminActions(role)) {
    return NextResponse.json(
      {
        error: {
          code: "FORBIDDEN",
          message: "Akses ditolak untuk aksi ini.",
        },
      },
      { status: 403 }
    );
  }

  const payload = await request.json().catch(() => null);
  const userId = typeof payload === "object" && payload ? (payload as { userId?: unknown }).userId : null;
  const status = typeof payload === "object" && payload ? (payload as { status?: unknown }).status : null;

  if (typeof userId !== "string" || typeof status !== "string" || !VALID_STATUSES.includes(status as AdminUserStatus)) {
    return NextResponse.json(
      {
        error: {
          code: "VALIDATION_ERROR",
          message: "Payload update status user tidak valid.",
        },
      },
      { status: 400 }
    );
  }

  const targetUser = getAdminUserById(userId);
  if (!targetUser) {
    return NextResponse.json(
      {
        error: {
          code: "NOT_FOUND",
          message: "User tidak ditemukan.",
        },
      },
      { status: 404 }
    );
  }

  if (role === ROLES.admin && targetUser.role === ROLES.owner) {
    return NextResponse.json(
      {
        error: {
          code: "FORBIDDEN",
          message: "Admin tidak dapat mengubah status Owner.",
        },
      },
      { status: 403 }
    );
  }

  const updatedUser = updateAdminUserStatus(userId, status as AdminUserStatus);
  if (!updatedUser) {
    return NextResponse.json(
      {
        error: {
          code: "UPDATE_FAILED",
          message: "Gagal memperbarui status user.",
        },
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Status user berhasil diperbarui.",
    data: updatedUser,
  });
}
