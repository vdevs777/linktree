<h1 align="center">Linktree</h1>

<p align="center">
  Uma página pessoal para centralizar links, projetos e redes sociais em um só lugar.
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/vdevs777/linktree?style=flat-square" alt="License" />
  <img src="https://img.shields.io/github/languages/top/vdevs777/linktree?style=flat-square" alt="Top Language" />
  <img src="https://img.shields.io/github/last-commit/vdevs777/linktree?style=flat-square" alt="Last Commit" />
</p>

---

## ✨ Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prismic](https://prismic.io/)
- [Phosphor Icons](https://phosphoricons.com/)

## 💻 Projeto

O Linktree é uma página pessoal desenvolvida para centralizar links, projetos e redes sociais em um único lugar.

A aplicação possui um perfil com avatar, links personalizados e atalhos para redes sociais. Todo o conteúdo é gerenciado através do [Prismic](https://prismic.io/), permitindo atualizar as informações sem precisar alterar o código da aplicação.

O projeto também possui suporte aos temas claro e escuro e conta com um layout responsivo, adaptado para dispositivos desktop e mobile.

## 🎨 Funcionalidades

- 👤 Exibição de avatar e informações do perfil
- 🔗 Links personalizados
- 🌐 Links para redes sociais
- 🌓 Tema claro e escuro
- 📱 Layout responsivo
- 🖼️ Backgrounds específicos para desktop e mobile
- 📝 Conteúdo gerenciado pelo Prismic
- ⚡ Renderização com Next.js

## 🔖 Layout

O layout da aplicação foi desenvolvido com base em um projeto criado no [Figma](https://www.figma.com/).

> Este projeto foi desenvolvido como um desafio prático, com o objetivo de reproduzir o layout proposto e implementar sua integração com um CMS.

## 🚀 Como executar

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

Também é necessário possuir um repositório no [Prismic](https://prismic.io/) configurado para a aplicação.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/vdevs777/linktree.git
```

Acesse a pasta do projeto:

```bash
cd linktree
```

Instale as dependências:

```bash
pnpm install
```

Configure as variáveis de ambiente necessárias para o Prismic.

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

## 🗂️ CMS

O conteúdo da aplicação é gerenciado através do [Prismic](https://prismic.io/).

O projeto utiliza um Custom Type chamado `Profile`, responsável por armazenar:

- Avatar
- Nome de usuário
- Links
- Redes sociais
- Ícones das redes sociais

Dessa forma, o conteúdo da página pode ser atualizado diretamente pelo CMS, sem a necessidade de modificar o código da aplicação.

## 📁 Estrutura

```text
src/
├── app/
│   ├── loading.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── providers/
├── components/
│   ├── avatar.tsx
│   ├── theme-switcher.tsx
│   └── ...
├── lib/
│   └── prismicio.ts
└── slices/
```

## 📝 License

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<p align="center">
  Feito por <a href="https://github.com/vdevs777">vdevs777</a> 🥔
</p>
