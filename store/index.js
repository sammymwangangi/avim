export const state = () => ({
  phone: '+254714798820',
  email: 'orders@nairobidrinks.co.ke',
  name: 'Nairobi Drinks',
  publishedBy: 'Carson',
  savedInfo: {},
  reviewInfo: {},
  meta: [],
});
export const getters = {
  name(state) {
    return state.name;
  },
  phone(state) {
    return state.phone;
  },
  email(state) {
    return state.email;
  },
  publishedBy(state) {
    return state.publishedBy;
  },
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },
};
export const mutations = {
  setMeta(state, meta) {
    state.meta = meta;
  },
  setInfo(state, item) {
    state.savedInfo = item;
  },
  setReviewInfo(state, item) {
    state.reviewInfo = item;
  },
};
export const actions = {
  async getMeta({ commit }, param) {
    const meta = await this.$axios
      .$get(`metas/get-by-category/${param}`)
      .then((response) => response.result)
      .catch(() => false);
    commit('setMeta', meta);
  },
};
