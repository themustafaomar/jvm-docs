<template>
  <div
    class="hidden lg:block fixed z-50 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] w-[16.5rem] pl-8 overflow-y-scroll"
  >
    <ul class="lg:text-sm lg:leading-6">
      <li v-for="(group, index) in pages" :key="index" class="mt-12 lg:mt-8">
        <h5 class="mb-8 lg:mb-3 font-semibold text-gray-900">{{ group.name }}</h5>

        <ul class="lg:space-y-2">
          <li v-for="(link, i) in group.children || []" :key="i">
            <a v-if="link.external" :href="link.to">{{ link.name }}</a>
            <router-link
              v-else
              class="block text-gray-700 hover:text-blue-600"
              :to="`/docs/${link.to}`"
            >{{ link.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import pages from '../routing/pages'
</script>