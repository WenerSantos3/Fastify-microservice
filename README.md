# Fastify Microservice

Este é um microserviço que gerencia a tabela `global-settings`, que é extraída de um banco de dados de outro projeto. A tabela contém configurações globais necessárias para a operação de outros serviços.

## Tecnologias Usadas

- **Fastify**: Framework web rápido e eficiente para Node.js.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
- **Prisma**: ORM para interagir com o banco de dados de forma simples e segura.

## Estrutura

A estrutura do projeto segue a seguinte organização:

Fastify-microservice/ ├── prisma/ │ ├── schema.prisma # Esquema do Prisma para a tabela "global-settings" │ └── migrations/ # Migrações do Prisma ├── src/ │ ├── routes/ │ │ └── globalSettingsRoutes.ts # Definições de rotas para o domínio "globalSettings" │ ├── entities/ │ │ └── globalSettingsEntity.ts # Entidade representando os dados da tabela "global-settings" │ ├── modules/ │ │ ├── globalSettings/ │ │ │ ├── tests/ │ │ │ │ └── globalSettings.test.ts # Testes unitários para "globalSettings" │ │ │ ├── globalSettingsController.ts # Controlador para operações de "globalSettings" │ │ │ ├── globalSettingsService.ts # Serviço que contém a lógica de negócios │ │ │ └── globalSettingsRepository.ts # Repositório para interações com o banco (Prisma) │ ├── middlewares/ │ │ └── authMiddleware.ts # Middleware para autenticação (se necessário) │ └── utils/ │ └── helpers.ts # Funções auxiliares compartilhadas ├── .env # Variáveis de ambiente (ex.: DATABASE_URL) ├── .env.example # Exemplo de configurações de ambiente ├── .gitignore # Arquivos ignorados pelo Git ├── package.json # Configurações e dependências do projeto ├── package-lock.json # Arquivo de lock do npm └── README.md # Documentação do projeto


Certifique-se de usar a formatação de código para a árvore de diretórios, como mostrado acima, para que ela apareça corretamente no GitHub. Isso mantém o visual limpo e facilita a leitura.
