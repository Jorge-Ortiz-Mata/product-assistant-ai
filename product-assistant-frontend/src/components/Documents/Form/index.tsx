"use client";
import Link from "next/link";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { axiosInstance } from "@/services/api_service";

const DocumentsForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pdf, setPdf] = useState<File | undefined>(undefined);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if(files) setPdf(files[0]);
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if(!pdf) return alert('Sube un documento para cargar la información al servidor')

    try {
      const formData = new FormData();
      formData.append('pdf', pdf);

      await axiosInstance.post('/document/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      alert("Hurra! El contenido ha sido cargado existosamente")
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
          href="/conversation"
        >
          Regresar
        </Link>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <input
            type="file"
            name="pdf"
            id="pdf"
            onChange={onChange}
            accept="application/pdf"
            multiple={false}
            className="bg-black rounded-xl text-white font-light p-4 w-full"
          />
        </div>
        <div className="flex items-center justify-end">
          {
            isLoading
            ? <BeatLoader size={12} color="#22D3EE" />
            : <button type="submit" className="font-medium rounded-xl px-7 py-3 bg-linear-to-r from-blue-500 to-cyan-800 cursor-pointer">
                Subir documento
              </button>
          }
        </div>
      </form>
    </section>
  )
}

export default DocumentsForm;
