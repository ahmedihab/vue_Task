<template>
  <div>
    <div>
      <img
        class="imgw w-100"
        v-bind:src="ImgUrl + imagePath"
      />
    </div>

    <div class="info p-3 my-2 col-12">
      <div class="text-white mb-3 py-3">
        <div>
          <h1>{{ title }}</h1>
          <p class="lead">{{ overview | shorten }}</p>
        </div>
        <div class="vote mb-3">
          {{ rate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Components_MovieCard',
  data: () => ({
    ImgUrl: 'https://image.tmdb.org/t/p/original'
  }),
  props: {
    title: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    rate: {
      type: Number,
      required: true
    },
    imagePath: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.info {
  position: relative;
}
.vote {
  position: absolute;
  bottom: 20%;
  right: 20px;
  background-color: #09c;
  padding: 8px;
}
</style>
