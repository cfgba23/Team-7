<template>
    <ContentCard>
        <template v-slot:title>Godsons</template>
        <template v-slot:subtitle>Childs subtitle</template>
        <template v-slot:content>Childs content</template>
        <template v-slot:footer>Childs footer</template>
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