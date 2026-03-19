import Link from "next/link";

const DocumentsConsiderations = () => {
  return(
    <section className="flex flex-col w-full gap-3 text-sm font-light">
      <h2 className="font-semibold text-lg">
        Consideraciones del documento
      </h2>

      <div>
        Para obtener los mejores resultados de busqueda de documentos, se require que la documentación cuente con los siguientes
        puntos ya que el modelo está entrenado a buscar partes especificas de cada producto como:
      </div>
    
      <ul className="flex flex-col gap-0.5">
        <li>- ID del producto</li>
        <li>- Nombre</li>
        <li>- Categoria</li>
        <li>- Resumen del producto</li>
        <li>- Precios de lanzamiento (nombre y cantidad)</li>
        <li>- Lista de especificaciones técnicas</li>
        <li>- Caracteristicas clave</li>
      </ul>

      <div className="flex flex-wrap gap-1">
        Puedes consultar este documento PDF como guia de la estructura del documento.
        <Link
          target="_blank"
          href="/rag-products-fake.pdf" 
          download={true}
          className="text-cyan-400 duration-300 hover:text-cyan-600 underline"
        >
          Productos Dummy
        </Link>
      </div>
    </section>
  )
}

export default DocumentsConsiderations;
