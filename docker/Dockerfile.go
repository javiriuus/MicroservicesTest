FROM golang:1.20-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de Go (go.mod y go.sum)
COPY go.mod go.sum /app/

# Descarga las dependencias
RUN go mod download

# Copia el código fuente
COPY main.go /app/

# Compila el código fuente y crea el ejecutable
RUN go build -o main main.go

# Crea una nueva etapa de imagen con Alpine
FROM alpine:latest

# Establece el directorio de trabajo
WORKDIR /app

# Copia el ejecutable compilado desde la etapa anterior
COPY --from=builder /app/main /app/

# Ejecuta el servicio
CMD ["./main"]
