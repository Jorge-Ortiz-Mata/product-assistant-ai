"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/services/api_service";
import ConversationForm from "@/components/Conversation/Form";
import ConversationHero from "@/components/Conversation/Hero";
import ConversationProduct from "@/components/Conversation/Product";
import NavBar from "@/components/shared/Navbar";
import PageContainer from "@/components/shared/PageContainer";
import { ProductProps } from "@/interfaces";

export default function ConversationPage() {
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    const checkAvailability = async () => {
      const response = await axiosInstance.get('/ff');
      const isActive = response.data;
      if(isActive) return;

      redirect("/")
    }

    checkAvailability()
  }, []);

  const onProductUpdate = (data: string) => {
    const product: ProductProps = JSON.parse(data)
    setProduct(product)
  }

  return (
    <PageContainer>
      <NavBar />
      <section className="flex flex-col w-full max-w-5xl mx-auto h-screen gap-10">
        <ConversationHero />
        <ConversationForm handleAIResponse={onProductUpdate} />
        <ConversationProduct product={product} />
      </section>
    </PageContainer>
  );
}
