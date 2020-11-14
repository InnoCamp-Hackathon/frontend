<template>
    <div class="col">
        <div class="content">
            <GmapMap
                    :center="coordinates"
                    :zoom="zoom"
                    style="width: 100%; height: 500px"
                    ref="mapRef"
                    @dragend="handleDrag"
                    class="map"
            >
                <gmap-info-window
                        :options="infoWindowOptions"
                        :position="infoWindowPosition"
                        :opened="infoWindowOpened"
                        class="info-window"
                        @closeclick="handleInfoWindowClose"
                >
                    <div>
                        <h3>{{ activePlace.name }}</h3>
                        <p v-if="activePlace.opening_hours.open_now"><span class="opened-now">Открыто сейчас!</span>
                        </p>
                        <p v-else><span class="closed-now">Сейчас закрыто!</span></p>
                        <p>Рейтинг: {{ activePlace.rating ? activePlace.rating : "Рейтинг для данного места не указан"
                            }}</p>
                    </div>
                </gmap-info-window>
                <gmap-marker
                        :position="coordinates"
                        :label="'Me'"
                ></gmap-marker>
                <gmap-marker
                        v-for="(p, index) in places"
                        :key="index"
                        :position="getPosition(p)"
                        :title="p.name"
                        :clickable="true"
                        :draggable="false"
                        @click="handleMarketClicked(p)"
                ></gmap-marker>
            </GmapMap>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Map",
        data() {
            return {
                map: null,
                coordinates: {
                    lat: 0,
                    lng: 0,
                },
                zoom: 7,
                infoWindowOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                },
                activePlace:
                    {
                        "business_status": "OPERATIONAL",
                        "geometry": {
                            "location": {
                                "lat": 56.83936749999999,
                                "lng": 60.5761373
                            },
                            "viewport": {
                                "northeast": {
                                    "lat": 56.84071732989272,
                                    "lng": 60.57748712989272
                                },
                                "southwest": {
                                    "lat": 56.83801767010727,
                                    "lng": 60.57478747010727
                                }
                            }
                        },
                        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png",
                        "name": "Парк 22 Партсъезда",
                        "opening_hours": {
                            "open_now": true
                        },
                        "photos": [{
                            "height": 3840,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116882022068072446835\">Dinara Aminova</a>"
                            ],
                            "photo_reference": "ATtYBwKgZE9y5ZQhRZyy34AzMoh5A89tnIuyPPdMPgCgrZK2ASRfDIJiWiYlZv0Pqvp_JWkIoo0Q5vzxleofwt45s5UHeY0FNcJ02R5nHWSV86E57RSg-3xNOmlOpJ5dk2lZK6Burn8tA-M8WXLJOup8vTHEEWRLqApSLSrH-n3CLQDrVZme",
                            "width": 2160
                        }],
                        "place_id": "ChIJrUQOnVluwUMRn_3S6EyFB9I",
                        "plus_code": {
                            "compound_code": "RHQG+PF Екатеринбург",
                            "global_code": "9J82RHQG+PF"
                        },
                        "rating": 4.5,
                        "reference": "ChIJrUQOnVluwUMRn_3S6EyFB9I",
                        "scope": "GOOGLE",
                        "types": [
                            "park",
                            "tourist_attraction",
                            "point_of_interest",
                            "establishment"
                        ],
                        "user_ratings_total": 164,
                        "vicinity": "Екатеринбург"
                    },
                infoWindowOpened: false,
                places: [
                    {
                        "business_status": "OPERATIONAL",
                        "geometry": {
                            "location": {
                                "lat": 56.83936749999999,
                                "lng": 60.5761373
                            },
                            "viewport": {
                                "northeast": {
                                    "lat": 56.84071732989272,
                                    "lng": 60.57748712989272
                                },
                                "southwest": {
                                    "lat": 56.83801767010727,
                                    "lng": 60.57478747010727
                                }
                            }
                        },
                        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png",
                        "name": "Парк 22 Партсъезда",
                        "opening_hours": {
                            "open_now": true
                        },
                        "photos": [{
                            "height": 3840,
                            "html_attributions": [
                                "<a href=\"https://maps.google.com/maps/contrib/116882022068072446835\">Dinara Aminova</a>"
                            ],
                            "photo_reference": "ATtYBwKgZE9y5ZQhRZyy34AzMoh5A89tnIuyPPdMPgCgrZK2ASRfDIJiWiYlZv0Pqvp_JWkIoo0Q5vzxleofwt45s5UHeY0FNcJ02R5nHWSV86E57RSg-3xNOmlOpJ5dk2lZK6Burn8tA-M8WXLJOup8vTHEEWRLqApSLSrH-n3CLQDrVZme",
                            "width": 2160
                        }],
                        "place_id": "ChIJrUQOnVluwUMRn_3S6EyFB9I",
                        "plus_code": {
                            "compound_code": "RHQG+PF Екатеринбург",
                            "global_code": "9J82RHQG+PF"
                        },
                        "rating": 4.5,
                        "reference": "ChIJrUQOnVluwUMRn_3S6EyFB9I",
                        "scope": "GOOGLE",
                        "types": [
                            "park",
                            "tourist_attraction",
                            "point_of_interest",
                            "establishment"
                        ],
                        "user_ratings_total": 164,
                        "vicinity": "Екатеринбург"
                    },
                    {
                        "business_status": "OPERATIONAL",
                        "geometry": {
                            "location": {
                                "lat": 56.8445839,
                                "lng": 60.60095870000001
                            },
                            "viewport": {
                                "northeast": {
                                    "lat": 56.84593372989272,
                                    "lng": 60.60230852989272
                                },
                                "southwest": {
                                    "lat": 56.84323407010728,
                                    "lng": 60.59960887010728
                                }
                            }
                        },
                        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png",
                        "name": "Парк \"Динамо\"",
                        "opening_hours": {
                            "open_now": true
                        }
                    },
                    {
                        "business_status": "OPERATIONAL",
                        "geometry": {
                            "location": {
                                "lat": 56.8390066,
                                "lng": 60.5750667
                            },
                            "viewport": {
                                "northeast": {
                                    "lat": 56.84014097989272,
                                    "lng": 60.57621907989272
                                },
                                "southwest": {
                                    "lat": 56.83744132010727,
                                    "lng": 60.57351942010727
                                }
                            }
                        },
                        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png",
                        "name": "Парк",
                        "photos": [
                            {
                                "height": 3024,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/102566652670450147370\">Vladimir Peretiagin</a>"
                                ],
                                "photo_reference": "ATtYBwLRd9x7LZOZLTobNKSKx8Y8eS5UHwTpNH2IRQiz2j2PdUIfJQMPouaI3mRgKB_iKeHtsfh8JcPJtRaUigSzQytgq_MmbtCwaV0CcJh485N4Cj0twDzHJ0kmJYMqI6LLiH6nRfJg9qU23veQ7Js89LStlOqleXg_0R75dqzdhCZBfHFZ",
                                "width": 4032
                            }
                        ],
                        "place_id": "ChIJk3qNavhvwUMRq9Fej3FKcVE",
                        "plus_code": {
                            "compound_code": "RHQG+J2 Екатеринбург",
                            "global_code": "9J82RHQG+J2"
                        },
                        "rating": 5,
                        "reference": "ChIJk3qNavhvwUMRq9Fej3FKcVE",
                        "scope": "GOOGLE",
                        "types": [
                            "park",
                            "point_of_interest",
                            "establishment"
                        ],
                        "user_ratings_total": 2,
                        "vicinity": "Екатеринбург"
                    }
                ]
            }
        },
        computed: {
            mapCoordinates() {
                if (!this.map) {
                    return {
                        lat: 0,
                        lng: 0
                    }
                }
                return {
                    lat: this.map.getCenter().lat().toFixed(4),
                    lng: this.map.getCenter().lng().toFixed(4)
                }
            },
            infoWindowPosition() {
                return {
                    lat: parseFloat(this.activePlace.geometry.location.lat),
                    lng: parseFloat(this.activePlace.geometry.location.lng)
                }
            }
        },
        methods: {
            handleDrag() {
                let center = {
                    lat: this.map.getCenter().lat(),
                    lng: this.map.getCenter().lng()
                }
                let zoom = this.map.getZoom();

                localStorage.center = JSON.stringify(center)
                localStorage.zoom = zoom
            },
            getPosition(p) {
                return {
                    lat: parseFloat(p["geometry"]["location"]["lat"]),
                    lng: parseFloat(p["geometry"]["location"]["lng"])
                }
            },
            handleMarketClicked(p) {
                this.activePlace = p
                this.infoWindowOpened = true
            },
            handleInfoWindowClose() {
                this.infoWindowOpened = false
            }
        },
        created() {

            this.$getLocation({})
                .then(coordinates => {
                    this.coordinates = coordinates
                })
                .catch(error => {
                    alert(error)
                })

        },
        mounted() {
            this.$refs.mapRef.$mapPromise.then(map => this.map = map)
        }
    }
</script>

<style scoped lang="scss">
    .col {
        margin-top: 2%;
    }

    .content {
        text-align: center;

    }

    .info-window {
        background-color: $background-color;

    }

    h3 {
        font-size: 20px
    }

    .opened-now {
        color: green;
    }
</style>