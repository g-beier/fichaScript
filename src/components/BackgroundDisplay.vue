<script setup>
import { useMainStore } from "@/stores/MainStore.js";
import backgrounds from "../data/backgrounds.js";

const mainStore = useMainStore();
mainStore.charBackground = backgrounds[0];
</script>

<template>
    <div>
        <select v-model="mainStore.charBackground">
            <option v-for="(o, i) in backgrounds" :key="i" :value="o">
                {{ o.name }}
            </option>
        </select>
        <div>
            <p>{{ mainStore.charBackground.name }}</p>
            <ol>
                <template
                    :key="index"
                    v-for="(it, index) in mainStore.charBackground.items">
                    <li v-if="!Array.isArray(it)">{{ it }}</li>
                    <fieldset v-else>
                        <template v-for="(item, i) in it" :key="i">
                            <input
                                type="radio"
                                :name="it"
                                :id="'backgroundItem' + i"
                                :value="item" />
                            <label :for="'backgroundItem' + i">{{
                                item
                            }}</label>
                        </template>
                    </fieldset>
                </template>
            </ol>
            <ul>
                <li v-for="(s, i) in mainStore.charBackground.skills" :key="i">
                    {{ s }}
                </li>
            </ul>
        </div>
    </div>
</template>
