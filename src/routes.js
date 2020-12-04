import Vue from 'vue'
import VueRouter from 'vue-router'

import About from './views/About.vue'
import LawSchool from './views/ProjectLawSchool.vue'
import MathQuiz from './views/ProjectMathQuiz.vue'
import Shopping from './views/ProjectShopping.vue'

Vue.use(VueRouter)

export const routes=[
    { path: '/', component: About },
    { path: '/lawschool', component: LawSchool},
    { path: '/mathquiz', component: MathQuiz},
    { path: '/shopping', component: Shopping}
  
  ]