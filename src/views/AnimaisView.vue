<script setup>
  import cachorro from '../assets/images/cachorro.jpg'
  import gato from '../assets/images/gato.jpg'
</script>

<template>
  <main class="pagina">
    <section class="topo">
      <span class="etiqueta">Esperando uma família</span>

      <h2>Animais disponíveis</h2>

      <p>Conheça alguns dos animais fictícios disponíveis para adoção.</p>
    </section>

    <section class="lista">
      <article class="cartao">
        <img :src="cachorro" alt="Cachorro disponível para adoção" />

        <div class="conteudo">
          <h3>Thor</h3>

          <div class="marcadores">
            <span class="marcador">2 anos</span>
            <span class="marcador">Porte médio</span>
          </div>

          <p class="descricao">
            Thor é brincalhão, carinhoso e gosta de passear. Procura uma família que tenha tempo
            para atividades.
          </p>

          <p class="comportamento"><strong>Comportamento:</strong> ativo e amigável</p>
        </div>
      </article>

      <article class="cartao">
        <img :src="gato" alt="Gata disponível para adoção" />

        <div class="conteudo">
          <h3>Lua</h3>

          <div class="marcadores">
            <span class="marcador">1 ano</span>
            <span class="marcador">Porte pequeno</span>
          </div>

          <p class="descricao">
            Lua é tranquila, curiosa e gosta de locais confortáveis. Adapta-se bem a ambientes
            internos.
          </p>

          <p class="comportamento"><strong>Comportamento:</strong> tranquila e carinhosa</p>
        </div>
      </article>
    </section>

    <section class="aviso">
      <p>Gostou de algum animal? Consulte os cuidados necessários antes de tomar sua decisão.</p>

      <RouterLink class="botao" to="/cuidados">Ver cuidados</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.pagina {
  width: min(1050px, 92%);
  margin: 40px auto;
}

.topo {
  text-align: center;
}

.etiqueta {
  display: inline-block;
  padding: 7px 12px;
  color: #1f6f54;
  font-weight: bold;
  background-color: #dff2e9;
  border-radius: 20px;
}

.topo h2 {
  margin: 12px 0;
  color: #1f6f54;
  font-size: 36px;
}

.topo p {
  margin: 0;
  color: #56665e;
}

.lista {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 32px;
}

.cartao {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.08);
}

.cartao img {
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
object-position: 25% 28%;
}

.conteudo {
  padding: 20px;
}

.conteudo h3 {
  margin: 0 0 10px;
  color: #1f6f54;
  font-size: 22px;
}

.marcadores {
  display: flex;
  gap: 8px;
}

.marcador {
  padding: 5px 10px;
  color: #1f6f54;
  font-size: 13px;
  background-color: #dff2e9;
  border-radius: 20px;
}

.descricao {
  color: #56665e;
  line-height: 1.6;
}

.comportamento {
  margin: 0;
  color: #2f4238;
  font-size: 14px;
}

.aviso {
  margin-top: 32px;
  padding: 24px;
  text-align: center;
  background-color: #eaf5ef;
  border-radius: 12px;
}

.aviso p {
  margin: 0 0 16px;
  color: #56665e;
}

.botao {
  display: inline-block;
  padding: 12px 22px;
  background-color: #1f6f54;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
}

.botao:hover {
  background-color: #17553f;
}

@media (max-width: 750px) {
  .lista {
    grid-template-columns: 1fr;
  }
}
</style>
