import Link from "next/link";

export interface HomeAccessLinkProps {
  isActive: boolean;
}

const HomeAccessLink = ({ isActive }:HomeAccessLinkProps) => {
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
