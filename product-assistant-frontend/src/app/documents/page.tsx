"use client"
import { useEffect } from "react";
import DocumentsConsiderations from "@/components/Documents/Considerations";
import DocumentsForm from "@/components/Documents/Form";
import DocumentsHero from "@/components/Documents/Hero";
import NavBar from "@/components/shared/Navbar";
import PageContainer from "@/components/shared/PageContainer";
import { axiosInstance } from "@/services/api_service";
import { redirect } from "next/navigation";

export default function DocumentsPage () {
  useEffect(() => {
    const checkAvailability = async () => {
      const response = await axiosInstance.get('/ff');
      const isActive = response.data;
      if(isActive) return;

      redirect("/")
    }

    checkAvailability()
  }, []);

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