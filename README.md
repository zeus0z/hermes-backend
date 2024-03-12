# Backend Hermes (em desenvolvimento)

## Overview
Esse é o repositório do backend da aplicação [Hermes](https://github.com/zeus0z/hermes-frontend), destinada ao gerenciamento de estoque e fluxo de caixa para comerciantes varejistas. 
Inclui os Models e Controllers da aplicação, responsáveis por lidar com o banco de dados e autenticação.

## Estrutura do Projeto
- O Hermes é composto de um [frontend em NextJS](https://github.com/zeus0z/hermes-frontend) e um backend construído em NestJS (este repositório), usando um banco de dados MySQL. 
- A aplicação faz uso do modelo MVC (Model, View, Controller)

## Tecnologias Usadas
- NestJS é o framework utilizado para criação dos models e controllers.
- Firebase Auth foi usado para autenticação
- Prisma foi a ORM escolhida para lidar com o banco de dados
- Banco de dados MySQL

## Desafios Encontrados / Lições Aprendidas
- Como foi meu primeiro projeto construindo um backend com um framework moderno, tive que aprender as nuances de como construir uma aplicação segura e eficiente, etapa por etapa, do zero. Aprendi muito sobre backend construindo esse projeto, mais do que vários cursos que já fiz.
- Fazer uso intenso do Typescript, achando erros no momento do desenvolvimento.
- Como manter as API keys seguras
- Como lidar com um banco de dados, fazer operações com ele, processar dados e devolvê-los para o frontend
  

## Ajustes e Melhorias
O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Gerenciamento de Estoque (Criação e edição de produtos)
- [x] Autenticação
- [ ] Fluxo de caixa (com opção de lançar vendas que abatem o item no estoque automaticamente)
- [ ] Gráfico de Fluxo de Caixa
- [ ] Containers de Docker do projeto

## Instruções de Instalação
Containers de Docker para rodar o app chegando em breve!


