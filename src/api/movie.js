
import axios from 'axios';

const API_KEY = '1b869b3ccf57d089047ded4b1de007b8';

export default {
  async listMovie (sortBy) {
    try {
      const result = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: API_KEY,
          sort_by: sortBy
        }
      });

      return result;
    } catch (err) {
      return err;
    }
  },
  async detailMovie (idMovie) {
    try {
      const result = await axios.get(`https://api.themoviedb.org/3/movie/${idMovie}`, {
        params: {
          api_key: API_KEY
        }
      });

      return result;
    } catch (err) {
      return err;
    }
  }
};
