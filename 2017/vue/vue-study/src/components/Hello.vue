<template>
  <div class="hello" v-bind:title="msg">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello Vue!',
      message: 'title'
    }
  }
}
</script>

</style>
