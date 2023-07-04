<template>
  <h1>id : {{ paramValue }}</h1>
</template>

<script>
export default {
  computed: {
    paramValue() {
      return this.$route.params.id
    },
  },
}
</script>
