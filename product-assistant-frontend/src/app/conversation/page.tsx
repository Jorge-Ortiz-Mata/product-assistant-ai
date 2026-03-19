"use client";
import ConversationForm from "@/components/Conversation/Form";
import ConversationHero from "@/components/Conversation/Hero";
import PageContainer from "@/components/shared/PageContainer";
import { ConversationFormParamsProps } from "@/interfaces";
import { axiosInstance } from "@/services/api_service";

export default function ConversationPage() {

  return (
    <PageContainer>
      <section className="flex flex-col w-full max-w-5xl mx-auto h-screen py-20 px-5 gap-10">
        <ConversationHero />
        <ConversationForm />
      </section>
    </PageContainer>
  );
}
