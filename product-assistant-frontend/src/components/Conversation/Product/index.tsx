import { ConversationProductProps } from "@/interfaces";
import ProductInfo from "./Info";

const ConversationProduct = ({ product }:ConversationProductProps) => {
  return(
    <section className="flex flex-col gap-5">
      <h4 className="text-center font-medium text-gray-400">Resultados del producto analizado</h4>
      {
        product
        ? <ProductInfo product={product} />
        : <div className="font-light text-sm text-gray-400">No hay información para mostrar</div>
      }
    </section>
  )
}

export default ConversationProduct;
