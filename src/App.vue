<script setup>
import {ref} from 'vue'
import {AdInputSelect} from '../dist/index.js'

const selected = ref(undefined)

</script>

<template>
  <AdInputSelect width="240px" v-model:value="selected"/>
  <div> 选中的值 {{ selected }}</div>
</template>

<style scoped>
</style>
