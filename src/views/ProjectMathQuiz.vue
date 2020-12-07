<template>
  <div id="project">
      <p><strong>Mobile project: Math Quiz (Android Studio)</strong> 
       <a href="https://github.com/Pavel-kg/PavelMathQuiz" target="_blank"
        class="text-primary">GitHub source code</a> 
        <ul>Main Page:
           <li>Generate random basic operations (+, -, *, /)</li>
           <li>Validate user answer and show the appropriate message (right/wrong)</li>
           <li>Go to Result page and show all user’s operations and right/wrong answers, total percentage of right and wrong answers</li>
        </ul>  
        <ul>Result Page to show:
            <li>All answers</li>
            <li>Sort answers (Ascending/<br>Descending) based on right/wrong answers</li>
            <li>All user’s operations and right/wrong answers, total percentage of right and wrong answers</li>
       </ul> 
</p>
 
  <img class="img-fluid" v-for="(image, i) in images" :src="image.url" :key="i" :alt="image.alt" :title="image.title"
  @click="index = i"
  >
  <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
  
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
          url: require("../assets/MathQuiz1.jpg"),
          alt: "Math Quiz right answer",
          title: "Math Quiz right answer",
        },
        {
          url: require("../assets/MathQuiz2.jpg"),
          alt: "Math Quiz wrong answer",
          title: "Math Quiz wrong answer",
        },
        {
          url: require("../assets/MathQuiz3.jpg"),
          alt: "Result score",
          title: "Result score",
        },
        {
          url: require("../assets/MathQuiz4.jpg"),
          alt: "Validation",
          title: "Validation",
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
