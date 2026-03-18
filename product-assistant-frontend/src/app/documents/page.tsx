import DocumentsForm from "@/components/Documents/Form";
import DocumentsHero from "@/components/Documents/Hero";
import PageContainer from "@/components/shared/PageContainer";

export default function DocumentsPage () {
  return(
    <PageContainer>
      <section className="flex flex-col w-full max-w-5xl mx-auto h-screen py-20 px-5 gap-10">
        <DocumentsHero />
        <DocumentsForm />
      </section>
    </PageContainer>
  )
}