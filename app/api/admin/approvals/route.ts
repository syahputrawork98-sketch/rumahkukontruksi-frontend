import { AUTH_COOKIE_NAMES } from "@/constants/auth";
import { getAdminApprovals, updateAdminApprovalStatus } from "@/lib/admin-data";
import { canManageAdminActions, normalizeRole } from "@/lib/rbac";
import { NextRequest, NextResponse } from "next/server";

const VALID_ACTIONS = ["APPROVE", "REJECT"] as const;

type ApprovalAction = (typeof VALID_ACTIONS)[number];

function getRoleFromRequest(request: NextRequest) {
  return normalizeRole(request.cookies.get(AUTH_COOKIE_NAMES.role)?.value);
}

export async function GET(request: NextRequest) {
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
          message: "Akses ditolak untuk endpoint approval.",
        },
      },
      { status: 403 }
    );
  }

  return NextResponse.json({
    success: true,
    data: getAdminApprovals(),
  });
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
          message: "Akses ditolak untuk aksi approval.",
        },
      },
      { status: 403 }
    );
  }

  const payload = await request.json().catch(() => null);
  const approvalId =
    typeof payload === "object" && payload ? (payload as { approvalId?: unknown }).approvalId : null;
  const action = typeof payload === "object" && payload ? (payload as { action?: unknown }).action : null;

  if (typeof approvalId !== "string" || typeof action !== "string" || !VALID_ACTIONS.includes(action as ApprovalAction)) {
    return NextResponse.json(
      {
        error: {
          code: "VALIDATION_ERROR",
          message: "Payload approval tidak valid.",
        },
      },
      { status: 400 }
    );
  }

  const approvals = getAdminApprovals();
  const current = approvals.find((item) => item.id === approvalId);
  if (!current) {
    return NextResponse.json(
      {
        error: {
          code: "NOT_FOUND",
          message: "Item approval tidak ditemukan.",
        },
      },
      { status: 404 }
    );
  }

  if (current.status !== "PENDING") {
    return NextResponse.json(
      {
        error: {
          code: "CONFLICT",
          message: "Approval sudah diproses sebelumnya.",
        },
      },
      { status: 409 }
    );
  }

  const nextStatus = action === "APPROVE" ? "APPROVED" : "REJECTED";
  const updated = updateAdminApprovalStatus(approvalId, nextStatus);

  if (!updated) {
    return NextResponse.json(
      {
        error: {
          code: "UPDATE_FAILED",
          message: "Gagal memperbarui approval.",
        },
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: `Approval ${nextStatus.toLowerCase()} berhasil.`,
    data: updated,
  });
}
