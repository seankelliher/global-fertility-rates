<script setup>
import { ref, onMounted } from "vue";
import { nations } from "../data/world-fertility-rates.js";

const showAvgs = ref(false);

const africa = ref([null]);
const southAsia = ref([null]);
const eastSeAsia = ref([null]);
const middleEast = ref([null]);
const ausOceania = ref([null]);
const cenAmerCarib = ref([null]);
const cenAsia = ref([null]);
const europe = ref([null]);
const southAmer = ref([null]);
const northAmer = ref([null]);

onMounted(() => {
    nations.map((nation) => {
        if (nation.region === "Africa") {
            africa.value.push(nation.rate);
        }
        if (nation.region === "South Asia") {
            southAsia.value.push(nation.rate);
        }
        if (nation.region === "East and Southeast Asia") {
            eastSeAsia.value.push(nation.rate);
        }
        if (nation.region === "Middle East") {
            middleEast.value.push(nation.rate);
        }
        if (nation.region === "Australia and Oceania") {
            ausOceania.value.push(nation.rate);
        }
        if (nation.region === "Central America and the Caribbean") {
            cenAmerCarib.value.push(nation.rate);
        }
        if (nation.region === "Central Asia") {
            cenAsia.value.push(nation.rate);
        }
        if (nation.region === "Europe") {
            europe.value.push(nation.rate);
        }
        if (nation.region === "South America") {
            southAmer.value.push(nation.rate);
        }
        if (nation.region === "North America") {
            northAmer.value.push(nation.rate);
        }
    });
});

/*const africaAvg = computed((x) => {
    const total = x.value.reduce((p,c) => p + c);
    return (total / x.value.length).toFixed(2);
});*/

function findAverages(nat) {
    const total = nat.reduce((p,c) => p + c);
    return (total / nat.length).toFixed(2);
}

</script>

<template>
    <section>
        <figure
            v-if="showAvgs !== false"
            @click="showAvgs = false"
        >
            <img src="/images/close-icon-24.svg" alt="close icon">
        </figure>
        <form>
            <fieldset>
            <legend tabindex="0">Regional averages</legend>
            <input type="checkbox" id="show-avgs" value="true" v-model="showAvgs">
            <label for="show-avgs">Show averages</label>
        </fieldset>
        </form>
        <div v-if="showAvgs === true" class="display">
            <h2>Average births per woman in each region</h2>
            <dl>          
                <dd>Africa: {{ findAverages(africa) }}</dd>
                <dd>South Asia: {{ findAverages(southAsia) }}</dd>
                <dd>East and Southeast Asia: {{ findAverages(eastSeAsia) }}</dd>
                <dd>Middle East: {{ findAverages(middleEast) }}</dd>
                <dd>Australia and Oceania: {{ findAverages(ausOceania) }}</dd>
                <dd>Central America and the Caribbean: {{ findAverages(cenAmerCarib) }}</dd>
                <dd>Central Asia: {{ findAverages(cenAsia) }}</dd>
                <dd>Europe: {{ findAverages(europe) }}</dd>
                <dd>South America: {{ findAverages(southAmer) }}</dd>
                <dd>North America: {{ findAverages(northAmer) }}</dd>
            </dl>
        </div>
    </section>
</template>

<style scoped>
</style>
