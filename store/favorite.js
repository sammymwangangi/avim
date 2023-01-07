export const state = () => ({
    favorite: [],
})
export const mutations = {
    addToFavorite(state, item) {
        let found = state.favorite.find(product => product._id === item._id);
        if (found) {
            let index = state.favorite.indexOf(item);
            state.favorite.splice(index, 1)
        } else {
            state.favorite.push(item)
        }
    },
    removeFromFavorite(state, item) {
        let index = state.favorite.indexOf(item);
        state.favorite.splice(index, 1)

    },
    emptyFavorite(state) {
        state.favorite=[]

    }
}
