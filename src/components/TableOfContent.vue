<template>
  <div
    class="table-of-contents fixed top-[3.8125rem] right-[max(0px,calc(50%-45rem))] w-[16rem] py-10 px-8 overflow-y-auto hidden xl:block"
  >
    <h5 class="text-gray-900 font-semibold mb-4 text-sm leading-6">On this page</h5>
    <ul v-if="toc.length" class="text-gray-700 text-sm leading-6">
      <template v-for="section in toc" :key="section.name">
        <li>
          <a
            @click.prevent="go($event, section.hash)"
            :href="decodeHash(section.hash)"
            class="block font-medium hover:text-gray-900 py-1"
          >{{ section.name }}</a>
        </li>
        <li v-for="child in section.children" class="ml-4">
          <a
            @click.prevent="go($event, child.hash)"
            :href="decodeHash(child.hash)"
            class="group flex items-start py-1"
          >
            <svg
              width="3"
              height="24"
              viewBox="0 -9 3 24"
              class="text-gray-400 overflow-visible group-hover:text-gray-600 mr-2"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            {{ child.name }}
          </a>
        </li>
      </template>
    </ul>

    <div v-else class="mt-5">
      <h4 class="text-xl font-semibold mb-2">@nope</h4>
      <p class="text-sm">There're no any sections here.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { getElement } from '../utils'

const ACTIVE_CLASS = '!text-blue-600'
const TOC_CONTAINER_CLASS = '.table-of-contents'

defineProps({ toc: Object })

onMounted(() => {
  window.addEventListener('scroll', scrollListener)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollListener)
})

const scrollListener = () => {
  const scrollPosition = document.documentElement.scrollTop
  const elements = document.querySelectorAll('.markdown-body .heading')
  const sections = []
  let section = 0

  Array.prototype.forEach.call(elements, el => {
    sections.push({ id: el.id, offset: el.offsetTop })
  })

  for (section of sections) {
    if (section.offset <= scrollPosition) {
      const active = getElement(`${TOC_CONTAINER_CLASS} a.\\${ACTIVE_CLASS}`)
      if (active) {
        active.classList.remove(ACTIVE_CLASS)
      }

      getElement(`${TOC_CONTAINER_CLASS} a[href*=${section.id}]`)
        .classList
        .add('class', ACTIVE_CLASS)
    }
  }
}

function go(event, hash) {
  if (hash) {
    let target
    try {
      target = getElement(decodeHash(hash))
    } catch (e) {
      console.warn(e)
    }
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      })
    }
  }
}

function decodeHash(hash) {
  return decodeURIComponent(hash)
}
</script>