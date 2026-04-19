## Documentação da API de Gerenciamento de Produtos (RESTful) 

Este projeto consiste em uma API desenvolvida em Node.js e Express, refatorada para seguir os padrões da arquitetura REST. A API permite realizar operações de CRUD (Create, Read, Update, Delete) em um catálogo de produtos.

## 🛠️ Tecnologias Utilizadas
· Node.js: Ambiente de execução.
· Express: Framework para construção de APIs.
· Postman: Ferramenta para testes de endpoints.

## 🚀 Passo a Passo: Do Código ao Postman

1. Configuração do Ambiente: 
Certifique-se de que o Node.js está instalado. Siga os comandos no terminal:
 # Entre na pasta do projeto
```bash
cd Minha_API
```

# Instale as dependências listadas no package.json
```bash
npm install
```

2. Iniciando o Servidor:
Para que o servidor reinicie automaticamente a cada alteração, utilize o modo de observação do Node:
```bash
node --watch server-restful.js
```

O terminal deve exibir: Servidor RESTful rodando em http://localhost:3000.

## 📡 Endpoints e Como Testar no Postman
Para cada teste abaixo, abra uma nova aba no Postman e configure conforme as instruções:

## 🟢 Listar Produtos (GET)
· URL: http://localhost:3000/produtos
· Método: GET
· Ação: Clique em Send.
· Resposta esperada: Status 200 OK e a lista de produtos em JSON.

## 🔵 Buscar Produto por ID (GET)
· URL: http://localhost:3000/produtos/1
· Método: GET
· Resposta esperada: Status 200 OK com os dados apenas do produto 1.
· Teste de erro: Use /999 para receber 404 Not Found.

## 🟡 Criar Novo Produto (POST)
· URL: http://localhost:3000/produtos
· Método: POST
· Configuração do Body: 1. Vá em Body > raw.
2. No canto direito, mude para JSON.
3. Cole o JSON:
```
{ "nome": "Mouse Gamer", "preco": 250, "estoque": 10, "categoria": "Periféricos" }
```
· Resposta esperada: Status 201 Created.

## 🟠 Atualizar Produto (PUT)
· URL: http://localhost:3000/produtos/1
· Método: PUT
· Configuração do Body: (Mesmo processo do POST)
```
{ "nome": "Notebook Atualizado", "preco": 8000, "estoque": 5, "categoria": "Eletrônicos" }
```
· Resposta esperada: Status 200 OK.

## 🔴 Remover Produto (DELETE)
· URL: http://localhost:3000/produtos/1
· Método: DELETE
· Resposta esperada: Status 204 No Content (a resposta virá vazia, o que é o padrão correto).

# 🛡️ Validações e Segurança
A API possui um middleware de Logger que registra todas as requisições no terminal com data e hora. Além disso, o endpoint de criação possui validação:
Se o nome não for enviado ou o preco for menor ou igual a zero, a API retorna 400 Bad Request.