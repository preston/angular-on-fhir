FROM node:19-alpine AS builder
RUN mkdir -p /app
WORKDIR /app

COPY package.json .

RUN npm install
COPY . .

RUN npm run build --prod

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

# Remove any default nginx content
RUN rm -rf *

## Copy build from "builder" stage, as well as runtime configuration script public folder
COPY --from=builder /app/dist/angular-on-fhir .
COPY --from=builder /app/configure-from-environment.sh .

# CMD ["./configure-from-environment.sh", "&&", "exec", "nginx", "-g", "'daemon off;'"]
CMD /bin/sh /usr/share/nginx/html/configure-from-environment.sh && exec nginx -g 'daemon off;'
# ENTRYPOINT ["./configure-from-environment.sh"]
# CMD ["nginx", "-g", "daemon off;"]
