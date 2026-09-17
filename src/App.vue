<template>
  <div class="aplicacao">
    <header class="cabecalho">
      <div>
        <h1>Patas do Vale</h1>
        <p>Portal de adoção de animais</p>
      </div>

      <nav class="menu">
        <RouterLink class="botao" to="/inicio">Inicio<RouterLink/>
        <RouterLink class="botao" to="/animais">Animais<RouterLink/>
        <RouterLink class="botao" to="/cuidados">Cuidados<RouterLink/>
      </nav>
    </header>

    <RouterView />

    <footer class="rodape">
      <p>Projeto desenvolvido por Cassiano Soares, Davi Ferreira e Guilherme Gonçalves</p>
    </footer>
  </div>
</template>

<style scoped></style>
