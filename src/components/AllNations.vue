<script setup>
import { nations } from "../data/world-fertility-rates.js";
import {ref, watch } from "vue";

const showAll = ref(false);

// Adds bottom-border to form when user checks checkbox.
watch(showAll, (newValue, oldValue) => {
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
            v-if="showAll !== false"
            @click="showAll = false"
            @keydown.enter="showAll = false"
        >
            <img src="/images/close-icon-24.svg" alt="close icon">
        </figure>
        <form id="all-nations">
            <fieldset>
            <legend tabindex="0">All nations</legend>
            <input type="checkbox" id="show-all" value="true" v-model="showAll">
            <label for="show-all">view</label>
        </fieldset>
        </form>
        <div v-if="showAll === true" class="display">
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