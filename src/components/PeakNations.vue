<script setup>
import { ref, onMounted, watch } from "vue";
import { nations } from "../data/world-fertility-rates.js";

// Form variables.
const rates = ref("Choose one");

// Arrays of highest, lowest rate nations.
const highRates = ref([""]);
const lowRates = ref([""]);

// Filter out highest, lowest nations.
onMounted(() => {
    nations.map((nation) => {
        if (nation.rank <= 10) {
            highRates.value.push(nation.slug);
        } else if (nation.rank >= 218) {
            lowRates.value.push(nation.slug);
        }
    });
});

// Adds bottom-border to form when user chooses option, results displayed.
watch(rates, (newValue, oldValue) => {
    const form = document.getElementById("peak-nations");
    if (newValue === "Choose one") {
        form.classList.remove("bor-bot");
    } else if (oldValue === "Choose one") {
        form.classList.add("bor-bot");
    }
});
</script>

<template>
    <section class="box-for-stats">
        <figure
            v-if="rates !== 'Choose one'"
            @click="rates = 'Choose one'"
        >
            <img src="/images/close-icon-24.svg" alt="close icon">
        </figure>
        <form id="peak-nations">
            <fieldset>
                <legend tabindex="0">Nations - ten highest, lowest</legend>
                <select v-model="rates">
                    <option>Choose one</option>
                    <option>Lowest</option>
                    <option>Highest</option>
                </select>
            </fieldset>
        </form>

        <div v-if="rates === 'Lowest'" class="display">
            <h3>{{ rates }} births per woman nations</h3>
            <dl>
            <template v-for="nation in nations.slice().reverse()" :key="nation.slug">
                 <dd v-if="lowRates.includes(nation.slug)">
                    {{ nation.name }}: {{ nation.rate }}
                </dd>
            </template>
            </dl>
        </div>

        <div v-if="rates === 'Highest'" class="display">
            <h3>{{ rates }} births per woman nations</h3>
            <dl>
            <template v-for="nation in nations" :key="nation.slug">
                <dd v-if="highRates.includes(nation.slug)">
                    {{ nation.name }}: {{ nation.rate }}
                </dd>
            </template>
            </dl>
        </div>
    </section>
</template>

<style scoped>
</style>
