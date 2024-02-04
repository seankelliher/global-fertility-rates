<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import mapboxgl from "mapbox-gl";
import  {nations} from "../data/world-nations.js";

// Read only, restricted to requests from single URL.
mapboxgl.accessToken = "pk.eyJ1Ijoic2s1NjQ2NzMiLCJhIjoiY2xvNmhzZjVsMGlhaDJybDA0bWtqY3V0ZiJ9.q8WPvwDCqNfUhfsfJjaEQg";

let map = ref(null);
const mapContainer = ref(null);

onMounted(() => {
    map.value = new mapboxgl.Map({
        container: mapContainer.value,
        style: "mapbox://styles/mapbox/streets-v11", // v11 flat map, v12 globe.
        center: [22, 16],
        zoom: 1.6
    });

    map.value.on("load", () => {
        // Mapbox Countries tileset has polygons for nations.
        // Each polygon has an ISO 3166 alpha-3 code used for joining data.
        // https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1
        map.value.addSource("countries", {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1"
        });

        // Using GL match expression give each polygon a color.
        const matchExpression = ["match", ["get", "iso_3166_1_alpha_3"]];

        for (const nation of nations) {
            let color;

            if (nation["tfr"] === "na" ) {
                color = "#fff"; // white
            }

            if (nation["tfr"] === 0 ) {
                color = "#fff"; // white
            }

            if (nation["tfr"] < 1.5 ) {
                color = "#e9f1ff"; // 95 blue
            }

            if (nation["tfr"] >= 1.5 && nation["tfr"] < 2 ) {
                color = "#d0e4ff"; // 90 blue
            }

            if (nation["tfr"] >= 2 && nation["tfr"] < 2.5 ) {
                color = "#9ccaff"; // 80 blue
            }

            if (nation["tfr"] >= 2.5 && nation["tfr"] < 3 ) {
                color = "#6bb0f6"; // 70 blue
            }

            if (nation["tfr"] >= 3 && nation["tfr"] < 3.5 ) {
                color = "#4e95d9"; // 60 blue
            }

            if (nation["tfr"] >= 3.5 && nation["tfr"] < 4 ) {
                color = "#ffdcc0"; // 90 amber
            }

            if (nation["tfr"] >= 4 && nation["tfr"] < 4.5 ) {
                color = "#ffb874"; // 80 amber
            }

            if (nation["tfr"] >= 4.5 && nation["tfr"] < 5 ) {
                color = "#ec9840"; // 70 amber
            }
            if (nation["tfr"] >= 5 && nation["tfr"] < 5.5) {
                color = "#ffb4ab"; // 80 red
            }
            if (nation["tfr"] >= 5.5 && nation["tfr"] < 6) {
                color = "#ff897d"; // 70 red
            }
            if (nation["tfr"] >= 6) {
                color = "#ff5449"; // 60 red
            }
            matchExpression.push(nation["code"], color);
        }

        // Last value is the default, used where there is no data.
        matchExpression.push("rgba(0, 0, 0, 0)");

        // mapbox.country-boundaries-v1 tileset includes multiple polygons for
        // countries with disputed borders. The following expression filters the
        // map view to show the "US" perspective for disputed borders.
        // https://docs.mapbox.com/data/tilesets/reference/mapbox-countries-v1/#--polygon---worldview-text
        const WORLDVIEW = "US";
        const worldview_filter = [ "all", [ "==", ["get", "disputed"], "false" ], [ "any", [ "==", "all", ["get", "worldview"] ], [ "in", WORLDVIEW, ["get", "worldview"] ] ] ];

        // Add layer from the vector tile source to create the choropleth.
        // Insert it below the "admin-1-boundary-bg" layer in the style.
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

        map.value.on("click", "countries-join", (e) => {
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
                .setHTML(`<p>${e.features[0].properties.name_en}: ${rate} births per woman</p>`)
                .addTo(map.value);
        });

        // Change cursor from "hand" to "hand with pointed finger" over nation.
        map.value.on("mouseenter", "countries-join", () => {
            map.value.getCanvas().style.cursor = "pointer";
        });
         
        // Change cursor "hand" when not over nation.
        map.value.on("mouseleave", "countries-join", () => {
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
    <section class="box-for-map">
        <div ref="mapContainer" class="map-container"></div>
        <div class="map-legend">
            <svg>
                <rect width="1.4em" height="1.4em" fill="#fff" stroke="#bdbdbd">
                    <title>no births or map data</title>
                </rect>
            </svg>
            <svg>
                <rect width="1.4em" height="1.4em" fill="#e9f1ff">
                    <title>under 1.5 tfr</title>
                </rect>
            </svg>
            <svg>
                <rect width="1.4em" height="1.4em" fill="#d0e4ff">
                    <title>1.5 - 1.9 tfr</title>
                </rect>
            </svg>
            <svg>
                <rect width="1.4em" height="1.4em" fill="#9ccaff">
                    <title>2 - 2.4 tfr</title>
                </rect>
            </svg>
            <svg>
                <rect width="1.4em" height="1.4em" fill="#6bb0f6">
                    <title>2.5 - 2.9 tfr</title>
                </rect>
            </svg>
            <svg>
                <rect width="1.4em" height="1.4em" fill="#4e95d9">
                    <title>3 - 3.4 tfr</title>
                </rect>
            </svg>
            <svg>
                <rect width="1.4em" height="1.4em" fill="#ffdcc0">
                    <title>3.5 - 3.9 tfr</title>
                </rect>
            </svg>
            <svg>
                <rect width="1.4em" height="1.4em" fill="#ffb874">
                    <title>4 - 4.4 tfr</title>
                </rect>
            </svg>
            <svg>
                <rect width="1.4em" height="1.4em" fill="#ec9840">
                    <title>4.5 - 4.9 tfr</title>
                </rect>
            </svg>
            <svg>
                <rect width="1.4em" height="1.4em" fill="#ffb4ab">
                    <title>5 - 5.4 tfr</title>
                </rect>
            </svg>
            <svg>
                <rect width="1.4em" height="1.4em" fill="#ff897d">
                    <title>5.5 - 5.9 tfr</title>
                </rect>
            </svg>
            <svg>
                <rect width="1.4em" height="1.4em" fill="#ff5449">
                    <title>6 or higher tfr</title>
                </rect>
            </svg>
        </div>
    </section>
</template>

<style scoped>
</style>