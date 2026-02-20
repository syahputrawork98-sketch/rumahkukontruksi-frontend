import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <MainLayout>
      <Container>
        <div className="py-20">
          <h1 className="text-3xl font-semibold text-neutral-dark mb-6">
            Bangun Rumah Lebih Terstruktur & Transparan
          </h1>

          <Button>
            Mulai Proyek
          </Button>
        </div>
      </Container>
    </MainLayout>
  );
}
