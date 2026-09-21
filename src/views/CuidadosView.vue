<script setup>
  import cuidados from '../assets/images/cuidados.jpg'
</script>

<template>
  <main class="pagina">
    <section class="cabecalho-pagina">
      <div class="texto">
        <span class="etiqueta">Adoção responsável</span>

        <h2>Cuidados antes da adoção</h2>

        <p>
          Antes de adotar, é importante avaliar se a família possui tempo, espaço e condições para
          cuidar do animal.
        </p>
      </div>

      <img :src="cuidados" alt="Veterinário atendendo um cão sobre a mesa de exame da clínica" />
    </section>

    <section class="lista-cuidados">
      <h3>Principais cuidados</h3>

      <ul>
        <li><strong>Alimentação:</strong> oferecer alimento adequado para a idade e o porte.</li>
        <li><strong>Água:</strong> manter água limpa e disponível durante todo o dia.</li>
        <li><strong>Vacinação:</strong> seguir a orientação de um profissional veterinário.</li>
        <li><strong>Higiene:</strong> manter limpos o animal e o espaço em que ele vive.</li>
        <li><strong>Espaço:</strong> reservar um local seguro e confortável para o descanso.</li>
        <li><strong>Acompanhamento veterinário:</strong> realizar consultas periódicas e seguir o calendário de vermífugos.</li>
        <li><strong>Tempo e atenção:</strong> reservar momentos para brincadeiras, passeios e convivência.</li>
      </ul>
    </section>

    <section class="aviso">
      <h3>Pense antes de adotar</h3>

      <p>
        Um animal pode permanecer muitos anos com a família. A decisão deve ser consciente e
        compartilhada por todos.
      </p>
    </section>

    <RouterLink class="botao-voltar" to="/animais">Voltar para os animais</RouterLink>
  </main>
</template>

<style scoped>
.pagina {
  width: min(1000px, 92%);
  margin: 40px auto;
}

.cabecalho-pagina {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  align-items: center;
}

.cabecalho-pagina h2 {
  margin: 12px 0;
  color: #1f6f54;
  font-size: 36px;
}

.cabecalho-pagina p {
  color: #526159;
  font-size: 18px;
  line-height: 1.6;
}

.cabecalho-pagina img {
  display: block;
  max-width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 10px;
}

.etiqueta {
  display: inline-block;
  padding: 7px 12px;
  color: #1f6f54;
  font-weight: bold;
  background-color: #dff2e9;
  border-radius: 20px;
}

.lista-cuidados {
  margin-top: 32px;
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.08);
}

.lista-cuidados h3 {
  margin: 0 0 12px;
  color: #1f6f54;
  font-size: 20px;
}

.lista-cuidados ul {
  margin: 0;
  padding-left: 20px;
}

.lista-cuidados li {
  margin-bottom: 10px;
  color: #526159;
  line-height: 1.6;
}

.aviso {
  margin-top: 24px;
  padding: 20px 24px;
  background-color: #fdf6dd;
  border-left: 5px solid #e3c65a;
  border-radius: 10px;
}

.aviso h3 {
  margin: 0 0 8px;
  color: #6b5a12;
  font-size: 18px;
}

.aviso p {
  margin: 0;
  color: #6b5a12;
  line-height: 1.6;
}

.botao-voltar {
  display: inline-block;
  margin-top: 28px;
  padding: 12px 22px;
  background-color: #1f6f54;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
}

.botao-voltar:hover {
  background-color: #17553f;
}

@media (max-width: 750px) {
  .cabecalho-pagina {
    grid-template-columns: 1fr;
  }
}
</style>
