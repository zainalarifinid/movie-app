<template>
  <div class="w-full content-center" >
    <div class="flex w-full" >
      <div class="w-30 ml-5" >
        <button class="hover:bg-blue-700 font-bold py-2 px-4 rounded" @click="changePopularity" :class="filterBy === 'popularity' ? 'bg-blue-700 text-white' : ''" >
          Popularity {{ isDescPopularity ? '&#8595;' : '&#8593;' }}
        </button>
      </div>
      <div class="w-30 ml-5" >
        <button class="hover:bg-blue-700 font-bold py-2 px-4 rounded" @click="changeReleaseDate" :class="filterBy === 'release' ? 'bg-blue-700 text-white' : ''" >
          Release Date {{ isDescReleaseDate ? '&#8595;' : '&#8593;' }}
        </button>
      </div>
      <div class="w-30 ml-5" >
        <button class="hover:bg-blue-700 font-bold py-2 px-4 rounded" @click="changeVoteCount" :class="filterBy === 'vote' ? 'bg-blue-700 text-white' : ''" >
          Vote Count {{ isDescVoteCount ? '&#8595;' : '&#8593;' }}
        </button>
      </div>
    </div>
    <div class="flex w-full" >
      <div class="flex-col w-1/2" >
        <movie
          v-for="(dataMovie, index) in currentListMovie"
          :key="index"
          :movie="dataMovie"
        >
        </movie>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Movie } from '../components';

export default {
  name: 'Home',
  data: () => ({
    currentListMovie: [],
    isDescPopularity: true,
    isDescReleaseDate: true,
    isDescVoteCount: true,
    filterBy: 'popularity'
  }),
  computed: {
    ...mapGetters('MovieModule', ['listMovie'])
  },
  watch: {
    listMovie: function (val) {
      this.currentListMovie = val.results;
    }
  },
  async mounted () {
    // const sortBy = ['popularity.desc', 'release_date.desc', 'vote_count.desc'];
    await this.getMovie({ sortBy: 'popularity.desc' });
    this.currentListMovie = this.listMovie.results;
  },
  methods: {
    ...mapActions('MovieModule', ['getMovie']),
    async changePopularity () {
      if (this.filterBy === 'popularity') {
        this.isDescPopularity = !this.isDescPopularity;
      }
      this.filterBy = 'popularity';
      await this.getMovie({ sortBy: this.isDescPopularity ? 'popularity.desc' : 'popularity.asc' });
    },
    async changeReleaseDate () {
      if (this.filterBy === 'release') {
        this.isDescReleaseDate = !this.isDescReleaseDate;
      }
      this.filterBy = 'release';
      await this.getMovie({ sortBy: this.isDescReleaseDate ? 'release_date.desc' : 'release_date.asc' });
    },
    async changeVoteCount () {
      if (this.filterBy === 'vote') {
        this.isDescVoteCount = !this.isDescVoteCount;
      }
      this.filterBy = 'vote';
      await this.getMovie({ sortBy: this.isDescVoteCount ? 'vote_count.desc' : 'vote_count.asc' });
    }
  },
  components: {
    Movie
  }
};
</script>
