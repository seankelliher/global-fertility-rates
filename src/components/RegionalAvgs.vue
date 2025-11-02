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
        if (nation.region === "East + SE Asia") {
            eastSeAsia.value.push(nation.rate);
        }
        if (nation.region === "Middle East") {
            middleEast.value.push(nation.rate);
        }
        if (nation.region === "AU + Oceania") {
            ausOceania.value.push(nation.rate);
        }
        if (nation.region === "CAM + Carib.") {
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
            <h2>Regional averages</h2>
        </div>
        <div class="text">
            <p class="no-margin-top">Total Fertility Rate (TFR) regional averages.</p>
        </div>
        <table>
            <thead>
                <tr>
                    <th>
                        <span class="nation-name">Region</span>
                        <span class="nation-rate">Rate</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <span class="nation-name">Africa</span>
                    <span class="nation-rate">{{ findAverages(africa) }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span class="nation-name">South Asia</span>
                    <span class="nation-rate">{{ findAverages(southAsia) }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span class="nation-name">East + SE Asia</span>
                    <span class="nation-rate">{{ findAverages(eastSeAsia) }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span class="nation-name">Middle East</span>
                    <span class="nation-rate">{{ findAverages(middleEast) }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span class="nation-name">AU + Oceania</span>
                    <span class="nation-rate">{{ findAverages(ausOceania) }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span class="nation-name">CAM + Carib.</span>
                    <span class="nation-rate">{{ findAverages(cenAmerCarib) }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span class="nation-name">Central Asia</span>
                    <span class="nation-rate">{{ findAverages(cenAsia) }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span class="nation-name">Europe</span>
                    <span class="nation-rate">{{ findAverages(europe) }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span class="nation-name">South America</span>
                    <span class="nation-rate">{{ findAverages(southAmer) }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span class="nation-name">North America</span>
                    <span class="nation-rate">{{ findAverages(northAmer) }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped>
</style>