<template>
  <div
    data-aos="fade-right"
    data-aos-delay="500"
    data-aos-duration="500"
    :class="{ 'width-sm-100 container-max-width': !fullWidthDesktop }"
  >
    <div class="position-relative">
      <div
        class="container-livros d-flex align-center"
        v-dragscroll
        :ref="refName"
        :class="fullWidthDesktop ? 'overflow' : 'justify-md-center'"
      >
        <div
          v-for="(livro, index) in livros"
          :key="'leituraCompartilhada' + index"
        >
          <CardLivro :livro="livro" :gradient="cardGradient" />
        </div>
      </div>
      <v-btn
        @click="scrollLeftContainer()"
        class="slide-left"
        dark
        color="#c03273"
        rounded
        fab
        ><v-icon>mdi-chevron-left</v-icon></v-btn
      >
      <v-btn
        @click="scrollRightContainer()"
        class="slide-right"
        dark
        color="#c03273"
        rounded
        fab
        ><v-icon>mdi-chevron-right</v-icon></v-btn
      >
    </div>
  </div>
</template>

<script>
import CardLivro from "./CardLivro.vue";

export default {
  props: {
    refName: {
      type: String,
    },
    livros: {
      type: Array,
    },
    cardGradient: {
      type: String,
    },
    fullWidthDesktop: {
      type: Boolean,
    },
  },
  components: {
    CardLivro,
  },
  methods: {
    setScrollContainer(valor) {
      let container = this.$refs[this.refName];

      container.scrollLeft = container.scrollLeft + valor;
    },
    scrollLeftContainer() {
      this.setScrollContainer(-290);
    },
    scrollRightContainer() {
      this.setScrollContainer(+290);
    },
  },
  created() {
    console.log(this.refName);
  },
  mounted() {
    this.setScrollContainer("containerLeitorIniciante", 325);
  },
};
</script>

<style lang="scss" scoped>
.container-livros {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 60px;
  width: 100%;
  height: auto;
  min-height: auto;
  min-width: 100%;
  max-width: $container-width;
  bottom: 80px;

  flex-wrap: nowrap;
  gap: 50px;

  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  @include responsivo(md) {
    & {
      gap: 50px;
      max-width: 100%;
      width: 100%;
      min-width: 100%;
      justify-content: space-between;
      z-index: 100;

      justify-content: unset;
      overflow-x: auto;
      // overflow-y: hidden;
      scroll-behavior: smooth;
       cursor: grab;
      &:active{
        cursor: grabbing;
      }
      // @include setScrollGradient($gradient-scroll);
    }
  }
}
.slide-left,
.slide-right {
  position: absolute;
  margin: 0 auto;
  transform: translate(0px -50%);
  top: 50%;
}
.width-sm-100 .slide-left,
.width-sm-100 .slide-right {
  display: none;
}
@include responsivo(md) {
  .width-sm-100 .slide-left,
  .width-sm-100 .slide-right {
    display: inline-block;
  }
}
.slide-left {
  left: -50px;

  @include responsivo(md) {
    & {
     left: -20px;
    }
  }
  @include responsivo(xs) {
    & {
      left: -17px;
    }

  }
}
.slide-right {
  right: -50px;


   @include responsivo(md) {
    & {
      right: -20px;
    }
  }
    @include responsivo(xs) {
    & {
      right: -17px;
    }
  }
}
.position-relative {
  position: relative;
  width: 90%;
  margin: 0 auto;
}

.container-max-width {
  max-width: $container-width;
  margin: 0 auto !important;
}
.container-max-width.width-sm-100 {
  @include responsivo(md) {
    max-width: 100%;
    min-width: 100%;
  }
}
.overflow {
  width: 100%;
  min-width: 100%;
  cursor: grab;
  &:active{
    cursor: grabbing;
  }
  // @include setScrollGradient($gradient-scroll);
}
</style>
