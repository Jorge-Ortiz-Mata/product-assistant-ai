from dotenv import load_dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from app.services.global_retriever import GlobalRetriever
from langchain_core.runnables import RunnablePassthrough

load_dotenv()

class ConversationProcessor:
  @classmethod
  def invoke(cls, message):
    global_retreiver = GlobalRetriever.invoke()
    llm = ChatGoogleGenerativeAI(model="gemini-3.1-flash-lite-preview", temperature=0.5)
    prompt_template = ChatPromptTemplate.from_messages([
      ("system", """
        Eres un experto analista de productos. Responde el mensaje del usuario utilizando el contexto de una lista 
        de documentos que se te dará para realizarlo.
       
        Contexto - Documentos {documents}
        """
      ),
      ("user", "{message}")
    ])

    chain = (
      { "message": RunnablePassthrough(), "documents": global_retreiver }
      | prompt_template 
      | llm
    )
    
    response = chain.invoke(message)
    content = response.content[0]
    return content["text"]