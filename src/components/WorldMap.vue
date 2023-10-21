<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import mapboxgl from "mapbox-gl";
import  {nations} from "../data/world-nations.js";

// Read only, restricted to requests from single URL.
mapboxgl.accessToken = "ADD-ACCESS-TOKEN";

let map = ref(null);
const mapContainer = ref(null);

onMounted(() => {
    map.value = new mapboxgl.Map({
        container: mapContainer.value,
        style: "mapbox://styles/mapbox/light-v11",
        center: [22, 16],
        zoom: 1.4
    });

    map.value.on("load", () => {
        // Add source for country polygons using the Mapbox Countries tileset
        // The polygons contain an ISO 3166 alpha-3 code which can be used to for joining the data.
        // https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1
        map.value.addSource("countries", {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1"
        });

        // Build a GL match expression that defines the color for every vector tile feature
        // Use the ISO 3166-1 alpha 3 code as the lookup key for the country shape
        const matchExpression = ["match", ["get", "iso_3166_1_alpha_3"]];

        // Calculate color values for each country based on "tfr" value
        for (const nation of nations) {
            let color;

            if (nation["tfr"] === "na" ) {
                color = "#fff"; // white
                matchExpression.push(nation["code"], color);
            }

            if (nation["tfr"] === 0 ) {
                color = "#fff"; // 95 blue
                matchExpression.push(nation["code"], color);
            }

            if (nation["tfr"] < 1.5 ) {
                color = "#e9f1ff"; // 95 blue
                matchExpression.push(nation["code"], color);
            }

            if (nation["tfr"] >= 1.5 && nation["tfr"] < 2 ) {
                color = "#d0e4ff"; // 90 blue
                matchExpression.push(nation["code"], color);
            }

            if (nation["tfr"] >= 2 && nation["tfr"] < 2.5 ) {
                color = "#9ccaff"; // 80 blue
                matchExpression.push(nation["code"], color);
            }

            if (nation["tfr"] >= 2.5 && nation["tfr"] < 3 ) {
                color = "#6bb0f6"; // 70 blue
                matchExpression.push(nation["code"], color);
            }

            if (nation["tfr"] >= 3 && nation["tfr"] < 3.5 ) {
                color = "#4e95d9"; // 60 blue
                matchExpression.push(nation["code"], color);
            }

            if (nation["tfr"] >= 3.5 && nation["tfr"] < 4 ) {
                color = "#ffdcc0"; // 90 amber
                matchExpression.push(nation["code"], color);
            }

            if (nation["tfr"] >= 4 && nation["tfr"] < 4.5 ) {
                color = "#ffb874"; // 80 amber
                matchExpression.push(nation["code"], color);
            }

            if (nation["tfr"] >= 4.5 && nation["tfr"] < 5 ) {
                color = "#ec9840"; // 70 amber
                matchExpression.push(nation["code"], color);
            }
            if (nation["tfr"] >= 5 && nation["tfr"] < 5.5) {
                color = "#ffb4ab"; // 80 red
                matchExpression.push(nation["code"], color);
            }
            if (nation["tfr"] >= 5.5 && nation["tfr"] < 6) {
                color = "#ff897d"; // 70 red
                matchExpression.push(nation["code"], color);
            }
            if (nation["tfr"] >= 6) {
                color = "#ff5449"; // 60 red
                matchExpression.push(nation["code"], color);
            }
        }

        // Last value is the default, used where there is no data
        matchExpression.push("rgba(0, 0, 0, 0)");


        // The mapbox.country-boundaries-v1 tileset includes multiple polygons for some
        // countries with disputed borders.  The following expression filters the
        // map view to show the "US" perspective of borders for disputed countries.
        // Other world views are available, for more details, see the documentation
        // on the "worldview" feature property at
        // https://docs.mapbox.com/data/tilesets/reference/mapbox-countries-v1/#--polygon---worldview-text
        const WORLDVIEW = "US";
        const worldview_filter = [ "all", [ "==", ["get", "disputed"], "false" ], [ "any", [ "==", "all", ["get", "worldview"] ], [ "in", WORLDVIEW, ["get", "worldview"] ] ] ];

        // Add layer from the vector tile source to create the choropleth
        // Insert it below the "admin-1-boundary-bg" layer in the style
        map.value.addLayer(
            {
                "id": "countries-join",
                "type": "fill",
                "source": "countries",
                "source-layer": "country_boundaries",
                "paint": {
                    "fill-color": matchExpression
                },
                "filter": worldview_filter
            },
            "admin-1-boundary-bg"
        );
    });
});

onUnmounted(() => {
    map.value.remove();
    map.value = null;
});

</script>

<template>
    <section class="box-for-map">
        <div ref="mapContainer" class="map-container"></div>
    </section>
</template>

<style scoped>
</style>
