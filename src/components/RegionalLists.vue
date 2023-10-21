<script setup>
import { ref } from "vue";
import { nations } from "../data/world-fertility-rates.js";

// Form variables.
const regions = ref("Choose a region");

</script>

<template>
    <section class="box-for-stats">
        <figure
            v-if="regions !== 'Choose a region'"
            @click="regions = 'Choose a region'"
        >
            <img src="/images/close-icon-24.svg" alt="close icon">
        </figure>
        <form>
            <fieldset>
                <legend tabindex="0">World regions</legend>
                <select v-model="regions">
                    <!--<option disabled value="">Please select one</option>-->
                    <option>Choose a region</option>
                    <option>Africa</option>
                    <option>South Asia</option>
                    <option>East and Southeast Asia</option>
                    <option>Middle East</option>
                    <option>Australia and Oceania</option>
                    <option>Central America and the Caribbean</option>
                    <option>Central Asia</option>
                    <option>Europe</option>
                    <option>South America</option>
                    <option>North America</option>
                </select>
            </fieldset>
        </form>

        <div v-if="regions !== 'Choose a region'" class="display">
            <h2>Births per woman in {{ regions }}</h2>
                <dl>
                <template v-for="nation in nations" :key="nation.slug">
                     <dd v-if="nation.region === regions">
                        {{ nation.name }}: {{ nation.rate }}
                    </dd>
                </template>
                </dl>
        </div>
    </section>
</template>

<style scoped>
</style>
