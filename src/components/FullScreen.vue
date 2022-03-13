<template>
  <div>
    <button @click="toggle">{{ isFullscreen ? '退出全屏' : '全屏' }}</button>
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen()
</script>

<style lang="less" scoped></style>
