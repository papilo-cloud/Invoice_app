<template>
  <div class="details">
    <h1>Hello</h1>
    <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      id: this.$route.params.id
    }
  },
  mounted() {
     const x = this.$store.getters.getTodoById(this.id)
     console.log(x)
  }
}
</script> 

<style scoped>

</style>