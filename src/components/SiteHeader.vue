<template>
    <header :class="this.isDarkMode ? 'use-dark-mode-header' : ''">
        <nav>
            <h1>AutoCV</h1>
            <ul>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/RunItBack1127">About</a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/RunItBack1127">Tutorial</a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/RunItBack1127">Contributing</a>
                </li>
            </ul>
            <DarkModeSlider />
            <div class="icon-container">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/RunItBack1127">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

import DarkModeSlider from './DarkModeSlider.vue';

export default {
    setup() {
        const appStore = useStore();
        return {
            isDarkMode: computed(() => appStore.state.isDarkMode)
        }
    },
    components: {
        DarkModeSlider
    }
}
</script>

<style scoped lang="scss">
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: var(--main-color-1);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 99999;

    nav {
        width: 75%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;

        h1 {
            font-weight: 100;
            font-size: 2.5rem;
            letter-spacing: 0.5rem;
            text-transform: uppercase;
            color: var(--main-color-2);
        }

        ul {
            display: flex;
            justify-content: center;
            align-items: center;

            li {
                font-weight: 300;

                a {
                    transition: opacity 200ms ease-in-out;
                    will-change: opacity;
                }

                a:hover {
                    opacity: 0.5;
                }
            }

            li:not(:last-child) {
                margin-right: 40px;
            }
        }

        svg {
            width: 25px;
            height: 25px;
        }
    }
}

header.use-dark-mode-header {
    box-shadow: rgba(255, 255, 255, 0.075) 0px 3px 8px;
}

@media screen and (max-width: 992px) {
    header nav {
        
        ul {
            display: none;
        }

        .icon-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            min-width: var(--minimum-site-width);
            z-index: 99999;

            a {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 7.5%;
                margin-bottom: 20px;
                background-color: var(--main-color-1);
                border-radius: 50px;
                width: 50px;
                height: 50px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
        }
    }
}

@media screen and (max-width: 411px) {
    header {
        height: 75px;

        nav h1 {
            font-size: 2rem;
        }
    }
}
</style>