<script setup>
import { ref } from "vue";
defineEmits(["toggleLayer"]);

// To display color shading by default, add "countries-joinX" here.
const displays = ref(["countries-join1", "countries-join2", "countries-join3", "countries-join4", "countries-join5"]);

function updateDisplay(layer) {
    if (displays.value.includes(layer)) {
        displays.value.splice(displays.value.indexOf(layer), 1);
    } else {
        displays.value.push(layer);
    }
}
</script>

<template>
    <div class="map-caption">
        <div class="map-caption-title">
            <h2>World Map</h2>
        </div>
        <div class="map-caption-text">
            <p class="no-margin-top">Total Fertility Rate (TFR) in nations around the world. Source: Central Intelligence Agency.</p>
        </div>
    </div>
    <nav>
        <figure
            @click="$emit('toggleLayer', 'countries-join1'), updateDisplay('countries-join1')"
            class="nav-item"
            :class="{selected: displays.includes('countries-join1')}"
            role="button"
            tabindex="0"
        >
            <svg class="nav-item-sq" role="img">
                <title>colored square, light gray</title>
                <rect width="24px" height="24px" fill="#f2f0f7"></rect>
            </svg>
            <figcaption>0 - 2.1</figcaption>
        </figure>
        <figure
            @click="$emit('toggleLayer', 'countries-join2'), updateDisplay('countries-join2')"
            class="nav-item"
            :class="{selected: displays.includes('countries-join2')}"
            role="button"
            tabindex="0"
        >
            <svg class="nav-item-sq" role="img">
                <title>colored square, peach</title>
                <rect width="24px" height="24px" fill="#fcae91"></rect>
            </svg>
            <figcaption>2.2 - 2.9</figcaption>
        </figure>
        <figure
            @click="$emit('toggleLayer', 'countries-join3'), updateDisplay('countries-join3')"
            class="nav-item"
            :class="{selected: displays.includes('countries-join3')}"
            role="button"
            tabindex="0"
        >
            <svg class="nav-item-sq" role="img">
                <title>colored square, orange</title>
                <rect width="24px" height="24px" fill="#fb6a4a"></rect>
            </svg>
            <figcaption>3 - 3.9</figcaption>
        </figure>
        <figure
            @click="$emit('toggleLayer', 'countries-join4'), updateDisplay('countries-join4')"
            class="nav-item"
            :class="{selected: displays.includes('countries-join4')}"
            role="button"
            tabindex="0"
        >
            <svg class="nav-item-sq" role="img">
                <title>colored square, red</title>
                <rect width="24px" height="24px" fill="#de2d26"></rect>
            </svg>
            <figcaption>4 - 4.9</figcaption>
        </figure>
        <figure
            @click="$emit('toggleLayer', 'countries-join5'), updateDisplay('countries-join5')"
            class="nav-item"
            :class="{selected: displays.includes('countries-join5')}"
            role="button"
            tabindex="0"
        >
            <svg class="nav-item-sq" role="img">
                <title>colored square, dark red</title>
                <rect width="24px" height="24px" fill="#a50f15"></rect>
            </svg>
            <figcaption>5+</figcaption>
        </figure>
    </nav>
</template>

<style scoped>
</style>