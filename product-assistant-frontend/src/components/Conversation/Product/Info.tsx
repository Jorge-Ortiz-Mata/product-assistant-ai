import { ProductInfoProps } from "@/interfaces";

const ProductInfo = ({ product }:ProductInfoProps) => {
  return(
    <section className="flex flex-col border border-cyan-950 p-4 rounded-xl bg-black/20 gap-10">
      <section className="flex flex-col gap-1">
        <div className="flex items-center w-full gap-2">
          <div className="text-cyan-400 text-lg font-semibold">{product.name}</div>
          <div className="text-xs uppercase bg-purple-950 text-purple-300 p-1 px-3 py-1 rounded-xl">{product.category}</div>
        </div>
        <div className="uppercase text-xs text-gray-400">ID: {product.id}</div>
      </section>
      <section className="p-2 text-sm font-light rounded-xl bg-gray-800 flex flex-col gap-2">
        <div className="text-cyan-500 font-semibold">
          Resumen del producto
        </div>
        <div className="text-gray-300">
          {product.summary}
        </div>
      </section>
      <section className="flex w-full gap-5 justify-center">
        <div className="w-full flex flex-col gap-2">
          <span className="font-semibold uppercase text-xs text-purple-300">Highligths</span>
          <div className="flex flex-col gap-2 items-start">
            {
              product.highlights.map(
                (item, index) => <div key={index} className="text-xs text-cyan-400 border border-cyan-400 bg-cyan-950 px-3 py-1 rounded-xl">{item}</div>
              )
            }
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="font-semibold uppercase text-xs text-purple-300">Precios de lanzamiento</span>
          <div className="flex flex-col gap-2 items-start">
            {
              product.prices_list.map(
                (item, index) => <div key={index} className="text-xs text-gray-200 border border-gray-200 bg-gray-950 px-3 py-1 rounded-xl">
                  <span className="font-medium text-emerald-400">{item.amount}</span> - <span>{item.name}</span>
                </div>
              )
            }
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="font-semibold uppercase text-xs text-purple-300">Especificaciones tecnicas</span>
          <div className="flex flex-col gap-2 items-start">
            {
              product.specifications.map(
                (item, index) => <div key={index} className="text-xs text-cyan-400 border border-cyan-400 bg-cyan-950 px-3 py-1 rounded-xl">{item}</div>
              )
            }
          </div>
        </div>
      </section>
    </section>
  )
}

export default ProductInfo;
