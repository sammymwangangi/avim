export const state = () => ({
  topPicks: [],
  homeBrands: [],
  bestWines: [],
  bestSpirits: [],
  bestBeers: [],
  offers: [],
  homeCarousels: [],
});
export const mutations = {
  // Home page data
  setBestWines(state, data) {
    state.bestWines = data;
  },
  setTopPicks(state, data) {
    state.topPicks = data;
  },
  setBestSpirits(state, data) {
    state.bestSpirits = data;
  },
  setBestBeers(state, data) {
    state.bestBeers = data;
  },
  setHomeBrands(state, data) {
    state.homeBrands = data;
  },
  setOffers(state, data) {
    state.offers = data;
  },
  setHomeCarousels(state, data) {
    state.homeCarousels = data;
  },
};
export const actions = {
  // Home page actions
  async getBestWines({ commit }) {
    const bestWines = await this.$http
      .$get('best-wines')
      .then((response) => response.result)
      .catch(() => false);
    commit('setBestWines', bestWines);
  },
  // Top Picks
  async getTopPicks({ commit }) {
    const topPicks = await this.$http
      .$get('top-picks')
      .then((response) => response.result)
      .catch(() => false);
    commit('setTopPicks', topPicks);
  },
  //best spirits
  async getBestSpirits({ commit }) {
    const bestSpirits = await this.$http
      .$get('best-spirits')
      .then((response) => response.result)
      .catch(() => false);
    commit('setBestSpirits', bestSpirits);
  },
  //best beers
  async getBestBeers({ commit }) {
    const bestBeers = await this.$http
      .$get('best-beers')
      .then((response) => response.result)
      .catch(() => false);
    commit('setBestBeers', bestBeers);
  },
  //home carousels
  async getHomeCarousels({ commit }) {
    const homeCarousels = await this.$http
      .$get('home-carousels')
      .then((response) => response.result)
      .catch(() => false);
    commit('setHomeCarousels', homeCarousels);
  },
  //home brands
  async getHomeBrands({ commit }) {
    const homeBrands = await this.$http
      .$get('home-brands')
      .then((response) => response.result)
      .catch(() => false);
    commit('setHomeBrands', homeBrands);
  },
  // Get drinks on offer
  async getHomeOffers({ commit }) {
    const offers = await this.$http
      .$get('offers')
      .then((response) => response.result)
      .catch(() => false);
    commit('setOffers', offers);
  },
};
export const getters = {
  getSpirits: (state) => {
    return state.bestSpirits;
  },
  getWines: (state) => {
    return state.bestWines;
  },
  getTopPicks: (state) => {
    return state.topPicks;
  },
  getBeers: (state) => {
    return state.bestBeers;
  },
  getBrands: (state) => {
    return state.homeBrands;
  },
  getOffers: (state) => {
    return state.offers;
  },
  getCarousels: (state) => {
    return state.homeCarousels;
  },
};
