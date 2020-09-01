<template>
  <div class="max-w-sm w-2/3 lg:max-w-full lg:flex pb-5">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      :style="'background-image: url('+urlImage+')'"
      :title="movie.original_title"
    ></div>
    <div
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal min-w-full"
    >
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2 hover:text-red-600">
          <router-link :to="{ path: '/detail/'+movie.id }"  >{{movie.original_title}}</router-link>
        </div>
        <p class="text-gray-700 text-base">
          {{movie.overview}}
        </p>
      </div>
      <div class="flex items-center">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src="@/assets/icon-for-movie-0.jpg"
          alt="Avatar of Jonathan Reinink"
        />
        <div class="text-sm">
          <p class="text-gray-900 leading-none">
            <img src="@/assets/star_96096.png" class="w-5 h-5" style="float:left;" />{{movie.popularity}}
          </p>
          <br/>
          <p class="text-gray-600">{{movie.genre_ids}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Movie',
  props: {
    movie: {
      type: Object,
      default: () => ({
        popularity: 809.213,
        vote_count: 898,
        video: false,
        poster_path: '/TnOeov4w0sTtV2gqICqIxVi74V.jpg',
        id: 605116,
        adult: false,
        backdrop_path: '/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg',
        original_language: 'en',
        original_title: 'Project Power',
        genre_ids: [28, 80, 878],
        title: 'Project Power',
        vote_average: 6.7,
        overview:
          'An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.',
        release_date: '2020-08-14'
      })
    }
  },
  computed: {
    urlImage () {
      return this.movie.poster_path ? 'http://image.tmdb.org/t/p/w300/' + this.movie.poster_path
        : 'https://via.placeholder.com/300?text=Move+App+Zainal';
    }
  }
};
</script>
