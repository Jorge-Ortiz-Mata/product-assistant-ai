# 1. Usamos una imagen de Node.js básica
FROM node:22-alpine

# 2. Creamos la carpeta de trabajo
WORKDIR /product-assistant-frontend

# 3. Copiamos los archivos de dependencias
COPY package.json package-lock.json ./

# 4. Instalamos las dependencias normales
RUN npm install

# 5. Copiamos el resto de tu código
COPY . .

# 6. Construimos la aplicación
RUN npm run build

# 7. Exponemos el puerto 3000
EXPOSE 3000

# 8. Arrancamos Next.js de la forma tradicional
CMD ["npm", "start"]
