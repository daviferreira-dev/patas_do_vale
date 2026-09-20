# Plano de Trabalho — Patas do Vale (Desafio Vue JS)

Divisão de tarefas do desafio "Portal de Adoção de Animais" (ver PDF em `public/docs/`).
Trabalho dividido em 3 pessoas. Cada um trabalha na própria branch e depois integra em `main`.

## Pessoa 1 (davi) — Preparação do projeto + Tela Início

Responsável pela base técnica que todo mundo depende, então deve ser feita **primeiro**.

### 1. Preparação técnica
- [ ] Confirmar Vue Router instalado (`package.json` já tem `vue-router`? checar).
- [ ] Confirmar `main.js` **sem** `createPinia`/`app.use(createPinia())` — Pinia não é usado neste desafio.
- [ ] Criar pasta `src/assets/images` (se não existir) e colocar lá as imagens locais (mínimo 4 no projeto todo).
- [ ] Ajustar `src/App.vue`: manter `<nav class="menu">` com os 3 links (`/`, `/animais`, `/cuidados`) via `RouterLink`, `<RouterView />` no meio, e rodapé com os nomes dos integrantes.
- [ ] Deixar `src/router/index.js` com a estrutura base (rotas `/`, `/animais`, `/cuidados` apontando para as 3 views) para os outros dois preencherem/ajustarem.

### 2. Tela Início (`src/views/InicioView.vue`)
- [ ] Título "Patas do Vale".
- [ ] Imagem de destaque (cão/gato ou tema de adoção) importada de `src/assets/images` — **nunca** URL externa direto no `src`.
- [ ] Parágrafo com pelo menos 3 linhas explicando o propósito do portal.
- [ ] Frase convidando a conhecer os animais.
- [ ] `RouterLink` para `/animais`.
- [ ] CSS simples (pode seguir o exemplo do PDF: `.pagina`, `.apresentacao`, `.etiqueta`, `img { object-fit: cover; border-radius: 10px; }`).
- [ ] Testar em janela estreita (responsivo).

## Pessoa 2 — Rotas (`src/router/index.js`)

- [ ] Configurar/revisar as 3 rotas obrigatórias:

| Endereço | Arquivo | Texto do menu |
|---|---|---|
| `/` | `InicioView.vue` | Início |
| `/animais` | `AnimaisView.vue` | Animais |
| `/cuidados` | `CuidadosView.vue` | Cuidados |

- [ ] Usar `createRouter` + `createWebHistory()`.
- [ ] Garantir que os 3 links do menu (em `App.vue`) abrem as telas certas sem recarregar a página.
- [ ] Testar: abrir cada rota direto pela URL e atualizar a página (F5) em cada uma — não pode quebrar.
- [ ] (Desafio extra, só depois do obrigatório) aplicar `router-link-active` para destacar o link da rota atual.

## Pessoa 3 — Telas Animais e Cuidados

### `src/views/AnimaisView.vue`
- [ ] Título "Animais disponíveis".
- [ ] Pelo menos 2 cards (um por animal), cada um com imagem diferente (importada de `src/assets/images`).
- [ ] Nome, idade e descrição curta de cada animal.
- [ ] Destaque de porte/comportamento.
- [ ] Cards podem ser escritos direto no `.vue`, sem componente separado.
- [ ] CSS: grid de 2 colunas para os cards (ver exemplo `.cards { display:grid; grid-template-columns: repeat(2,1fr); }` no PDF).

### `src/views/CuidadosView.vue`
- [ ] Título "Cuidados antes da adoção".
- [ ] Imagem relacionada a cuidados com animais.
- [ ] Lista com pelo menos 5 cuidados (alimentação, água, vacinação, higiene, tempo/atenção).
- [ ] `RouterLink` para voltar a `/animais`.

### Extra (desafio, só depois do obrigatório)
- [ ] Terceiro animal na tela Animais.

## Checklist geral antes da entrega (todo mundo confere)
- [ ] `npm run dev` funcionando sem erros no console.
- [ ] Pelo menos 4 imagens locais no total, todas com `alt` descritivo.
- [ ] Nenhuma imagem quebrada.
- [ ] Testado em janela estreita (mobile).
- [ ] Rodapé com nomes da equipe.
- [ ] Print de cada uma das 3 telas para entrega.
- [ ] Não enviar `node_modules` compactada.

## Ordem sugerida de integração
1. Pessoa 1 sobe a base (App.vue, router base, InicioView, pasta de imagens) — **primeiro**, pois as outras duas partes dependem disso.
2. Pessoa 2 e Pessoa 3 trabalham em paralelo depois disso (rotas dependem só da estrutura de arquivos já existir; Animais/Cuidados podem ser feitas com placeholders de rota).
3. Merge final e teste conjunto de todas as rotas.
