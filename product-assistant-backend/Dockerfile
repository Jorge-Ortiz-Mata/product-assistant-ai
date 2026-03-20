# Usamos una imagen oficial y ligera de Python
FROM python:3.14-slim

# Evita que Python escriba archivos .pyc y fuerza a que la salida de consola sea inmediata
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Creamos el directorio de trabajo
WORKDIR /app

# Copiamos primero los requerimientos para aprovechar el caché de Docker
COPY requirements.txt .

# Instalamos las dependencias sin guardar caché temporal para mantener la imagen ligera
RUN pip install --no-cache-dir -r requirements.txt

# Copiamos el resto de tu código
COPY . .

# Exponemos el puerto que usa FastAPI
EXPOSE 8000

# Comando para arrancar el servidor con Uvicorn (Asegúrate de que 'main' sea el nombre de tu archivo principal)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]