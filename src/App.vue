<script setup>
import HeaderPart from "./components/HeaderPart.vue";
import AboutMethods from "./components/AboutMethods.vue";
import PeakNations from "./components/PeakNations.vue";
import SearchNations from "./components/SearchNations.vue";
import AllNations from "./components/AllNations.vue";
import RegionalLists from "./components/RegionalLists.vue";
import RegionalAvgs from "./components/RegionalAvgs.vue";
</script>

<template>
    <div id="container">
        <HeaderPart headline="Fertiliy rates across the globe" />
        <main>
            <div class="overview">
                <AboutMethods />
            </div>
            <div class="statistics">
                <PeakNations  />
                <SearchNations />
                <AllNations />
                <RegionalLists />
                <RegionalAvgs />
            </div>
        </main>
    </div>
</template>

<style scoped>
</style>
