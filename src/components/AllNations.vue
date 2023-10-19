<script setup>
import { nations } from "../data/world-fertility-rates.js";
</script>

<template>
    <section>
        <div class="display">
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
