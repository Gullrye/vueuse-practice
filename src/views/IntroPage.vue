<template>
  <div>
    <div class="intro-wrapper" style="padding-bottom: 20px">
      <h3 ref="introTitle">Logo 图片</h3>
      <div class="img-wrapper">
        <img
          src="~@/assets/logo.svg"
          alt="Image alt text"
          title="Logo Title Text 1"
          class="logo"
          ref="logoImg"
        />
      </div>
      <input type="text" placeholder="你的名字" ref="introInput" />
    </div>
    <button @click="handleStart">开始引导教程</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import intro from 'intro.js'
import 'intro.js/minified/introjs.min.css'

const logoImg = ref<HTMLElement>()
const introTitle = ref<HTMLElement>()
const introInput = ref<HTMLElement>()

function handleStart() {
  intro()
    .setOptions({
      steps: [
        {
          title: '欢迎欢迎',
          intro: 'I am Gull! 🤣'
        },
        {
          title: '图标',
          element: logoImg.value,
          intro: '这是我们的徽章。'
        },
        {
          title: '标题',
          element: introTitle.value,
          intro: '这是我们的标题！'
        },
        {
          title: '输入框',
          element: introInput.value,
          intro: '这是我们的输入框。'
        }
      ]
    })
    .start()
}
</script>

<style lang="less">
.logo {
  width: 200px;
  height: 200px;
}
.dark {
  .introjs-tooltipReferenceLayer {
    color: black;
  }
  .introjs-helperLayer {
    background: #fff;
  }
}
</style>
