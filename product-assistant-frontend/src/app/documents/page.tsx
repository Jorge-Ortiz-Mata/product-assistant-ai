import DocumentsConsiderations from "@/components/Documents/Considerations";
import DocumentsForm from "@/components/Documents/Form";
import DocumentsHero from "@/components/Documents/Hero";
import NavBar from "@/components/shared/Navbar";
import PageContainer from "@/components/shared/PageContainer";

export default function DocumentsPage () {
  return(
    <PageContainer>
      <NavBar />

      <section className="flex flex-col w-full max-w-5xl mx-auto h-screen gap-10">
        <DocumentsHero />
        <DocumentsConsiderations />
        <DocumentsForm />
      </section>
    </PageContainer>
  )
}