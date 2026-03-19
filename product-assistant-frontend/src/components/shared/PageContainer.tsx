import { PageContainerProps } from "@/interfaces";

const PageContainer = ({ children }:PageContainerProps) => {
  return(
    <main
      className="
      flex
      flex-col
      w-full
      bg-linear-to-br
      from-[#020617]
      to-[#25272f]
      text-white
      overflow-auto
      py-20
      px-5
      "
    >
      {children}
    </main>
  )
}

export default PageContainer;
