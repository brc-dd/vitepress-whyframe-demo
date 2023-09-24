<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useData } from 'vitepress'

const iframe = ref<HTMLIFrameElement>()
const { isDark } = useData()

watchEffect(() => {
  const { contentDocument: doc, contentWindow: win } = iframe.value || {}
  if (!doc || !win) return

  const css = doc.createElement('style')
  css.appendChild(doc.createTextNode(`*{transition:none!important}`))
  doc.head.appendChild(css)

  doc.documentElement.classList.toggle('dark', isDark.value)
  const _ = win.getComputedStyle(css).opacity
  doc.head.removeChild(css)
})
</script>

<template>
  <div class="vp-block active">
    <iframe data-why title="Story" ref="iframe">
      <slot></slot>
    </iframe>
  </div>
</template>

<style>
iframe[data-why] {
  border: 0;
  width: calc(100% + 48px);
  min-height: 240px;
  margin: -20px -24px;
  visibility: hidden;
}
</style>
