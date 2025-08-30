FROM node:18-bullseye

# Instalar herramientas de compilación
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    gcc \
    python2 \
    && rm -rf /var/lib/apt/lists/*

# Configurar python2 como python (algunas versiones de node-gyp lo necesitan)
RUN update-alternatives --install /usr/bin/python python /usr/bin/python2 1 && \
    update-alternatives --install /usr/bin/python python /usr/bin/python3 2

WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package*.json ./

# Instalar paquetes - IMPORTANTE: NO usar --omit=dev todavía
RUN npm cache clean --force && \
    npm install --legacy-peer-deps --verbose

#COPY database/ ./database/

# Copiar el resto del código
COPY . .

# Exponer el puerto
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]
