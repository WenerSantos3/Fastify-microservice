# Imagem base
FROM node:22.11.0

WORKDIR /app

COPY ./ ./

RUN npm install
RUN npx prisma generate
EXPOSE 3000

CMD ["pm2-runtime", "start", "pm2.config.js"]