# 🤖 Product Assistant (AI RAG System)

Product Assistant es una aplicación Full-Stack impulsada por Inteligencia Artificial que actúa como un experto investigador de catálogos y especificaciones. 

Utilizando una arquitectura **RAG (Retrieval-Augmented Generation)**, el sistema ingesta documentos de productos (PDFs), los vectoriza y permite a los usuarios hacer preguntas en lenguaje natural. El modelo de IA recupera el contexto semántico exacto de la base de datos y genera respuestas precisas, evitando alucinaciones y basándose estrictamente en la información de la empresa.

## 🔗 Enlaces de Producción (Accesos Rápidos)

Para referencia rápida del desarrollador, aquí están los enlaces del entorno en vivo:

* **Frontend (Aplicación Web):** [[Ingresa tu URL de Next.js / Cloud Run aquí](https://product-assistant-frontend-28604544957.us-central1.run.app/)]
* **Backend (API de FastAPI):** [[Ingresa tu URL de FastAPI / Cloud Run aquí](https://product-assistant-backend-28604544957.us-central1.run.app/docs)]
* **Feature Flag (Kill Switch):** [[Ingresa tu URL del Gist o npoint.io aquí](https://www.npoint.io/docs/41dc8576d3cf632cf7e6)]
* **Base de Datos Vectorial:** ChromaDB Cloud Dashboard

## 🏗️ Arquitectura y Flujo de Trabajo

El proyecto está dividido en dos flujos principales:

1. **Pipeline de Ingesta:** Se suben documentos PDF, se procesan usando LangChain para dividir el texto en fragmentos (*chunks*), se convierten en vectores dimensionales usando modelos de embeddings de Google y se almacenan en ChromaDB.
2. **Pipeline de Consulta (Chat):** El usuario envía un *prompt*. El sistema busca los fragmentos más relevantes en ChromaDB (búsqueda híbrida/vectorial) y se los pasa a un LLM como contexto para formular una respuesta estructurada y precisa.

## 🛠️ Stack Tecnológico

* **Frontend:** Next.js (TypeScript), TailwindCSS, Axios.
* **Backend:** FastAPI (Python), Uvicorn, Pydantic.
* **Inteligencia Artificial:** * Orquestación: LangChain.
  * Embeddings: `gemini-embedding-2-preview` (Google AI).
  * LLM (Generación): `gemini-3.1-flash-lite-preview` (Google AI).
* **Base de Datos Vectorial:** ChromaDB Cloud.
* **Infraestructura & Despliegue:** Docker, GitHub Actions (CI/CD), Google Cloud Run.

## 🚀 Desarrollo Local

Ambos entornos están contenerizados para asegurar paridad entre desarrollo y producción.

### Requisitos Previos

* Docker y Docker Compose instalados.
* Credenciales de Google Gemini API y ChromaDB Cloud.

### Variables de Entorno
Crea un archivo `.env` en la raíz del backend con las siguientes variables:

```env
GOOGLE_API_KEY="tu_clave_aqui"
CHROMA_API_TOKEN="tu_token_aqui"
CHROMA_TENANT="tu_tenant_aqui"
CHROMA_DATABASE="tu_base_de_datos"
CHROMA_COLLECTION="product_assistant"
```
