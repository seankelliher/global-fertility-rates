<script setup>
import HeaderPart from "./components/HeaderPart.vue";
import WorldMap from "./components/WorldMap.vue";
import NationsTable from "./components/NationsTable.vue";
import SearchNations from "./components/SearchNations.vue";
import RegionalAvgs from "./components/RegionalAvgs.vue";
</script>

<template>
    <div id="container">
        <HeaderPart headline="Global Fertility Rates" />
        <WorldMap />
        <NationsTable />
        <RegionalAvgs />
        <SearchNations />
    </div>
</template>

<style scoped>
</style>