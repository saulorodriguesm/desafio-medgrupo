# Desafio Medgrupo

O projeto foi gerado com a [Angular CLI](https://github.com/angular/angular-cli) na versão 16.1.0.
MVP desenvolvido com o intuito de mostrar as execuções de um CRUD simples utilizando metodologias conhecidas no Angular. Optei por desenvolver um CRUD completo na listagem das escolas ao invés de fazer duas tabelas de consulta, dessa forma consigo mostrar mais skills e uma diversidade maior de conhecimento.

---

### Organização dos arquivos

Optei por não inventar a moda e seguir a organização que utilizavamos na minha ultima experiência profissional, entendo que essa organização irá variar de empresa para empresa e de squad para squad. A organização pode ser vista e analisada no próprio repositório.

---

### Libs utilizadas

#### Angular Material

Para economizar tempo com estilização e também para seguir um padrão de mercado, optei por utilizar a lib de componentes mais popular do Angular. Dela utilizei além de ícones e outros elementos de estilização, a tabela que além de vir com uma formatação limpa e intuitiva traz alguns facilitadores na hora de carregar listagens em seu conteúdo.

#### RxJS

Também utilizei o popular RxJS para chamar o Observable, que auxiliou nas minhas chamadas à API.

#### Json-Server

Para criar uma API falsa, criei um arquivo `db.json` e utilizei o json-server para hospedar esse mock em uma URL localhost para que fosse possível simular os métodos GET, POST e PUT.

#### Rodando o projeto local

1. Antes de tudo, é importante que vc rode um `npm i` em seu terminal para a instação de todas as libs utilizadas.

2. Após, é indispensável que você inicie o json-server para que se inicialize o mock criado com os dados das escolas. Rode os seguintes comandos em seu terminal.

> cd src/app/mocks

> json-server watch db.json

Por questões de boas práticas, optei por colocar o arquivo de mock dentro da pasta app, por isso necessário o primeiro comando para encontrar o arquivo db.json.

3. Com o json-server iniciado, rode o comando `ng serve`. O projeto será rodado no localhost:4200

---

#### Hospedado em PROD

Foi utilizado o VERCEL para disponibilizar uma versão da aplicação em produção.
Pode ser visualizado no seguinte [link](https://desafio-medgrupo.vercel.app/)
