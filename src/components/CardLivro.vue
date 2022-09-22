<template>
  <div
    class="card"
    :style="'background:' + gradient"
    @click="showContent = !showContent"
  >
    <img :class="{ rotate: showContent }" :src="livro.imagem" alt="Livro" />
    <h4 class="pt-2">{{ livro.titulo }}</h4>
    <p>Nádia Larissa Pontes</p>

    <p ref="contentCard" class="card__text">
      {{ livro.descricao }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    gradient: {
      type: String,
      required: true,
    },
    livro: {
      type: Object,
    },
  },
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    navigate() {
      window.open(this.livro.url, "_blank");
    },
    setHoverAnimation() {},
    enterAnimationIn() {
      this.$refs.contentCard.style.display = "block";
      this.$refs.contentCard.classList.remove("animation-out");

      this.$refs.contentCard.classList.add("animation-in");
    },
    enterAnimationOut() {
      this.$refs.contentCard.classList.add("animation-out");
      this.$refs.contentCard.classList.remove("animation-in");
    },
  },
  watch: {
    showContent(value) {
      if (value) {
        this.enterAnimationIn();
      } else {
        this.enterAnimationOut();
      }
    },
  },
  mounted() {
    let content = this.$refs.contentCard;
    this.$refs.contentCard.addEventListener("animationend", () => {
      if (content.classList.contains("animation-in")) {
        this.$refs.contentCard.style.display = "block";
      } else if (content.classList.contains("animation-out")) {
        this.$refs.contentCard.style.display = "none";
      }
    });
  },
};
</script>

<style scoped lang="scss">
.card {
  padding: 40px 20px 20px;
  height: 100%;
  margin-top: 170px;

  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;

  min-width: 245px;
  max-width: 254px;
  min-height: 230px;

  border-radius: 20px;
  border: 0px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);

  img {
    max-width: 100%;
    max-height: 282px;
    margin-top: -200px;

    object-fit: fill;

    transition: all 0.4s ease-in-out;

    border-radius: 4px;
  }
  img.rotate {
    transform: rotate(5deg);
  }
  &__text {
    display: none;
  }

  &__text.animation-in {
    animation: animation-fade-in 1.3s ease-in-out;
  }
  &__text.animation-out {
    animation: animation-fade-out 0.7s ease-in-out;
  }

  @keyframes animation-fade-in {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
  }
  @keyframes animation-fade-out {
    to {
      transform: translateY(100px);

      opacity: 0;
    }
    from {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @include responsivo(md) {
    // &:nth-last-of-type(1) {
    //   margin-right: 40px;
    // }
    // &:nth-of-type(1) {
    //   margin-left: 40px;
    // }
  }
}
</style>
