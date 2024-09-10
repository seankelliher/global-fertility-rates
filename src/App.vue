<script setup>
import WorldMap from "./components/WorldMap.vue";
import NationsTable from "./components/NationsTable.vue";
import SearchNations from "./components/SearchNations.vue";
import RegionalAvgs from "./components/RegionalAvgs.vue";
</script>

<template>
    <div id="container">
        <WorldMap />
        <NationsTable />
        <RegionalAvgs />
        <SearchNations />
    </div>
</template>

<style scoped>
</style>