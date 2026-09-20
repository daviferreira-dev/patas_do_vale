<script setup>
  import imagemCapa from '../assets/images/capa-adocao.jpeg'
</script>

<template>
  <main class="pagina">
    <section class="apresentacao">
      <div class="texto">
        <span class="etiqueta">Adoção responsável</span>

        <h2>Encontre um novo amigo</h2>

        <p>
          O Patas do Vale apresenta animais que procuram uma família. Nosso objetivo é incentivar a
          adoção responsável e oferecer informações básicas para futuros tutores.
        </p>

        <p>
          Conheça os animais disponíveis e descubra como se preparar para receber um novo
          companheiro.
        </p>

        <RouterLink class="botao" to="/animais"> Conhecer os animais </RouterLink>
      </div>

      <img :src="imagemCapa" alt="Cão e gato aguardando adoção" />
    </section>

    <section class="informacoes">
      <div class="info-card">
        <h3>Adoção consciente</h3>
        <p>Adotar exige responsabilidade, cuidado e planejamento.</p>
      </div>

      <div class="info-card">
        <h3>Animais acolhidos</h3>
        <p>Todos os animais recebem atenção enquanto aguardam uma família.</p>
      </div>

      <div class="info-card">
        <h3>Nova família</h3>
        <p>Uma adoção responsável pode transformar diferentes vidas.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.pagina {
  width: min(1050px, 92%);
  margin: 40px auto;
}

.apresentacao {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.etiqueta {
  display: inline-block;
  padding: 7px 12px;
  color: #1f6f54;
  font-weight: bold;
  background-color: #dff2e9;
  border-radius: 20px;
}

.texto h2 {
  margin: 12px 0;
  color: #1f6f54;
  font-size: 36px;
}

.texto p {
  color: #56665e;
  line-height: 1.6;
}

.botao {
  display: inline-block;
  margin-top: 16px;
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

.apresentacao img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 14px;
}

.informacoes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.info-card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.08);
}

.info-card h3 {
  margin: 0 0 8px;
  color: #1f6f54;
}

.info-card p {
  margin: 0;
  color: #56665e;
}

@media (max-width: 750px) {
  .apresentacao {
    grid-template-columns: 1fr;
  }

  .informacoes {
    grid-template-columns: 1fr;
  }
}
</style>
