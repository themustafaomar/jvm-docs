import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import toc from 'markdown-it-table-of-contents'
import anchor from 'markdown-it-anchor'
import prism from 'markdown-it-prism'
import string from 'string'

export default defineConfig({
  rollupInputOptions: {
    input: resolve(__dirname, './src/app.js')
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),

    // Markdown
    Markdown({
      headEnabled: true,
      wrapperClasses: 'markdown-body',
      wrapperComponent: 'ContentLayout',
      markdownItOptions: {
        html: true,
        linkify: true,
      },
      markdownItSetup(md) {
        md.use(prism)
        md.use(toc, { includeLevel: [1, 2, 3] })
        md.use(anchor, {
          slugify: s => string(s).slugify().toString(),
          callback(token) {
            token.attrPush(['class', 'heading group relative flex items-center capitalize -ml-4 pl-4'])
          },
          permalink: anchor.permalink.linkInsideHeader({
            symbol: `
              <div aria-hidden="true" class="absolute items-center group-hover:flex hidden mr-1 -left-2 top-0 bottom-0 m-auto">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                </svg>
              </div>`,
            placement: 'before',
          }),
        })
      }
    })
  ],

  // Vite ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  }
})