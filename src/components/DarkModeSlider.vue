<template>
    <button :class="this.isDarkMode ? 'translate-cue' : ''" @click="clicked">
        <svg viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="25" />
        </svg>
    </button>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import type { Ref } from 'vue';

export default {
    setup() {
        const appStore = useStore();

        return {
            isDarkMode: computed(() => appStore.state.isDarkMode),
            clicked: () => appStore.commit("toggleDarkMode")
        }
    },
}
</script>

<style scoped lang="scss">
button {
    --slider-width: 70px;
    --slider-height: 30px;
    --cue-width: 30px;
    --cue-inset: 2px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: var(--slider-width);
    height: var(--slider-height);
    border-radius: 50px;
    border: 1px solid var(--main-color-2);
    background-color: transparent;
    cursor: pointer;

    svg {
        width: var(--cue-width);
        height: var(--slider-height);
        padding: var(--cue-inset);
        transition: transform 150ms ease-in-out;
        will-change: transition;

        circle {
            fill: var(--main-color-2);
        }
    }
}

button.translate-cue svg {
    transform: translateX(calc(var(--slider-width) - var(--cue-width) - var(--cue-inset)));
}
</style>