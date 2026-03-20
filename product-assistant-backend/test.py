import os
import chromadb
from dotenv import load_dotenv

load_dotenv()

client = chromadb.CloudClient(
  api_key=os.getenv("CHROMA_API_TOKEN"),
  tenant=os.getenv("CHROMA_TENANT"),
  database=os.getenv("CHROMA_DATABASE"),
)

collection = client.get_collection(name=os.getenv("CHROMA_COLLECTION"))

print(collection)