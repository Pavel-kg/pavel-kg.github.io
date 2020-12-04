<template>
  <div id="project">
    <p>
      <strong>Project Law School</strong>
      <a
        href="https://lawschool.netlify.com"
        target="_blank"
        class="text-primary"
        >Law School site</a
      ><br />Design and development of a responsive web site using HTML, CSS,
      JavaScript, Bootstrap that should be compatible with all kinds of devices
      and screen sizes.
    </p>
    <img
      class="img-fluid"
      v-for="(image, i) in images"
      :src="image.url"
      :key="i"
      :alt="image.alt"
      :title="image.title"
      @click="index = i"
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
import Footer from "../components/Footer.vue";
export default {
  components: {
    VueGallerySlideshow,
    AppFooter: Footer,
  },
  data() {
    return {
      images: [
        {
          url: require("../assets/lawschoolFirst.jpg"),
          alt: "Law School Page",
          title: "Law School Page",
        },
        {
          url: require("../assets/Contact.jpg"),
          alt: "Contact Page",
          title: "Contact Page",
        },
        {
          url: require("../assets/Newspage.jpg"),
          alt: "News Page",
          title: "News Page",
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
.img-fluid:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
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