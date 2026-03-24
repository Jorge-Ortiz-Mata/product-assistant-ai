import HomeHero from "@/components/Home";
import PageContainer from "@/components/shared/PageContainer";

export default function HomePage() {
  return (
    <PageContainer>
      <section className="flex flex-col w-full h-screen items-center justify-center px-5">
        <HomeHero />
      </section>
    </PageContainer>
  );
}
