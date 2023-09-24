---
layout: false
---

<div ref="el" class="flex h-screen flex-col justify-center px-6 pb-5"></div>

<script setup lang="ts">
import { useStyleTag } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { createApp } from 'whyframe:app'
import styles from '@/styles/index.css?inline'

const el = ref<HTMLDivElement>()

useStyleTag(styles, { id: 'styles' })

onMounted(() => {
  if (!el.value || !window.frameElement) return
  document.documentElement.classList.add('vp-raw')
  createApp(el.value)
  ;(window.frameElement as HTMLIFrameElement).style.visibility = 'visible'
})
</script>
