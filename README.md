# UberHub-api

O objetivo desse projeto é fornecer serviços do [Uberhub](http://www.uberhub.com.br/) por web API.

## Serviços
### Endpoints de vagas

Listar vagas das empresas disponíveis.  
**URL:** https://jobwebscraper.herokuapp.com/companies  
_resposta: array de [Company](https://github.com/JonRC/uberhub-api/blob/7cdf539a542ecbd38fdf0052afe503887eda28f2/src/Entities/Company.ts)_

Respostas prontas para uso:  
Whatsapp: https://jobwebscraper.herokuapp.com/companies?format=whatsapp  
HTML: https://jobwebscraper.herokuapp.com/companies?format=html

Empresas disponíveis
- [x] [Zup](https://boards.greenhouse.io/zupinnovation)
- [x] [TQI](https://vagas.tqi.com.br)
- [ ] _Sugira outras empresas [abrindo uma issue](https://github.com/JonRC/uberhub-api/issues/new)_

## Principais tecnologias

Javascript  
Typescript  
NodeJs  
Puppeteer
