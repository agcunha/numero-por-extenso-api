let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

// Nossa suite de teste relacionada a artigos
describe('Numeros', () => 

  // No describe podemos passar um texto para identificação 
  describe('/GET 1234', () => {
        it('Testando GET para 1234', (done) => {
            chai.request('http://localhost:3000') 
                .get('/1234') 
                .end((err, res) => { 
                    res.should.have.status(200); // verificando se o retorno e um status code 200
                    res.body.should.be.a('Object'); // Verificando se o retorno e um objeto
                  done();
                });
        });
    }));
  

