# MicroservicesTest-Django

Estructura de carpetas y archivos:
/go-service/:
main.go: Contiene el código del microservicio en Go.
go.mod: Define el módulo Go y sus dependencias.

/python-service/:
app.py: Contiene el código del microservicio en Python con Flask.
requirements.txt: Lista las dependencias de Python.

/frontend/:
pages/: Carpeta donde se guardan las páginas de Next.js.
components/: Carpeta para los componentes reutilizables de React.
package.json: Define las dependencias de tu aplicación Next.js.

/docker/:
Dockerfile.go: Dockerfile para contenedorización del servicio Go.
Dockerfile.python: Dockerfile para contenedorización del servicio Python.
Dockerfile.frontend: Dockerfile para contenedorización del servicio de front-end.
docker-compose.yml:
Archivo de configuración de Docker Compose para gestionar los contenedores.
--------------------------------------------------------------------------------------
Probar el entorno local:

Inicia Docker Compose: Ejecuta docker-compose up en la terminal desde la raíz del proyecto para iniciar todos los servicios.
Verifica los servicios: Asegúrate de que todos los servicios (Go, Python, PostgreSQL, y front-end) se inician correctamente.
Pruebas manuales: Abre un navegador y verifica las URL de los servicios. Por ejemplo, http://localhost:8080/users para el microservicio Go, http://localhost:5000/products para el microservicio Python, y http://localhost para la aplicación front-end.
Observa logs: Revisa los logs de los contenedores en Docker para identificar cualquier problema.
Automatiza las pruebas: Considera usar herramientas de prueba como Postman o Curl para realizar pruebas automáticas en tus servicios.