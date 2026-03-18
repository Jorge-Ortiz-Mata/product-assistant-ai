"use client";
import Link from "next/link";
import { DocumentsFormProps } from "@/interfaces";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

const DocumentsForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [params, setParams] = useState<DocumentsFormProps>({ pdf: undefined });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setParams((prevState) => {
      return { ...prevState, [name]: value};
    });
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!params.pdf) return alert('El pdf no debe estar en blanco')

    try {
      // await handleSubmit(e);
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
            required={true}
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
