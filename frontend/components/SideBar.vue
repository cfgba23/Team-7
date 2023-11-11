<template>
  <Card class="min-w-fit h-screen text-center m-3.5 bg-yellow-200 shadow-8 ">
    <template #header>
      <img src="../static/profilePic.jpg" class="rounded-full w-23rem h-23rem mx-auto p-3">
    </template>
    <template #title>
      <h6 class="text-4xl text-black/75">Username</h6>
    </template>
    <template #content>
      <Divider align="center" type="solid">
        <b>Menu</b>
      </Divider>
      <ul>
        <li class="m-5 text-3xl hover:scale-110">
          <NuxtLink to="/childs">Godsons</NuxtLink>
        </li>
        <li class="m-5 text-3xl hover:scale-110">
          <NuxtLink to="/metrics">Metrics</NuxtLink>
        </li>
      </ul>
    </template>
    <template #footer>
      <ul>
      </ul>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

type Entrie = {
  label: String;
  icon: String;
};

export default defineComponent({
  setup() {

    // let entries: ref<Entrie[]> = ref([
    //   { label: 'About me', icon: 'pi text-5x1 pi-home'},
    //   { label: 'Skills', icon: 'pi text-5x1 pi-wrench'},
    //   { label: 'Work Experience', icon: 'pi text-5x1 pi-calculator'},
    //   { label: 'Studies', icon: 'pi text-5x1 pi-pencil'},
    //   { label: 'Example', icon: 'pi text-5x1 pi-trash'},
    // ]);

    return {
      // entries,
    };
  },
});
</script>

