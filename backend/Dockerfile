# Utiliser l'image de base node:lts-alpine
FROM node:lts-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances (package.json et package-lock.json)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du serveur dans le conteneur
COPY . .

# Exposer le port sur lequel l'application va écouter
EXPOSE 3001

# Démarrer l'application
CMD ["npm", "start"]
