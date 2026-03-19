from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from app.services.global_retriever import GlobalRetriever
from langchain_core.runnables import RunnablePassthrough
from app.models.product import Product
from app.services.conversation_template_creator import ConversationTemplateCreator

load_dotenv()

class ConversationProcessor:
  @classmethod
  def invoke(cls, message):
    global_retreiver = GlobalRetriever.invoke()
    llm = ChatGoogleGenerativeAI(model="gemini-3.1-flash-lite-preview", temperature=0.5)
    conversation_prompt_template = ConversationTemplateCreator.invoke()

    chain = (
      { "message": RunnablePassthrough(), "documents": global_retreiver }
      | conversation_prompt_template
      | llm.with_structured_output(Product)
      | { "product": lambda product: product.model_dump_json() }
    )

    return chain.invoke(message)