<template>
  <navbar
    :section="{
      title: frontmatter.title,
      section: $route.meta.section
    }">
  </navbar>

  <div class="max-w-[90rem] mx-auto relative px-6 md:px-8">
    <sidebar />

    <article class="my-4 md:my-8">
      <div class="lg:ml-[16.5rem]">
        <div class="max-w-3xl mx-auto xl:max-w-none xl:ml-0 xl:mr-[16rem]">
          <div class="flex items-center justify-between">
            <div>
              <h6 class="text-sm font-bold text-blue-500 mb-3">{{ $route.meta.section }}</h6>
              <h1 class="text-3xl font-bold capitalize">{{ frontmatter.title }}</h1>
            </div>
            <a :href="`https://github.com/themustafaomar/jvm-docs/tree/main${$route.path}.md`" class="flex items-center font-semibold text-gray-400 decoration-none text-xs">
              Edit this page
              <svg class="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          <p class="mt-2 text-lg text-slate-600">{{ frontmatter.description }}</p>

          <div class="prose max-w-none">
            <slot />
          </div>
        </div>
      </div>
    </article>

    <table-of-content :toc="toc" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import TableOfContent from '../components/TableOfContent.vue'

defineProps({ frontmatter: Object })

const toc = ref([])

onMounted(() => {
  toc.value = getToc()
})

function getToc() {
  return Array.from(document.querySelector('.markdown-body').children)
    .filter(n => n.matches('h2'))
    .map(n => ({
      name: n.textContent,
      hash: `#${n.id}`,
      children: nextUntil(n, 'h2', 'h3')
        .map(n => ({
          name: n.textContent,
          hash: `#${n.id}`,
        }))
    }))
}

// https://vanillajstoolkit.com/helpers/nextuntil
function nextUntil(elem, selector, filter) {
  const siblings = []

  elem = elem.nextElementSibling

  while (elem) {
    if (elem.matches(selector)) break

    if (filter && !elem.matches(filter)) {
      elem = elem.nextElementSibling
      continue
    }

    siblings.push(elem)

    elem = elem.nextElementSibling
  }

  return siblings
}
</script>