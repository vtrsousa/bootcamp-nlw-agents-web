# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplicação web para gerenciamento de salas e perguntas com funcionalidades de áudio.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento para React
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **TanStack Query** - Gerenciamento de estado e cache de dados
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **Day.js** - Manipulação de datas
- **Biome** - Linter e formatter

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── http/          # Hooks e tipos para requisições HTTP
├── lib/           # Utilitários e configurações
└── utils/         # Funções utilitárias
```

## 🛠️ Setup e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd web
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção

## 🎯 Funcionalidades

- Criação de salas
- Sistema de perguntas
- Gravação de áudio
- Interface responsiva e moderna

## 📝 Padrões de Projeto

- **Componentes Funcionais** com hooks do React
- **TypeScript** para tipagem estática
- **React Query** para gerenciamento de estado e cache
- **React Hook Form** com Zod para validação
- **Tailwind CSS** para estilização
- **Path aliases** (@/) para importações
- **Biome** para linting e formatação de código 