import movie from '../../../api/movie';

export default {
  async getMovie ({ commit }, { sortBy }) {
    try {
      const resultMovie = await movie.listMovie(sortBy);
      commit('updateListMovie', resultMovie.data);
    } catch (err) {
      throw new Error(err);
    }
  },

  async getDetailMovie ({ commit }, { idMovie }) {
    try {
      const detailMovie = await movie.detailMovie(idMovie);
      commit('updateDetailMovie', detailMovie.data);
    } catch (err) {
      throw new Error(err);
    }
  }
};
