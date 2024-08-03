<script setup>
import { nations } from "../data/world-fertility-rates.js";
import {ref, watch } from "vue";

const showAllNations = ref(false);

// Adds bottom-border to form when user checks checkbox.
watch(showAllNations, (newValue, oldValue) => {
    const form = document.getElementById("all-nations");
    if (newValue === false) {
        form.classList.remove("bor-bot");
    } else if (oldValue === false) {
        form.classList.add("bor-bot");
    }
});
</script>

<template>
    <section class="colored-box">
        <figure
            tabindex="0"
            v-if="showAllNations !== false"
            @click="showAllNations = false"
            @keydown.enter="showAllNations = false"
            class="icon"
        >
            <img src="/images/close-icon-24.svg" alt="close icon">
        </figure>
        <form id="all-nations">
            <fieldset>
            <legend tabindex="0">Rates by nation</legend>
            <input type="checkbox" id="show-all-nations" value="true" v-model="showAllNations">
            <label for="show-all-nations">view list of all nations</label>
        </fieldset>
        </form>
        <div v-if="showAllNations === true" class="display">
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