"use client";
import Link from "next/link";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { ConversationFormParamsProps, ConversationFormProps } from "@/interfaces";
import ConversationFormPills from "./Pills";
import { axiosInstance } from "@/services/api_service";

const ConversationForm = ({ handleAIResponse }:ConversationFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [params, setParams] = useState<ConversationFormParamsProps>({ message: '' });

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

    try {
      const response = await axiosInstance.post('/conversate', params);
      handleAIResponse(response.data.product);
    } catch (error) {
      console.log(error);
      alert("Hubo un error al enviar tu información. Por favor, intente más tarde");
    } finally {
      setIsLoading(false);
    }
  }

  return(
    <section className="flex flex-col gap-3">
      <div className="flex w-full justify-end">
        <Link
          className="text-cyan-400 italic text-sm duration-300 hover:text-cyan-600"
          href="/documents"
          >
          Cargar documentos
        </Link>
      </div>
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
            required={true}
            className="bg-black rounded-xl text-white font-light p-4 w-full"
          />
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
