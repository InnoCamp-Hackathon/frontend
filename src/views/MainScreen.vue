<template>
    <div class="main-screen no-margin">
        <div class="container">
            <div class="col">
                <div class="content">
                    <h1>Ищите места для отдыха рядом</h1>
                    <p>Веб-приложение для поиска площадок для активного отдыха на свежем воздухе!</p>
                    <h2>Радиус поиска:</h2>
                    <vue-slider
                            class="slider"
                            v-model="radius"
                            :tooltipStyle="{ backgroundColor: 'rgba(127, 90, 240, 0.3)'}"
                            :dotStyle="{ backgroundColor: 'rgba(127, 90, 240, 1)'}"
                            :max="50"
                            :process-style="{ backgroundColor: '#7f5af0'}"
                            :interval="5"/>
                    <p>{{ radius }} км</p>
                    <main-page-button />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MainPageButton from "../components/MainPageButton";
    import RadiusPicker from "../components/RadiusPicker";
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'

    export default {
        name: "MainScreen",
        data() {
            return {
                radius: 0
            }
        },
        methods: {
        },
        components: {
            RadiusPicker,
            MainPageButton,
            VueSlider
        }
    }
</script>

<style scoped lang="scss">
    * {

        background-color: $background-color;
    }

    .main-screen {
        height: 100vh;

        .container {
            padding-top: 20vh;
            .content {
                h1 {
                    font-family: $font-family-base;
                    font-weight: 900;
                    color: $headline-color;
                    text-align: center;
                }

                h2 {
                    text-align: center;
                    font-size: 20px;
                    color: $headline-color;
                }

                p {
                    font-family: $font-family-base;
                    text-align: center;
                    color: $paragraph-color;
                }
                .arr {
                    margin: 2%;
                }
                .slider {
                    cursor: pointer;
                }
            }
        }
    }

</style>