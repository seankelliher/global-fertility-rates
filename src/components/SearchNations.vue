<script setup>
import { ref } from "vue";
import { nations } from "../data/world-fertility-rates.js";

// Search term.
const searchTerm = ref("");

</script>

<template>
    <section>
        <form>
            <fieldset>
                <legend tabindex="0">All nations - searchable by name</legend>
                <input v-model="searchTerm" placeholder="eg, Morocco" />
        </fieldset>
        </form>

        <div class="display">
            <dl v-if="searchTerm !== ''">
            <template v-for="nation in nations" :key="nation.slug">
                 <dd v-if="nation.name.toLowerCase().includes(searchTerm.toLowerCase())">
                    {{ nation.name }}: {{ nation.rate }} births per woman
                </dd>
            </template>
            </dl>
        </div>
    </section>
</template>

<style scoped>
</style>
