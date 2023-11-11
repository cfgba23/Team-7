<template>
   <nuxt />
    <Card class="w-full h-screen text-center m-3.5 bg-yellow-300 shadow-8 flex-col">
        <template #header>
            <img src="../static/wallpaper.png" class="mx-auto p-3 rounded-3xl  ">
        </template>
        <template #title><h1 class="text-6xl text-black/75"><slot name="title"/></h1></template>
        <template #subtitle>
          <slot name="subtitle"/>
        </template>
        <template #content>
          <slot name="content"/>
        </template>
        <template #footer><slot name="footer"/></template>
    </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
    };
  },
});
</script>