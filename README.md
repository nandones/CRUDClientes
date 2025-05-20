# CRUDClientes
> Projeto da disciplina de Tópicos Especiais em Programação, sétima fase do curso de Ciência da Computação. Visando a familiarização com APIs rest, o projeto consulta um server da 
>  [Beeceptor](https://app.beeceptor.com/crud-api). Caso o app não funcione, pode ser necessário gerar uma nova chave de acesso clicando no link fornecido acima, e no botão
> `Create CRUD API`, e o substituindo na variável __baseURL__, localizada em **services > api.js**, linha 4.
>
> O app permite realizar as operações básicas de CRUD, com memória persistente.


# Como Rodar a Aplicação

É necessário possuir **Node.js** e **Expo CLI** instalado em seu desktop, e um dispositivo móvel com **Expo Go**.

## Pré-requisitos

- Verifique a presença do Node.js:
  ```bash
  node --version   # Deve retornar v18.x ou superior
  npm --version    # Deve retornar v9.x ou superior
  ```
  Caso esteja ausente, instale a partir de: [https://nodejs.org/pt](https://nodejs.org/pt)

- Verifique a presença do Expo CLI:
  ```bash
  expo --version   # Deve retornar a versão instalada (ex: 7.x)
  ```
  Caso esteja ausente, execute no terminal:
  ```bash
  npm install -g expo-cli
  ```

- Caso possua problemas com o Expo GO, recomendo o seguinte tutorial:  
  [https://youtu.be/xKGESzemfdw?si=FYsF8Y7M9ywaVL4g](https://youtu.be/xKGESzemfdw?si=FYsF8Y7M9ywaVL4g)

## Clonando e Rodando o Projeto

1. Clone o repositório.
2. Com o repositório aberto na IDE de sua preferência, execute:
   ```bash
   npm install
   ```
3. Inicie a aplicação:
   ```bash
   npm start
   ```

4. Você pode agora escanear o QR code que aparecerá no terminal com seu dispositivo móvel para abrir a aplicação, ou pressionar **"a"** para abrir o emulador Android (caso tenha seguido o tutorial mencionado), ou "w" para abrir no navegador.

---


