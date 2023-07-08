# Desafio Medgrupo

O projeto foi gerado com a [Angular CLI](https://github.com/angular/angular-cli) na versão 16.1.0.
MVP desenvolvido com o intuito de mostrar as execuções de um CRUD simples utilizando metodologias conhecidas no Angular. Optei por desenvolver um CRUD completo na listagem das escolas ao invés de fazer duas tabelas de consulta, dessa forma consigo mostrar mais skills e uma diversidade maior de conhecimento.

## Para rodar o projeto localmente

Antes de tudo, é importante que vc rode um `npm i` em seu terminal para a instação de todas as libs utilizadas.

Após, é indispensável que você inicie o json-server para que se inicialize o mock criado com os dados das escolas. Rode os seguintes comandos em seu terminal.

> cd src/app/mocks
> json-server watch db.json

Por questões de boas práticas, optei por colocar o arquivo de mock dentro da pasta app, por isso necessário o primeiro comando para encontrar o arquivo db.json.

---

Com o json-server iniciado, rode o comando `ng serve`. O projeto será rodado no localhost:4200
