"use client";
import { ConversationFormProps } from "@/interfaces";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

const ConversationForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [params, setParams] = useState<ConversationFormProps>({ message: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setParams((prevState) => {
      return { ...prevState, [name]: value};
    });
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(params.message.length < 10) {
      return alert('El mensaje debe tener al menos 10 caracteres')
    }

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
    <section>
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <textarea
            id="message"
            name="message"
            cols={15}
            rows={4}
            onChange={onChange}
            placeholder="¿Cuanto cuesta el nuevo juego de Halo?"
            required={true}
            className="bg-black rounded-xl text-white font-light p-4 w-full"
          />
        </div>

        <div className="flex items-center justify-end">
          {
            isLoading
            ? <BeatLoader size={12} color="#22D3EE" />
            : <button type="submit" className="font-medium rounded-xl px-7 py-3 bg-linear-to-r from-blue-500 to-cyan-800 cursor-pointer">
                Analizar documento
              </button>
          }
        </div>
      </form>
    </section>
  )
}

export default ConversationForm;
