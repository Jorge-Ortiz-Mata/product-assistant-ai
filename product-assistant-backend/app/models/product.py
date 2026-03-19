from pydantic import BaseModel, Field

class Product(BaseModel):
  id: str = Field(description="ID del producto")
  name: str = Field(description="Nombre del producto")
  category: str = Field(description="Categoria del producto")
  shortSummary: str = Field(description="Resumen corto y breve del producto")
  summary: str = Field(description="Resumen completo del producto")
  prices_list: list[dict] = Field(description="Lista de precios de lanzamiento. Cada precio tiene un amount (precio) y un name (edición o nombre del lanzamiento)")
  specifications: list[str] = Field(description="Lista de especificaciones del producto")
  highlights: list[str] = Field(description="Lista de caracteristicas claves")  
