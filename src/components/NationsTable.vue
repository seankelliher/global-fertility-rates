<script setup>
import { ref,onMounted } from "vue";
import { nations } from "../data/world-fertility-rates.js";

let sorted = ref();
const chunkedSelects = ref([]);
const currentPage = ref(1);
const totalPages = ref();

function filterNations() {
    sorted.value = nations.sort((a, b) => a.rate - b.rate);
    paginateArray(sorted.value, 15, 1);
}

function paginateArray(array, pageSize, pageNumber) {
    // Calculate the starting index of the current page.
    const startIndex = (pageNumber - 1) * pageSize;

    // Calculate total pages.
    totalPages.value = Math.ceil(array.length / pageSize);

    // Create a chunk of the array based on the page size.
    chunkedSelects.value = array.slice(startIndex, startIndex + pageSize);

    // Set current page.
    currentPage.value = pageNumber;

    // return chunkedSelects;
}

// Next page in paginated list.
function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
        paginateArray(sorted.value, 15, currentPage.value);
    }
}

// Previous page in paginated list/.
function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value -= 1;
        paginateArray(sorted.value, 15, currentPage.value);
    }
}

onMounted(() => {
    filterNations();
});
</script>

<template>
    <section>
        <div class="title">
            <h2>All nations</h2>
        </div>
        <table>
            <thead>
                <tr>
                    <th class="nation-name">Nation</th>
                    <th class="nation-rate">Rate</th>
                    <th class="nation-region">Region</th>             
                </tr>
            </thead>
            <tbody>
                <tr v-for="chunkedSelect in chunkedSelects" :key="chunkedSelect.slug">
                    <td>
                        <span class="nation-name">
                            {{ chunkedSelect.name }}:
                        </span>
                        <span class="nation-rate">
                            {{ chunkedSelect.rate }}
                        </span>
                        <span class="nation-region">
                            {{ chunkedSelect.region }}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="paginate-container">
            <p
                @click="prevPage()"
                @keyup.enter="prevPage()"
                class="paginate hyperlink"
                tabindex="0"
                role="button"
            >
                previous
            </p>
            <p class="paginate">{{ currentPage }} of {{ totalPages }}</p>
            <p
                @click="nextPage()"
                @keyup.enter="nextPage()"
                class="paginate hyperlink"
                tabindex="0"
                role="button"
            >
                next
            </p>
        </div>
    </section>
</template>

<style scoped>
</style>