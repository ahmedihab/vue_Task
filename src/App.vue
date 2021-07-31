<template>
  <div class="container">
    <div class="row">
      <div v-for="movie in topMovie" v-bind:key="movie.id" class="col-md-4 movie my-1">
        <movie
          v-bind:title="movie.title"
          v-bind:rate="movie.vote_average"
          v-bind:imagePath="movie.poster_path"
          v-bind:overview="movie.overview"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Movie from './components/Movie.vue'

export default {
  name: 'App',
  components: { Movie },
  data () {
    return {
      topMovie: []
    }
  },
  beforeMount () {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=c03a1ffd7f00fe2d6cb5ec83a721be12'
    })
      .then((response) => {
        this.topMovie = response.data.results
        console.log(this.topMovie)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>
body {
  background-color: #2c3e50!important;
}
.movie {
  box-shadow: 0 0 10px #09c;
}
</style>
