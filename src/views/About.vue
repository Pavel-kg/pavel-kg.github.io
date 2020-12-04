<template>
  <div id="about">
    <div class="sections col-sm-12 col-12 col-xs-12" scrollable>
      <img
        src="../assets/PavelLinkedin.jpg"
        id="images"
        class="img-fluid"
        alt="Pavel Khnykin photo"
        title="Pavel Khnykin"
      />
      <p id="letter">
        Hello, My name is Pavel and I am a Web Developer based in Montreal. I
        successfully completed AEC in "Internet Programming and Development" at
        John Abbott College. It gives me strong capability to conceptualize and
        implement plans and manage details required to execute effective
        operations. <br />During the studies I performed projects from design to
        coding and free implementation by using HTML5, CSS3, JavaScript, VueJS,
        JQuery, WordPress and others. I invite you to go through my portfolio
        and projects.
      </p>
    </div>
  </div>
</template>


<script>
import App from "../App.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { App },
  data() {
    return {};
  },
};
</script>


<style scoped>
#about {
  flex: 1 0 auto;
  padding: 20px;
}
img {
  width: 50%;
  max-width: 200px;
  height: auto;
  margin-top: 30px;
  margin-bottom: 32px;
}
p {
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  line-height: 1.5em;
  text-align: justify;
}
#letter {
  color: #141a46;
}
@media (min-width: 1281px) {
  #about {
    padding-bottom: 29rem;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  #about {
    padding-bottom: 29rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  #about {
    padding-bottom: 29rem;
  }
}

@media (max-width: 880px) {
  #about {
    padding-bottom: 29rem;
  }
}
</style>