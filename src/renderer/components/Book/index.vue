<template>
    <div class="book">
        <div class="title">{{title}}</div>
        <div class="bookImg">{{bookImg}}</div>
    </div>
</template>

<script>
  export default {
    name: 'Book',
    props: {
      title: {
        type: String,
        default: 'notitle'
      },
      bookImg: {
        type: String,
        default: '/static/no-image.png'
      }
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss">
    .book {
    }
</style>
