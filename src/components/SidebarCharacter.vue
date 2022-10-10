<script setup>
import { ref, computed } from "vue";

import { useMainStore } from "@/stores/MainStore.js";
import {
    experienceByLevel,
    getLevelByExperience,
} from "../helpers/experience.js";

const mainStore = useMainStore();
</script>

<template>
    <input type="text" v-model.trim="mainStore.charName" />
</template>
