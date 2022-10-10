<script setup>
import { RouterLink, RouterView } from "vue-router";

import Sidebar from "./components/Sidebar.vue";
</script>

<template>
    <div class="grid gap-4" style="grid-template-columns: 20rem 1fr">
        <Sidebar>
            <RouterLink to="/"> Home </RouterLink>
            <RouterLink to="/feats"> Feats </RouterLink>
            <RouterLink to="/skills"> Skills </RouterLink>
        </Sidebar>

        <main class="bg-red-100">
            <RouterView></RouterView>
        </main>
    </div>
</template>

<style></style>
