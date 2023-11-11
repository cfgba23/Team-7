<template>
    <ContentCard>
        <template v-slot:title>Skills</template>
        <template v-slot:content>
            <ul>
                <li class="mt-5">
                    <ul>
                        <li class="text-4xl">Programming Languages</li>
                        <p class="text-xl">Python - JS - Ruby - Bash</p>
                    </ul>
                </li>

                <li class="mt-5">
                    <ul>
                        <li class="text-4xl">Frameworks</li>
                        <p class="text-xl">Pandas - VueJS - Nuxt - Rails - Chef</p>
                    </ul>
                </li>
                <li class="mt-5">
                    <ul>
                        <li class="text-4xl">Other</li>
                        <p class="text-xl">Git - Jenkins - Tailwind - SQL - System Administration</p>
                    </ul>
                </li>
            </ul>
        </template>
    </ContentCard>
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