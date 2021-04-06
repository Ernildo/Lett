# Lett

Sistema de captura de dados do e-commerce **Magazine Luiza**.

<br>

## SOBRE <br>

O sistema foi construído com base na linguagem JavaScript em cima da runtime NodeJs. Não foi utilizado nenhuma biblioteca adicional para tratar as informações vindas do site da Mazine Luiza.

<br>

## INSTALAÇÃO e EXECUÇÃO

<br>

### **Instalação**

**1° Passo:** Faça o clone do projeto na sua maquina local. <br>
**2° Passo:** No seu computador, abra o terminal/CMD na pasta do projeto e execute o comando: `npm install`<br>
<br>

### **Execução**

**1° Passo:** No seu computador, abra o terminal/CMD na pasta do projeto e execute o comando: `npm start`

---

<br>

## TESTE

Apos executar a aplicação, abra agum programa de suporte a requisições como o **Postaman** ou **insomnia** para poder consumir a API.
<br>

### Documentação da API

| Rota                                  | Tipo     | Tipo do Corpo | Exemplo do corpo                                | Resposta | Descrição                                                                     |
| ------------------------------------- | -------- | ------------- | ----------------------------------------------- | -------- | ----------------------------------------------------------------------------- |
| `http://localhost:3000/status`        | **GET**  | Nenhum        | Nenhum                                          | texto    | Rota que retorna um 'ok' em txt                                               |
| `http://localhost:3000/scrap_product` | **POST** | JSON          | `{ "url": "url do produto no site da MagaLu" }` | JSON     | Rota que retorna um arquivo no formato JSON contento as infomações do produto |
