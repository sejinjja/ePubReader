<template>
    <div class="e-book-sample">
    </div>
</template>

<script>
  import extractor from '@/util/extractor'
  import path from 'path'

  export default {
    name: 'EBookSample',
    components: {},
    props: {},
    computed: {},
    data () {
      return {}
    },
    created () {
      this.parseEpub()
    },
    mounted () {
    },
    methods: {
      async parseEpub () {
        const a = await extractor(path.join(__static, 'GeographyofBliss_oneChapter.epub'), {dir: __static + '/test/GeographyofBliss_oneChapter'})
        console.log('a', a)
      }
    },
    watch: {}
  }
</script>

<style lang="scss" scopped>
</style>
