<template>

    <div class="content">
        <div class="container">
            <h1>Результаты поиска:</h1>
            <p>Выведены места с хорошей погодой! Удачного отдыха!</p>
            <Map/>
        </div>
    </div>
</template>

<script>
    import Map from "../components/Map";

    export default {
        name: "ResultsPage",
        components: {Map}
    }
</script>

<style scoped lang="scss">
    * {
        background-color: $background-color;
    }

    .container {
        padding-top: 10vh;
    }

    .content {
        height: 100vh;
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

    }
</style>