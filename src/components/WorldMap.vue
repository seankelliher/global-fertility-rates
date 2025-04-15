<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import mapboxgl from "mapbox-gl";
import  { nations } from "../data/world-nations.js";
import MapCaption from "./MapCaption.vue";
import MapNav from "./MapNav.vue";

// Read only, restricted to requests from single URL.
//mapboxgl.accessToken = "pk.eyJ1Ijoic2s1NjQ2NzMiLCJhIjoiY2xvNmhzZjVsMGlhaDJybDA0bWtqY3V0ZiJ9.q8WPvwDCqNfUhfsfJjaEQg";

//TEMP - DELETE THIS
mapboxgl.accessToken = "pk.eyJ1Ijoic2s1NjQ2NzMiLCJhIjoiY2xtZTd6dmlyMW13NjNkbXJyeTU3eWZveiJ9.8GxPKV0ool_9OyTGwZU0yg";
// END TEMP

let map = ref(null);
const mapContainer = ref(null);

function toggleLayer(layer) {
    const visibility = map.value.getLayoutProperty(
        layer,
        "visibility"
    );
    if (visibility === "visible") {
        map.value.setLayoutProperty(layer, "visibility", "none");
    } else {
        map.value.setLayoutProperty(layer, "visibility", "visible");
    }
}

onMounted(() => {
    // Load the map from Mapbox.
    map.value = new mapboxgl.Map({
        container: mapContainer.value,
        style: "mapbox://styles/mapbox/outdoors-v12",
        projection: "naturalEarth",
        center: [0, 0], // lng, lat
        zoom: 1.6
    });

    // Wait until the map has finished loading.
    map.value.on("load", () => {
        // Add a custom vector tileset source.
        // In this case, Mapbox's "countries" tileset has polygons for nations.
        // Each polygon has an ISO 3166 alpha-3 code used for joining data.
        // https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1
        map.value.addSource("countries", {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1"
        });

        // Using GL match expression give each polygon a color.
        const rateCat1 = ["match", ["get", "iso_3166_1_alpha_3"]]; // <= 2.1
        const rateCat2 = ["match", ["get", "iso_3166_1_alpha_3"]]; // 2.2 - 2.9
        const rateCat3 = ["match", ["get", "iso_3166_1_alpha_3"]]; // 3 - 3.9
        const rateCat4 = ["match", ["get", "iso_3166_1_alpha_3"]]; // 4 - 4.9
        const rateCat5 = ["match", ["get", "iso_3166_1_alpha_3"]]; // >= 5
        const rateCat6 = ["match", ["get", "iso_3166_1_alpha_3"]]; // base layer

        function loopNations(low, high, col, matchVar, layerName, vis) {
            for (const nation of nations) {
                let color;

                if (nation["tfr"] > low && nation["tfr"] <= high  ) {
                    color = `${col}`; // 95 blue
                } else {
                    color = "transparent";
                }
                matchVar.push(nation["code"], color);
            }
            // Last value is the default, used where there is no data.
            matchVar.push("rgba(0, 0, 0, 0)");

            createMapLayer(matchVar, layerName, vis);
        }
        const loops = [
            [0, 2.19, "#f2f0f7", rateCat1, "countries-join1", "none"],
            [2.19, 2.99, "#fcae91", rateCat2, "countries-join2", "visible"],
            [2.99, 3.99, "#fb6a4a", rateCat3, "countries-join3", "visible"],
            [3.99, 4.99, "#de2d26", rateCat4, "countries-join4", "visible"],
            [4.99, 15.99, "#a50f15", rateCat5, "countries-join5", "none"], // 15.99 is safe high end.
            [0, 0, "transparent", rateCat6, "countries-join6", "visible"] // no colors, for pop-ups.
        ];

        loops.forEach((loop) => {
            loopNations(loop[0], loop[1], loop[2], loop[3], loop[4], loop[5]);
        });

        function createMapLayer(matchVar, layerName, vis) {
            const WORLDVIEW = "US";
            const worldview_filter = [ "all", [ "==", ["get", "disputed"], "false" ], [ "any", [ "==", "all", ["get", "worldview"] ], [ "in", WORLDVIEW, ["get", "worldview"] ] ] ];

            // Add layer of joined nations to create choropleth.
            // Insert it below the "admin-1-boundary-bg" layer.
            map.value.addLayer(
                {
                    "id": `${layerName}`,
                    "type": "fill",
                    "source": "countries",
                    "source-layer": "country_boundaries",
                    "layout": {
                        "visibility": `${vis}`
                    },
                    "paint": {
                        "fill-color": matchVar
                    },
                    "filter": worldview_filter
                },
                "admin-1-boundary-bg"
            );
        }

        // After the last frame rendered before the map enters an "idle" state.
        map.value.on("idle", () => {
            // If these two layers were not added to the map, abort
            if (!map.value.getLayer("countries-join1") || !map.value.getLayer("countries-join2")) {
                return;
            }
        });

        map.value.on("click", "countries-join6", (e) => {
            let rate;

            function getRate(x) {
                nations.forEach(function (nation, index) {
                    if (nation["code"] === x) {
                        rate = nations[index].tfr;
                    }
                }); 
            }
            getRate(e.features[0].properties.iso_3166_1_alpha_3);

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(`<span class="popup-text">${e.features[0].properties.name_en}: ${rate} births per woman</span>`)
                .addTo(map.value);
        });

        // Over a nation, change cursor from "hand" to "pointed finger".
        map.value.on("mouseenter", "countries-join6", () => {
            map.value.getCanvas().style.cursor = "pointer";
        });
         
        // Return cursor to "hand" when not over a nation.
        map.value.on("mouseleave", "countries-join6", () => {
            map.value.getCanvas().style.cursor = "";
        });
    });
});

onUnmounted(() => {
    map.value.remove();
    map.value = null;
});

</script>

<template>
    <div class="box-for-map">
        <div ref="mapContainer" class="map-container"></div>
    </div>
    <MapNav @toggle-layer="toggleLayer" />
    <MapCaption />
</template>

<style scoped>
</style>