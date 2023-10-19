<script setup>
import { nations } from "../data/world-fertility-rates.js";
import {ref } from "vue";

const showAll = ref(false);
</script>

<template>
    <section>
        <figure
            v-if="showAll !== false"
            @click="showAll = false"
        >
            <img src="/images/close-icon-24.svg" alt="close icon">
        </figure>
        <form>
            <fieldset>
            <legend tabindex="0">Nations - show all 227 nations</legend>
            <input type="checkbox" id="show-all" value="true" v-model="showAll">
            <label for="show-all">Show all</label>
        </fieldset>
        </form>
        <div v-if="showAll === true" class="display">
            <h2>Births per woman in all nations, high to low</h2>
            <dl>
                <template v-for="(nation, index) in nations" :key="nation.slug">
                     <dd>
                        {{ index + 1}}. {{ nation.name }}: {{ nation.rate }}
                    </dd>
                </template>
            </dl>
        </div>
    </section>
</template>

<style scoped>
</style>
