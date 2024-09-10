<script setup>
import { ref, onMounted } from "vue";
import { nations } from "../data/world-fertility-rates.js";

// Variables for regions.
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

function findAverages(nat) {
    const total = nat.reduce((p,c) => p + c);
    return (total / nat.length).toFixed(2);
}
</script>

<template>
    <section>
        <div class="title">
            <div class="title-heading">
                <h2>Regional Averages</h2>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th class="nation-name">Region</th>
                    <th class="nation-name">Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="nation-name">Africa</td>
                    <td class="nation-rate">{{ findAverages(africa) }}</td>
                </tr>
                <tr>
                    <td class="nation-name">South Asia</td>
                    <td class="nation-rate">{{ findAverages(southAsia) }}</td>
                </tr>
                <tr>
                    <td class="nation-name">East and Southeast Asia</td>
                    <td class="nation-rate">{{ findAverages(eastSeAsia) }}</td>
                </tr>
                <tr>
                    <td class="nation-name">Middle East</td>
                    <td class="nation-rate">{{ findAverages(middleEast) }}</td>
                </tr>
                <tr>
                    <td class="nation-name">Australia and Oceania</td>
                    <td class="nation-rate">{{ findAverages(ausOceania) }}</td>
                </tr>
                <tr>
                    <td class="nation-name">Central America and the Caribbean</td>
                    <td class="nation-rate">{{ findAverages(cenAmerCarib) }}</td>
                </tr>
                <tr>
                    <td class="nation-name">Central Asia</td>
                    <td class="nation-rate">{{ findAverages(cenAsia) }}</td>
                </tr>
                <tr>
                    <td class="nation-name">Europe</td>
                    <td class="nation-rate">{{ findAverages(europe) }}</td>
                </tr>
                <tr>
                    <td class="nation-name">South America</td>
                    <td class="nation-rate">{{ findAverages(southAmer) }}</td>
                </tr>
                <tr>
                    <td class="nation-name">North America</td>
                    <td class="nation-rate">{{ findAverages(northAmer) }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped>
</style>