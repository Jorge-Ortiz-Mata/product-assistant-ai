"use client";
import Link from "next/link";
import { axiosInstance } from "@/services/api_service";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const HomeAccessLink = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const checkAvailability = async () => {
      const response = await axiosInstance.get('/ff');
      const error = response.data.error;

      if(error) {
        setIsActive(false);
        console.log("Something went wrong: ", error);
      } else {
        console.log("FF response: ", response.data);
        setIsActive(response.data);
      }

      setIsLoading(false);
    }

    checkAvailability()
  }, []);

  if (isLoading) return <BeatLoader size={12} color="#22D3EE" />

  return(
    <div className="flex">
      {
        isActive
        ? <Link
            href="/conversation"
            className="font-medium rounded-xl px-7 py-3 bg-linear-to-r from-cyan-800 via-cyan-950 to-cyan-800 cursor-pointer"
          >
            Comenzar
          </Link>
        : <div className="text-gray-200 text-sm underline">
            Contactar al administrador para acceder al recurso
          </div>
      }
    </div>
  )
}

export default HomeAccessLink;
