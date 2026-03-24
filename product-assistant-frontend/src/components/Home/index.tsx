import HomeCard from "./Card";
import HomeAccessLink from "./AccessLink";
import { FaDatabase } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";
import { FaPython } from "react-icons/fa6";

const HomeHero = () => {
  return(
    <section
      className="
        mx-auto
        w-full
        max-w-5xl
        flex
        flex-col
        border
        border-cyan-900
        rounded-xl
        px-10
        py-20
        bg-linear-to-br
        from-[#020617]
        to-cyan-950"
    >
      <section className="flex w-full gap-5">
        <div className="flex flex-col w-7/12 gap-5">
          <h1 className="font-semibold text-5xl">
            Asistente de <span className="text-[#00a7b3]"><br />
            Productos con AI</span>
          </h1>
          <div className="text-gray-300 font-light">
            Nuestra tecnología RAG te permite interrogar a tus PDFs para extraer especificaciones, 
            comparar características y acelerar la toma de decisiones.
          </div>

          <HomeAccessLink />
        </div>

        <div className="flex flex-col w-5/12 gap-5">
          <HomeCard
            icon={<FaDatabase />}
            label="ChromaDB"
            style="border-purple-800 text-purple-500 bg-purple-800/20"
          />

          <HomeCard
            icon={<RiNextjsFill />}
            label="NextJS"
            style="border-gray-500 text-gray-200 bg-gray-500/20"
          />

          <HomeCard
            icon={<SiFastapi />}
            label="Fast API"
            style="border-emerald-800 text-emerald-500 bg-emerald-800/20"
          />

          <HomeCard
            icon={<FaPython />}
            label="Python"
            style="border-cyan-800 text-cyan-500 bg-cyan-800/20"
          />
        </div>
      </section>
    </section>
  )
}

export default HomeHero;
