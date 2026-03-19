import Link from "next/link"

const NavBar = () => {
  return(
    <nav className="flex items-center w-full justify-between mb-20 p-3 border-b border-cyan-700/50">
      <div className="flex gap-2 font-semibold text-lg">
        <Link href="/">
          🤖 Product <span className="text-[#00a7b3]">Insight AI</span>
        </Link>
      </div>
      
      <ul className="flex items-center gap-10">
        <li className="text-gray-300 text-sm">
          <Link href="/conversation">
            Conversar
          </Link>
        </li>

        <li className="text-gray-300 text-sm">
          <Link href="/documents">
            Cargar Documentos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
