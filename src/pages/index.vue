<template>
  <Navbar
    :section="{
      title: 'Home',
      section: 'jvm/docs'
    }">
  </Navbar>

  <div class="max-w-4xl m-auto text-center mt-10 sm:mt-20">
    <vector-map :options="mapOptions" class="mb-8"></vector-map>
    <h1 class="text-3xl sm:text-4xl font-semibold text-center mb-3">Jsvectormap</h1>
    <p class="max-w-3xl m-auto">Jsvectormap is a lightweight JavaScript library for creating interactive maps and pretty data visualization, supports all modern brownsers including IE9+.</p>
    <div class="mt-4">
      <router-link to="/docs/introduction" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Discover now
      </router-link>
      <a href="https://github.com/themustafaomar/jsvectormap" type="button" class="py-2.5 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        Visit Gibhub repo
      </a>
    </div>  
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import Navbar from '../components/Navbar.vue'

const content = 'Jsvectormap is a lightweight JavaScript library for creating interactive maps and pretty data visualization, supports all modern brownsers including IE9+.'

useHead({
  meta: [
    { name: 'description', content },
    { property: 'og:title', content: 'Jsvectormap' },
    { property: 'og:description', content },
  ],
})

const mapOptions = {
  map: 'world_merc',
  zoomOnScroll: false,
  markers: [
    { name: "Russia", coords: [61.524, 105.3188] },
    { name: "Canada", coords: [56.1304, -106.3468] },
    { name: "Greenland", coords: [71.7069, -42.6043] },
    { name: "Egypt", coords: [26.8206, 30.8025], style: { fill: 'red' } },
    { name: 'Brazil', coords: [-14.2350, -51.9253], style: { fill: 'red' } },
    { name: 'China', coords: [35.8617, 104.1954], style: { fill: 'red' } },
    { name: 'United States', coords: [37.0902, -95.7129] },
    { name: 'Norway', coords: [60.472024, 8.468946], style: { fill: 'red' } },
    { name: 'Ukraine', coords: [48.379433, 31.16558], style: { fill: 'red' } },
  ],
  lines: [
    { from: 'Russia', to: 'Greenland' },
    { from: 'Russia', to: 'United States' },
    { from: 'Russia', to: 'Canada' },
    { from: 'Brazil', to: 'Norway' },
    { from: 'Brazil', to: 'Ukraine' },
    { from: 'Brazil', to: 'Egypt' },
    { from: 'Brazil', to: 'China' },
  ],
  markerStyle: {
    initial: { fill: "#5c5cff" },
    selected: { fill: "#ff5050" }
  },
  markerLabelStyle: {
    initial: {
      fontFamily: "`Sego UI`, sans-serif",
      fontSize: 13
    }
  },
  lineStyle: {
    strokeDasharray: '6 3 6',
    animation: true
  },
}
</script>