<script setup>
import HeaderPart from "./components/HeaderPart.vue";
import WorldMap from "./components/WorldMap.vue";
import AboutMethods from "./components/AboutMethods.vue";
import SearchNations from "./components/SearchNations.vue";
import RegionalAvgs from "./components/RegionalAvgs.vue";
import AllNations from "./components/AllNations.vue";
</script>

<template>
    <div id="container">
        <HeaderPart headline="Global Fertility Rates" />
        <WorldMap />
        <main>
            <div class="about-search">
                <AboutMethods />
                <SearchNations />
            </div>
            <div class="statistics">
                <RegionalAvgs />
                <AllNations />
            </div>
        </main>
    </div>
</template>

<style scoped>
</style>