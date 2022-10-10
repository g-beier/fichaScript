<script setup>
import SidebarCharacter from "./SidebarCharacter.vue";

import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore();

const stats = [
    mainStore.str,
    mainStore.dex,
    mainStore.con,
    mainStore.int,
    mainStore.wis,
    mainStore.cha,
];
</script>

<template>
    <div class="flex h-screen max-w-xs flex-col flex-nowrap bg-neutral-200">
        <header class="bg-red-300">
            <h1>fichaScript</h1>
        </header>
        <aside class="flex-1">
            <nav
                class="my-2 flex flex-col items-center gap-2 border-y border-green-900">
                <slot></slot>
            </nav>
            <SidebarCharacter></SidebarCharacter>
            <p>
                Level é
                <input
                    type="number"
                    v-model.number="mainStore.level"
                    max="20"
                    min="1" />
            </p>

            <ul class="grid grid-cols-3 place-items-center gap-2">
                <li
                    v-for="(hb, index) in stats"
                    :key="index"
                    class="grid grid-rows-2">
                    <div class="flex flex-col items-center justify-center">
                        <span>
                            {{ hb.abbr }}
                        </span>
                        <span>
                            {{ hb.name }}
                        </span>
                    </div>
                    <div class="flex flex-col items-center">
                        <input
                            type="number"
                            v-model.number="hb.value"
                            min="0"
                            class="w-16" />
                        <span>
                            {{ hb.mod() }}
                        </span>
                    </div>
                </li>
            </ul>
        </aside>
    </div>
</template>
