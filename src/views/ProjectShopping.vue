<template>
  <div id="project">
    <p>
      <strong>Project Shopping cart (PHP Laravel framework and MySQL)</strong>
      <a href="https://github.com/Pavel-kg/Shopping-cart" target="_blank"
        class="text-primary">GitHub source code</a>
      <br />Using registration form a customer can sign-up, create personal
      profile and after sign-in can add items to the cart, update quantity or
      remove them from the cart, edit personal profile, search product. An admin
      can manager customers, manage products (crud and search functions). All
      information is saved in database tables.
    </p>

    <img
      class="img-fluid"
      v-for="(image, i) in images"
      :src="image.url"
      :key="i"
      @click="index = i"
      :alt="image.alt"
      :title="image.title"
    />
    <vue-gallery-slideshow
      :images="images"
      :index="index"
      @close="index = null"
    ></vue-gallery-slideshow>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  components: {
    VueGallerySlideshow,
  },
  data() {
    return {
      images: [
        {
          url: require("../assets/AdminPage.jpg"),
          alt: "Admin page",
          title: "Admin page",
        },
        {
          url: require("../assets/QualityProduct.jpg"),
          alt: "Quality Product page",
          title: "Quality Product page",
        },
        {
          url: require("../assets/ShoppingCart.jpg"),
          alt: "Shopping Cart",
          title: "Shopping Cart",
        },
      ],
      index: null,
    };
  },
};
</script>

<style scoped>
#project {
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 14rem;
  min-height: 100%;
  position: relative;
}
.img-fluid {
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 40px;
  margin-right: 20px;
  cursor: zoom-in;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -o-transition: 1s;
  -ms-transition: 1s;
  transition: 1s;
}
p {
  margin: 20px;
  text-align: justify;
  font-family: "Brawler", serif;
  padding: 0;
  font-size: 1.8rem;
  line-height: 1.5em;
  color: #2f3c7e;
}
.img-fluid:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}

@media (min-width: 1281px) {
  #project {
    padding-bottom: 29rem;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  #project {
    padding-bottom: 29rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  #project {
    padding-bottom: 29rem;
  }
}

@media (max-width: 880px) {
  #project {
    padding-bottom: 29rem;
  }
}
</style>
