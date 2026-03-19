"use client";

import HomeHero from "@/components/Home";
import PageContainer from "@/components/shared/PageContainer";
import { axiosInstance } from "@/services/api_service";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const checkAvailability = async () => {
      const response = await axiosInstance.get('/ff');
      setIsActive(response.data)
    }

    checkAvailability()
  }, []);

  return (
    <PageContainer>
      <section className="flex flex-col w-full h-screen items-center justify-center px-5">
        <HomeHero isActive={isActive} />
      </section>
    </PageContainer>
  );
}
