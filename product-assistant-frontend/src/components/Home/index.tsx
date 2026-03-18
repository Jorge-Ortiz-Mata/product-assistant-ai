import Link from "next/link";

const HomeHero = () => {
  return(
    <section className="mx-auto w-full max-w-5xl flex flex-col">
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-6xl text-center">
          Product <span className="text-[#00a7b3]">Insight AI</span>
        </h1>
        <div className="text-center text-gray-300 font-light text-lg">
          Sube tu documentación y deja que nuestra IA analice cada detalle. <br />
          Nuestra tecnología RAG te permite interrogar a tus PDFs para extraer especificaciones, 
          comparar características y acelerar la toma de decisiones.
        </div>

        <div className="flex items-center justify-center w-full">
          <Link
            href="/conversation"
            className="px-10 py-2 bg-linear-to-r from-cyan-800 to-blue-800 rounded"
          >
            Comenzar
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeHero;
