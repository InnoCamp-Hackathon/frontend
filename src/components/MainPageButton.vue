<template>
    <div class="main-screen-button" @click="getCurrentLocation()" :class="{'disabled': isSearching}">
        <span v-if="!isSearching">Начать поиск</span>
        <span v-else class="spinner-border"></span>

    </div>
</template>

<script>
    export default {
        name: "MainPageButton",
        data() {
            return {
                isSearching: false
            }
        },
        methods: {
            getCurrentLocation() {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        console.log(position.coords.latitude);
                        console.log(position.coords.longitude);
                        console.log(this.radius)
                        this.isSearching = true
                        setTimeout(() => {
                            this.isSearching = false
                            this.$router.push('/result')
                        }, 5000)
                        // this.fetchPlaces(position.coords.longitude, position.coords.latitude, this.radius)


                    }, error => {
                        console.log(error.message)
                    }
                )
            }
        }
    }
</script>

<style scoped lang="scss">
    .main-screen-button {
        background-color: $button-color;
        min-width: 200px;
        font-family: $font-family-base;
        color: $button-text;
        border-radius: 10px;
        text-align: center;
        display: block;
        padding: 1%;
        cursor: pointer;
    }

    .main-screen-button:hover {
        background: rgba(127, 90, 240, 0.8);
    }

    .disabled {
        pointer-events: none;
        cursor: not-allowed;
    }
</style>