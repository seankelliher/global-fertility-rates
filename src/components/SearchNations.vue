<script setup>
import { ref, watch } from "vue";
import { nations } from "../data/world-fertility-rates.js";

// Form variables.
const searchTerm = ref("");

// Adds bottom-border to form when user searches.
watch(searchTerm, (newValue, oldValue) => {
    const form = document.getElementById("search-nations");
    if (newValue === "") {
        form.classList.remove("bor-bot");
    } else if (oldValue === "") {
        form.classList.add("bor-bot");
    }
});

</script>

<template>
    <section class="colored-box">
        <figure
            tabindex="0"
            v-if="searchTerm !== ''"
            @click="searchTerm = ''"
            @keydown.enter="searchTerm = ''"
        >
            <img src="/images/close-icon-24.svg" alt="close icon">
        </figure>
        <form id="search-nations">
            <fieldset>
                <legend tabindex="0">Search nations</legend>
                <input type="text" v-model="searchTerm" placeholder="eg, Morocco" />
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