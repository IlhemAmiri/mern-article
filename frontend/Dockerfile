# Utiliser l'image de base node:lts-alpine
FROM node:lts-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances (package.json et package-lock.json)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du client dans le conteneur
COPY . .

# Construire l'application React
RUN npm run build

# Installer un serveur HTTP léger (serve)
#RUN npm install -g serve

# Exposer le port sur lequel l'application va écouter
EXPOSE 3000

# Démarrer le serveur pour servir les fichiers de build
CMD ["npm", "run", "start"]
