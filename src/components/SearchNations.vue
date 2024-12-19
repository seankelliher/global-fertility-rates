<script setup>
import { ref } from "vue";
import { nations } from "../data/world-fertility-rates.js";

const searchTerm = ref("");
const slugs = ref([]);
const displayResults = ref(false);
const count = ref(0);

function runSearchTerm() {
    displayResults.value = true;
    count.value = 0;
    nations.forEach((nation, index) => {
        if (nation.name.toLowerCase().includes(searchTerm.value.toLowerCase())) {
            slugs.value.push(index);
        } else {
            count.value = count.value + 1;
        }
    });
}

function clearSearchTerm() {
    searchTerm.value = "";
    slugs.value.length = 0;
    displayResults.value = false;
    count.value = 0;
}
</script>

<template>
    <section>
        <form @submit.prevent="onSubmit">
            <label for="search-nations">Search for a nation</label>
            <input
                id="search-nations"
                type="text"
                v-model="searchTerm"
                placeholder="France"
            >
            <button
                type="submit"
                @click="runSearchTerm()"
                class="nations btn-search"
            >
                Search
            </button>
            <button
                @click="clearSearchTerm()"
                class="nations btn-clear"
            >
                Clear
            </button>

            <div v-if="displayResults" class="search-results">
                <dl>
                    <dd v-for="slug in slugs" :key="slug">
                        {{ nations[slug].name }} is in {{ nations[slug].region }} and has a TDR of {{ nations[slug].rate }}.
                    </dd>
                    <dd
                        class="error"
                        v-if="count === 227"
                    >
                        Nothing matches your last search term.</dd>
                </dl>
            </div>
        </form>
    </section>
</template>

<style scoped>
</style>