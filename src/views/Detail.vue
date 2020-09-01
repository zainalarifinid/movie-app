<template>
  <div class="w-full content-center" >
    <div class="flex w-full" >
      <div class="w-30 ml-5" >
        <router-link :to="{ path: '/' }" >
          <button class="hover:bg-blue-700 font-bold py-2 px-4 rounded bg-blue-700 text-white" >
            &#8592; Back
          </button>
        </router-link>
      </div>
    </div>
    <div class="w-full">
      <div class="p-5" >
        <img width="600" :src="urlImage(detailMovie.backdrop_path)" />
      </div>
      <div class="flex w-1/2" >
        <div class="h-1/4 p-5" >
          <img width="400" :src="urlImage(detailMovie.poster_path)" />
        </div>
        <div class="h-3/4 pl-5" >
          <div class="w-full" >
            <h3 class="text-2xl uppercase" >{{detailMovie.original_title}}</h3>
          </div>
          <div class="w-full" >
            <div>Popularity : {{detailMovie.popularity}}</div>
            <div>Genre : {{listGenre(detailMovie.genres)}}</div>
            <div>Release Date :{{detailMovie.release_date}}</div>
            <div>Production Company : {{listCompanies(detailMovie.production_companies)}}</div>
            <div>Runtime : {{runtime(detailMovie.runtime)}}</div>
            <div>Revenue : ${{detailMovie.revenue}}</div>
            <div>Vote Average : {{detailMovie.vote_average}}</div>
            <div>Vote Count : {{detailMovie.vote_count}}</div>
            <div>Spoken Language : {{listLanguage(detailMovie.spoken_languages)}}</div>
          </div>
          <div class="w-full" >
            {{ detailMovie.overview }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';

export default {
  name: 'DetailPage',
  async mounted () {
    await this.getDetailMovie({ idMovie: this.$route.params.id });
  },
  computed: {
    ...mapGetters('MovieModule', ['detailMovie'])
  },
  watch: {
    detailMovie: function (val) {
      this.movie = val;
    }
  },
  methods: {
    ...mapActions('MovieModule', ['getDetailMovie']),
    urlImage (path) {
      return path ? 'http://image.tmdb.org/t/p/w400/' + path
        : 'https://via.placeholder.com/400?text=Move+App+Zainal';
    },
    listGenre (genre) {
      return genre.map((data) => data.name).join();
    },
    listCompanies (companies) {
      return companies.map((data) => data.name).join();
    },
    listLanguage (lang) {
      return lang.map((data) => data.name).join();
    },
    runtime (time) {
      return moment.duration(time, 'minutes').humanize();
    }
  }
};
</script>
