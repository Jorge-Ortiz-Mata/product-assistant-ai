import { ConversationProductProps } from "@/interfaces";
import ProductInfo from "./Info";

const ConversationProduct = ({ product }:ConversationProductProps) => {
  return(
    <section className="flex flex-col">
      {
        product
        ? <ProductInfo product={product} />
        : <div className="font-light text-sm text-gray-400">No hay información para mostrar</div>
      }
    </section>
  )
}

export default ConversationProduct;
