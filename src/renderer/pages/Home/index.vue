<template>
    <div class="home">
        <div class="title">
            <div>1</div>
            <div>
                <fas-i icon="user-secret"></fas-i>
            </div>
        </div>
        <div class="library">library</div>
        <div class="books">books</div>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss">
    .home {
        display: grid;
        grid-template-areas: "title title" "library books" "library books";
        grid-template-columns: 200px 1fr;
        grid-template-rows: 40px 1fr;
        .title {
            grid-area: title;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            background: red;
        }
        .library {
            grid-area: library;
            background: green;
        }
        .books {
            grid-area: books;
            background: blue;
        }
    }
</style>
