<template>
  <div class="aplicacao">
    <header class="cabecalho">
      <div>
        <h1>Patas do Vale</h1>
        <p>Portal de adoção de animais</p>
      </div>

      <nav class="menu">
        <RouterLink class="botao" to="/">Início</RouterLink>
        <RouterLink class="botao" to="/animais">Animais</RouterLink>
        <RouterLink class="botao" to="/cuidados">Cuidados</RouterLink>
      </nav>
    </header>

    <RouterView />

    <footer class="rodape">
      <p>Projeto desenvolvido por Cassiano Soares, Davi Ferreira e Guilherme Gonçalves</p>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.aplicacao {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.cabecalho {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 32px;
  background-color: #1f6f54;
  color: white;
}

.cabecalho h1 {
  margin: 0;
  font-size: 24px;
}

.cabecalho p {
  margin: 4px 0 0;
  font-size: 14px;
  opacity: 0.85;
}

.menu {
  display: flex;
  gap: 10px;
}

.menu .botao {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
}

.menu .botao:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.menu .router-link-active {
  background-color: white;
  color: #1f6f54;
}

.rodape {
  margin-top: auto;
  padding: 16px 32px;
  text-align: center;
  font-size: 14px;
  color: #56665e;
  background-color: #f3f6f4;
}
</style>
