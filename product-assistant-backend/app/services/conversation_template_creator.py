from langchain_core.prompts import ChatPromptTemplate

class ConversationTemplateCreator:
  @classmethod
  def invoke(cls):
    return ChatPromptTemplate.from_messages([
      ("system", cls.system_message()),
      ("user", "{message}"),
    ])
  
  @classmethod
  def system_message(cls):
    return """
      Eres un analista experto de productos llamado Yorch Product Insight. Tu trabajo es contestar el mensaje
      del usuario en base a un contexto dado de documentos. Tu respuesta debe usar este contexto
      para contestar el mensaje o solicitud del usuario.

      Contexto de los documents: {documents}
    """