export default {
  updateListMovie (state, listMovie) {
    state.listMovie = Object.assign({}, listMovie);
  },
  updateDetailMovie (state, detailMovie) {
    state.movie = Object.assign({}, detailMovie);
  }
};
