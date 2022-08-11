# UberHub-api

uberhub-api é um projeto opensource que fornece seviços do [Uberhub](http://www.uberhub.com.br/) por web API.

## Serviços
### Endpoints de vagas

Listar vagas de empresas/startups.  
**URL:** https://uberhub-api.herokuapp.com/companies  
_resposta: array de [Company](https://github.com/JonRC/uberhub-api/blob/7cdf539a542ecbd38fdf0052afe503887eda28f2/src/Entities/Company.ts)_

Respostas prontas para uso no [Whatsapp](https://uberhub-api.herokuapp.com/companies?format=whatsapp)
e em [HTML](https://uberhub-api.herokuapp.com/companies?format=html)

Empresas disponíveis
- [x] [Zup](https://boards.greenhouse.io/zupinnovation)
- [x] [TQI](https://vagas.tqi.com.br)
- [x] [t10](https://t10.gupy.io/)
- [x] [Vale Card](https://valecard.gupy.io/)
- [x] [Ipê Digital](https://ipedigital.gupy.io/)
- [x] [Martins](https://tecnologiamartins.gupy.io/)
- [x] [Grupo Real](https://gruporeal.gupy.io/)
- [x] [Social Bank](https://socialbank.gupy.io/)
- [x] [Sankhya](https://sankhya.gupy.io/)
- [x] [Tribanco](https://tribanco.gupy.io/)
- [ ] _Sugira outras empresas [abrindo uma issue](https://github.com/JonRC/uberhub-api/issues/new)_




## Contribuição

Você pode contribuir criando novos `companyProviders` de alguma empresa de Uberlândia - MG.  
Algumas sugestões de empresas: [codesquare](https://codesquare.com.br/querosercoder/), [obuc](https://obuc.solides.jobs/), [kyros](https://www.kyros.com.br/oportunidade/), [vitta](https://boards.greenhouse.io/vitta/) e [nttdata](https://emealjobs.nttdata.com/pt-pt/ofertas-brasil)

## Principais tecnologias

Javascript  
Typescript  
NodeJs  
Puppeteer