import Vue from 'vue'
import Router from "vue-router";
import Home from '@/components/Home'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Project from '@/components/Project'
import Timeline from '@/components/Timeline'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias: ['/home', '/intro', '/about', '/project', '/experience', '/contact'],
    },
    {
      path: '/intro-detail',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/about-detail',
      name: 'About',
      component: About
    },
    {
      path: '/project-detail',
      name: 'Project',
      component: Project
    },
    {
      path: '/experience-detail',
      name: 'Experience',
      component: Timeline
    },
    {
      path: '/Contact-detail',
      name: 'Contact',
      component: Footer
    },
  ]
})

