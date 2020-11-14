export default {
    actions: {
        async fetchPlaces(ctx, lon, lat, radius) {
            const res = await fetch(
                `http://localhost:3000/api/places/nearby?lon=${lon}&lat=${lat}&radius=${radius}`
            )
            const places = await res.json()

            ctx.commit('updatePlaces', places)
        }
    },
    mutations: {
        updatePlaces(state, places) {
            state.places = places
        }
    },
    state: {
        places: []
    },
    getters: {
        allPlaces(state) {
            return state.places
        }
    }
}