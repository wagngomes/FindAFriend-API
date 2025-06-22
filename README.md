# Aplicação desenvolvida para avaliação final do módulo 3 do curso de Node.js da Rocketseat

Esta aplicação foi construída utilizando os princípios da **Clean Architecture**, com as seguintes tecnologias:

- **Prisma ORM**
- **Fastify**
- **TypeScript**

---

### ✅ Regras da aplicação

- [x] Deve ser possível cadastrar um pet  
- [x] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade  
- [x] Deve ser possível filtrar pets por suas características  
- [x] Deve ser possível visualizar detalhes de um pet para adoção  
- [x] Deve ser possível se cadastrar como uma ORG  
- [x] Deve ser possível realizar login como uma ORG  

---

### ✅ Regras de negócio

- [x] Para listar os pets, é obrigatório informar a cidade  
- [x] Uma ORG precisa ter um endereço e um número de WhatsApp  
- [x] Um pet deve estar vinculado a uma ORG  
- [x] O usuário interessado em adotar entrará em contato com a ORG via WhatsApp  
- [x] Todos os filtros, além da cidade, são opcionais  
- [x] Para uma ORG acessar a aplicação como admin, ela precisa estar logada  

---

### 🚀 Como rodar a aplicação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositório>

2. Instale as dependências:

    npm install

3. Inicie o banco de dados:
    
    docker compose up
    
4. Inicie a aplicação em modo de desenvolvimento:

    npm run dev