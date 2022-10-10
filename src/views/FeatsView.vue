<script setup>
import { ref } from "vue";
import backgrounds from "../data/backgrounds.js";

const selectedBackground = ref(backgrounds[0]);
</script>

<template>
    <h2>Origens</h2>
    <select v-model="selectedBackground">
        <option v-for="o in backgrounds" :key="o.id" :value="o">
            {{ o.name }}
        </option>
    </select>

    <p>{{ selectedBackground.skills }}</p>
    <p>{{ selectedBackground.feats }}</p>
    <p>{{ selectedBackground.items }}</p>
</template>
