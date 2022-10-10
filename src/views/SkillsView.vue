<script setup>
import { useMainStore } from "@/stores/MainStore.js";

const mainStore = useMainStore();
</script>

<template>
    <div>
        <h2>Perícias</h2>
        <div class="grid grid-cols-6 gap-2">
            <div
                v-for="(s, i) in mainStore.skills"
                :key="i"
                class="border-2 border-red-900">
                <strong>{{ s.name }}</strong>
                <input type="checkbox" v-model="s.training" />
                <hr class="my-2 border-red-300" />
                <select v-model="s.stat">
                    <option :value="mainStore.str">
                        {{ mainStore.str.name }}
                    </option>
                    <option :value="mainStore.dex">
                        {{ mainStore.dex.name }}
                    </option>
                    <option :value="mainStore.con">
                        {{ mainStore.con.name }}
                    </option>
                    <option :value="mainStore.int">
                        {{ mainStore.int.name }}
                    </option>
                    <option :value="mainStore.wis">
                        {{ mainStore.wis.name }}
                    </option>
                    <option :value="mainStore.cha">
                        {{ mainStore.cha.name }}
                    </option>
                </select>
                <p>{{ s.total() }}</p>
            </div>
        </div>
    </div>
</template>
