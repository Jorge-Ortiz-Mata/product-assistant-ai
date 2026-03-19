import Link from "next/link";
import { CiSquareChevLeft } from "react-icons/ci";

const DocumentsHero = () => {
  return(
    <section className="flex items-center gap-3 w-full">
      <Link
        className="text-cyan-400 duration-300 hover:text-cyan-600 text-6xl"
        href="/conversation"
      >
        <CiSquareChevLeft />
      </Link>

      <section className="flex flex-col w-full gap-1">
        <h2 className="text-3xl font-semibold">
          Document Process - Product Insight
        </h2>
        <div className="text-gray-300 font-light text-sm">
          Sube la documentación que quieras consultar. Solo se admiten archivos PDF
        </div>
      </section>
    </section>
  )
}

export default DocumentsHero;
