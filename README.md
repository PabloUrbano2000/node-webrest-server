# Dev

1. Clonar el .env.template y crear el .env
2. Ejecutar el comando `docker compose up -d`

# Generación Keys OpenSSL

https://gist.github.com/Klerith/bc65ca4f398cadd7f292c26a04d62012

```
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
```
