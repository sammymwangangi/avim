import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
    createPersistedState({
        key: 'avimarinternatioalcache',
        paths: ['products','cart','favorite','menus'],
    })(store) // vuex plugins can be connected to store, even after creation

}
