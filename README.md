# numero-por-extenso-api

Api escrita em nodejs que descreve números na forma por extenso

Para compilar o container docker:

* docker build -f Dockerfile .

Para executar:

* docker run -e VERSION=1.1 -p 9000:3000 <id_container>

Exemplor de uso:

GET http://localhost:9000/-100

Response: {
	"extenso" : "menos cem"
}


