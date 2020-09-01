
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export const movie = {
  popularity: 0,
  vote_count: 0,
  video: false,
  poster_path: '',
  id: null,
  adult: false,
  backdrop_path: '',
  original_language: '',
  original_title: '',
  genre_ids: [],
  title: '',
  vote_average: 0,
  overview: '',
  release_date: ''
};

const state = {
  movie,
  listMovie: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
