<template>
  <v-app>
    <header
      class="d-flex align-center fixed"
      :class="{ fixed: headerFixed }"
      ref="header"
    >
      <nav
        class="d-flex align-center justify-space-between container-max-width"
      >
        <img
          style="cursor: pointer; height: 80px"
          @click="$router.push('/')"
          width="100px"
          src="/assets/logo.svg"
          alt="Logo Evoluir"
        />

        <ul>
          <li>
            <a target="_blank">Livros</a>
          </li>
          <li>
            <a target="_blank">Soluções</a>
          </li>
          <li>
            <a target="_blank">Assessoria Pedagógica</a>
          </li>
          <li>
            <a target="_blank">Marketing Educacional</a>
          </li>

          <a target="_blank">
            <button class="btn-nav">Fale com o especialista</button>
          </a>
        </ul>
        <v-icon
          class="hamburguer-icon"
          @click="menuMobileAberto = true"
          size="40"
          color="white"
          >mdi-menu</v-icon
        >
      </nav>
    </header>

    <ul v-if="menuMobileAberto" class="menu-mobile">
      <li>
        <a target="_blank"> O Sistema Evoluir</a>
        <v-icon
          @click="menuMobileAberto = false"
          color="white"
          class="icon-fechar"
          >mdi-close</v-icon
        >
      </li>
      <li>
        <a target="_blank">Soluções</a>
      </li>
      <li>
        <a target="_blank">Assessoria Pedagogica</a>
      </li>
      <li>
        <a target="_blank">Marketing Educacional</a>
      </li>

      <li>
        <a target="_blank" class="btn-nav">Fale com o especialista</a>
      </li>
    </ul>

    <main>
      <section class="section-banner" ref="sectionBanner">
        <div class="container-max-width section-banner__content">
          <h1 class="mb-6" data-aos="zoom-in-down" data-aos-duration="1000">
            Literaturas
          </h1>
          <p
            lang="pt-br"
            style="hyphens: auto; word-break: break-word"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            A variedade de gêneros, temas e histórias que lemos nos ajudam a
            construir um repertório que nos permite observar e vivenciar o mundo
            de maneira diferente. Estas obras de literatura infantil servem como
            porta para crianças adentrarem ao mágico mundo da leitura,
            desenvolvendo no leitor a capacidade imaginativa através de
            histórias cheias de magia, encantamento e que apontam para temas
            como diversidade cultural e valores humanos.
          </p>
        </div>
      </section>

      <section class="section-leitura-compartilhada text-center">
        <div class="container-max-width">
          <div class="">
            <h2 data-aos="fade-left" data-aos-duration="2000">
              Leitura Compartilhada
            </h2>
            <p data-aos="fade-left" data-aos-duration="1000">
              Com histórias que podem ser contadas e compartilhadas com as
              crianças, as obras desta seção encantam pela sonoridade e pelas
              belas ilustrações. Cheias de detalhes, as imagens convidam o
              ouvinte a mergulhar em aventuras cheias de poesia e a descobrir
              naturalmente a temática de cada livro.
            </p>
          </div>
        </div>

        <ContainerLivros
          :livros="leituraCompartilhadaItems"
          ref-name="containerLeituraCompartilhada"
          card-gradient="linear-gradient(to right, #fe4d52, #c53271);"
        />
      </section>

      <section class="section-leitor-iniciante mt-5 text-center">
        <div class="container-max-width">
          <h2 data-aos="fade-right" data-aos-duration="1000">
            Leitor Iniciante
          </h2>
          <p data-aos="fade-right" data-aos-duration="1000">
            Com foco nos leitores que estão começando a se aventurar pelo
            universo das palavras, essa seção apresenta obras que inserem o
            leitor no mundo da imaginação. Ao unir narrativas curtas e alegres
            com ilustrações coloridas, as obras promovem leituras fluidas,
            divertidas e prazerosas.
          </p>
        </div>
        <ContainerLivros
          :livros="leitorInicianteLivrosItems"
          ref-name="containerLeitorIniciante"
          card-gradient="linear-gradient(to right, #c03273, #513289);"
          :full-width-desktop="true"
        />
      </section>
      <section class="section-leitor-independente mt-5 text-center">
        <div class="container-max-width">
          <h2 data-aos="fade-left" data-aos-duration="1000">
            Leitor Independente
          </h2>
          <p data-aos="fade-left" data-aos-duration="1000">
            As obras apresentadas nesta seção têm a intenção de ampliar os
            horizontes de leitura dos pequenos que já se aventuram nesse
            universo cativante. Ao alinhar a linguagem verbal e não verbal, os
            pequenos leitores têm a oportunidade de se deslumbrar com narrativas
            agradáveis, com diversos personagens e um vocabulário variado que
            enriquece o repertório cultural do leitor.
          </p>
        </div>
        <ContainerLivros
          :livros="leitorIndependenteItems"
          ref-name="containerLeitorIndependente"
          card-gradient="linear-gradient(to right, #3D398D  , #2050A1);"
        />
      </section>
    </main>

    <footer class="footer py-15">
      <p
        data-aos="fade-in-left"
        data-aos-duration="1000"
        class="text-center mb-3"
      >
        Desenvolvido por João Paulo
      </p>
   
      <div
        class="d-flex justify-center container-max-width footer__socials"
        aria-describedby="Redes Sociais"
      >
        <v-icon class="me-4" size="30" color="#3D398D">mdi-linkedin</v-icon>

        <v-icon class="me-4" size="30" color="#3D398D">mdi-email</v-icon>

        <v-icon size="30" color="#3D398D">mdi-facebook</v-icon>
      </div>
     
    </footer>
  </v-app>
</template>

<script>
import ContainerLivros from "./components/ContainerLivros.vue";

export default {
  components: { ContainerLivros },
  data() {
    return {
      headerFixed: false,
      menuMobileAberto: false,
      leituraCompartilhadaItems: [
        {
          imagem: "/assets/images/literarios/livros/capa_um grande amigo.png",
          titulo: "Um grande amigo",
          descricao:
            "Este livro conta de forma poética o encontro entre um menino e um animalzinho. Apresenta uma narrativa envolvente, convidando as crianças a embarcarem no mundo da leitura.",
        },
        {
          imagem: "/assets/images/literarios/livros/capa_jeito de ser.png",
          titulo: "Jeito de ser",
          descricao:
            "Com muita poesia e ilustrações com um belo colorido, este livro proporciona às crianças uma leitura agradável e estimulante ao tentarem descobrir quem é o seu personagem principal.",
        },
        {
          imagem: "/assets/images/literarios/livros/capa_a menina e o sol.png",
          titulo: "A menina e o sol",
          descricao:
            "Este livro conta as aventuras vividas por uma menina que é fascinada pelo Sol e busca, de alguma forma, alcançá-lo todos os dias. Ao longo de cada página e das divertidas ilustrações, são narradas as curiosidades que a menina possui e as descobertas que faz sobre o nosso astro-rei.",
        },
        {
          imagem:
            "/assets/images/literarios/livros/capa_bicho que vai, gente que vem.png",
          titulo: "Bicho que vai, gente que vem",
          descricao:
            "Este livro-poema narra em versos e ilustrações momentos da vida no sítio e na cidade, mostrando que lá e cá tudo está sempre em movimento. Venha se encantar com a poesia que existe no dia a dia, tanto dos bichos quanto da gente.",
        },
      ],
      leitorInicianteLivrosItems: [
        {
          imagem: "/assets/images/literarios/livros/capa_a galinha amiga.png",
          titulo: "A galinha Anita e seus pintinhos",
          descricao:
            "Junto da casinha laranja, de portas e janelas azuis, existia uma palhoça habitada pela galinha ruiva Anita e seus pintinhos, o cavalo Dote e o gato Miró. Todos viviam em harmonia, até que um dia...",
        },
        {
          imagem:
            "/assets/images/literarios/livros/capa_a lebre a tartarura e o vento.png",
          titulo: "A Lebre , a tartaruga e o vento",
          descricao:
            "A lebre e a tartaruga, clássico de Esopo, é recontada por La Fontaine em nova adaptação, e A lebre, a tartaruga e o vento, que assim que chegou à África, também recebe nova adaptação. As fábulas servem como um envelope para transmitir verdades importantes, conforme escreveu La Fontaine. As duas fábulas narradas em contextos e épocas diferentes (Europa e África) estão apresentadas no mesmo livro.",
        },
        {
          imagem: "/assets/images/literarios/livros/capa_kiricú.png",
          titulo: "Kirikú e a feiticeira",
          descricao:
            "Obra aprovada pelo PNLD Literário, Kirikú e a Feiticeira retrata uma personagem da lenda africana. Kirikú é um menino pequeno em estatura, mas grande em coragem e atitude, sempre querendo o melhor para sua família e comunidade.",
        },
        {
          imagem:
            "/assets/images/literarios/livros/capa_três sementes diferentes.png",
          titulo: "Três sementes diferentes",
          descricao:
            "Neste poema seguimos a bela trajetória de três sementes muito especiais. À medida que crescem, elas se surpreendem com as semelhanças e as diferenças em seu desenvolvimento. E entendem que é nisso que está a alegria da vida.",
        },
        {
          imagem:
            "/assets/images/literarios/livros/capa_confus¦o na fazenda.png",
          titulo: "Confusão na Fazenda",
          descricao:
            "O que acontece quando o cão corre atrás do gato e o gato corre atrás do rato, criando uma grande confusão? Leia essa história para descobrir e se divertir muito.",
        },
        {
          imagem:
            "/assets/images/literarios/livros/capa_o relógio que perdeu a hora.png",
          titulo: "O relógio que perdeu a hora",
          descricao:
            "Neste livro, você vai se aventurar com o Relógio e sua companheira, a Borrachinha, que embarcam em uma viagem divertida e plurissignificativa em busca da hora perdida. Em meio aos versos da história e dessa jornada mundo afora, os dois amigos conhecem outros lugares, pessoas e animais e vivem várias descobertas.",
        },
        {
          imagem:
            "/assets/images/literarios/livros/capa_chapeuzinho vermelho.png",
          titulo: "Chapeuzinho Vermelho",
          descricao:
            "Esta história encanta crianças de todas as partes do mundo com momentos de ternura, medo, alegria e muita diversão. Conheça mais uma nova e bela adaptação, em quadrinhos, da aventura de Chapeuzinho e sua vovó.",
        },
      ],
      leitorIndependenteItems: [
        {
          imagem: "/assets/images/literarios/livros/capa_a bela e a fera.png",
          titulo: "A bela e a fera",
          descricao:
            "Para salvar seu pai, Bela vai morar em um castelo mágico, dominado por feitiços e habitado por uma estranha Fera. Mas Bela se dá conta de que a Fera não é assim tão má... Descubra, neste conto de fadas, o mundo da magia, da bondade e do amor.",
        },
        {
          imagem: "/assets/images/literarios/livros/capa_rapunzel.png",
          titulo: "Rapunzel",
          descricao:
            "Esta é uma das mais famosas dentre as mais de 200 histórias que os irmãos Grimm registraram. Neste conto de fadas, o amor vence todos os obstáculos, e a menina das tranças encontra o seu príncipe.",
        },
        {
          imagem: "/assets/images/literarios/livros/capa_branca de neve.png",
          titulo: "Branca de Neve",
          descricao:
            "A versão mais conhecida deste conto vem dos irmãos Grimm, da Alemanha, nos anos 1800. Uma rainha muito bela, porém vaidosa e perversa, decide matar Branca de Neve.",
        },
      ],
    };
  },

  watch: {
    menuMobileAberto(value) {
      if (value) {
        this.$refs.body.classList.add("no-scroll");
        this.$refs.html.classList.add("no-scroll");
      } else {
        this.$refs.body.classList.remove("no-scroll");
        this.$refs.html.classList.remove("no-scroll");
      }
    },
  },
  methods: {
    // verifyScrollContent() {
    //   window.addEventListener("scroll", () => {
    //     let windowScrollHeight = window.scrollY;
    //     let sectionBannerHeight = this.$refs.sectionBanner.offsetHeight;
    //     let headerHeight = this.$refs.header.clientHeight;
    //     if (windowScrollHeight >= sectionBannerHeight + headerHeight) {
    //       this.headerFixed = true;
    //     } else {
    //       this.headerFixed = false;
    //     }
    //   });
    // },
  },

  created() {
    // this.verifyScrollContent();
  },

  mounted() {
    this.$refs.body = document.body;
    this.$refs.html = document.documentElement;
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 10vh;
  background: linear-gradient(to top, #563480, #953575bd);

  ul {
    list-style-type: none;
    display: flex;
    li,
    a {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      color: white;
      font-weight: bold;
      font-size: 0.9rem;
      margin-right: 20px;
      position: relative;
    }
    a {
      text-decoration: none;

      &:hover {
        color: #c742c5;
      }
    }
  }

  nav {
    max-width: 100%;
    width: 100%;
  }

  &__hamburguer {
    display: none;
  }
  .btn-nav {
    background: #2aa6ad;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 20px;

    &:hover {
      transform: scale(0.98);
    }
    &:active {
      transform: scale(0.97);
    }
  }

  @include responsivo(md) {
    ul a {
      font-size: 0.9em;
    }
    nav img {
      width: 70px;
    }
  }

  @include responsivo(sm) {
    ul a {
      font-size: 0.8em;
    }
    .header__hamburguer {
      display: block;
    }
    nav ul {
      display: none;
    }
  }
}
header.fixed {
  position: fixed;
  top: -2px;
  width: 100%;
  z-index: 105;
}

ul.menu-mobile,
.hamburguer-icon {
  display: none;
}
main {
  background: linear-gradient(to bottom, $main-gradient);
}


.section-banner {
  background-image: url("/public/assets/images/literarios/banner.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -55px;
  background-attachment: fixed;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to right, #ff7e3b, #cb3472, #2f3992, #079fae);
    z-index: 2;
    opacity: 0.6;
  }

  &__content {
    margin-top: -100px;
    z-index: 3;
    position: relative;
    h1 {
      font-size: 4.2em;
      color: #ffae00;
      line-height: 55px;
    }

    p {
      width: 40%;

      @include responsivo(md) {
        & {
          width: 60%;
        }
      }
      @include responsivo(sm) {
        & {
          width: 100%;
        }
      }
      @include responsivo(xs) {
        & {
          text-align: justify;
        }
      }
    }
  }
  * {
    word-break: break-all;
  }
}

// Sections da pagina
$sections: section-leitura-compartilhada section-leitor-iniciante
  section-leitor-independente;

$count: 1;
@each $section in $sections {
  .#{$section} {
    background-image: url("/public/assets/images/literarios/line-#{$count}.png");
    background-size: 100% 700px;
    background-position: top left;
    background-repeat: no-repeat;

    min-height: 700px;
    margin-bottom: 150px;
    position: relative;

    @include responsivo(md) {
      & {
        background-size: 100% 600px;
      }
    }

    @include responsivo(sm) {
      & {
        background-size: 100% 500px;
        background-size: cover;
      }
    }
    @include responsivo(xs) {
      & {
        background-size: 100% 400px;
      }
    }
  }
  $count: $count + 1;
}
.section-leitura-compartilhada {
  margin-top: 200px;
}
// Div dos cards de livro

.footer {
  width: 100%;
  background-image: url("/public/assets/images/literarios/bg-footer.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: bottom left;

  * {
    color: #3d398d;
    font-weight: 700;
  }

  &__socials{
     &>*{
      cursor:pointer;
     
    }
  }
}
// Responsivo geral
@include responsivo(md) {
  $container-width: 95%;
  header {
    li {
      display: flex;
      justify-content: center;
    }
    a {
      text-align: center;
    }
  }
}
@include responsivo(sm) {
  $container-width: 90%;

  header {
    ul {
      display: none;
    }
  }
  .hamburguer-icon {
    display: block;
  }
  ul.menu-mobile {
    padding: 0px;
    display: block;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 106;

    a {
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      color: white;
    }

    li {
      width: 100%;
      display: block;
      height: 20vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2f3992;
      background-size: cover;
      position: relative;

      .icon-fechar {
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }

    $cores: #2f3992 #ff803b #cb3473 #07a0ae #563480;

    $contador: 1;
    @each $cor in $cores {
      li:nth-child(#{$contador}) {
        background-color: $cor;
      }
      $contador: $contador + 1;
    }
  }
}
</style>
