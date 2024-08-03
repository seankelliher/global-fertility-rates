<script setup>
defineProps({
    headline: {
        type: String,
        required: true
    }
});
</script>

<template>
    <header>
        <h1>{{ headline }}</h1>
        <p>This map uses Total Fertility Rate (TFR), the average number of children that would be born per woman if all women lived to the end of their childbearing years and bore children according to a given fertility rate at each age.</p>
    </header>
</template>

<style scoped>
</style>