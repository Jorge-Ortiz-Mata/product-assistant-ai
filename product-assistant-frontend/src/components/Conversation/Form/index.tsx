"use client";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import ConversationFormPills from "./Pills";
import { ConversationFormParamsProps, ConversationFormProps } from "@/interfaces";
import { axiosInstance } from "@/services/api_service";
import axios from "axios";

const ConversationForm = ({ handleAIResponse }:ConversationFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [params, setParams] = useState<ConversationFormParamsProps>({ message: '' });
  const [error, setError] = useState<string | undefined>(undefined);

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setParams((prevState) => {
      return { ...prevState, message: value};
    });
  }

  const setMessage = (label: string) => {
    setParams((prevState) => {
      return { ...prevState, message: label};
    });
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await axiosInstance.post('/conversate', params);
      handleAIResponse(response.data.product);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.detail?.[0]?.msg || "Error de conexión con el servidor";
        setError(errorMessage);
      } else {
        setError("Ocurrió un error inesperado en la aplicación");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return(
    <section className="flex flex-col gap-3">
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <textarea
            id="message"
            name="message"
            cols={15}
            rows={4}
            onChange={onChange}
            value={params.message}
            placeholder="Dime acerca de ..."
            className="bg-black rounded-xl text-white font-light p-4 w-full"
          />
          { error && <div className="text-sm text-red-500">{error}</div> }
        </div>
        <ConversationFormPills onClick={setMessage} />
        <div className="flex items-center justify-end">
          {
            isLoading
            ? <BeatLoader size={12} color="#22D3EE" />
            : <button type="submit" className="font-medium rounded-xl px-7 py-3 bg-linear-to-r from-blue-500 to-cyan-800 cursor-pointer">
                Enviar solicitud
              </button>
          }
        </div>
      </form>
    </section>
  )
}

export default ConversationForm;
