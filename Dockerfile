FROM node:20-alpine AS build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3030
# ERROR => RUN useradd app
#          USER app
#CMD ["npm", "run", "dev"] TRY PROD
CMD ["npm", "start"]
