# AtividadeTecnicaProgramacao

Para rodar a Lista cinco, é necessário realizar os seguintes comandos no prompt de comando:

## BackEnd
- Execute o comando `npm install`
- Crie um arquivo .env na pasta BackEnd com o seguinte conteúdo:

`DATABASE_URL="mysql://root:senha@localhost:3306/nameDatabase"`
`DATABASE_URL_WITH_SCHEMA=${DATABASE_URL}?schema=public`

**Certifique-se de substituir "senha", "localhost:3306", "nameDatabase" e outros detalhes necessários no arquivo .env, conforme a configuração do seu ambiente.**

- Em seguida, execute `npx prisma generate`
- Depois, execute `npx prisma migrate dev`
- Para rodar o servidor, execute `npm run dev`

## FrontEnd
- Execute o comando `npm install`
- Para rodar o aplicativo, execute `npm run start`

