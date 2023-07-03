<template>
  <h1 id="h1">fetch 는 2번 호출 됩니까?{{ renderedOn }}</h1>
</template>

<script>
export default {
  async asyncData() {
    await console.log('server side - asyncData')
    return { renderedOn: process.client ? 'client' : 'server' }
  },

  async fetch() {
    await console.log('server side - fetch method called!')

    if (process.client) {
      alert('클라이언트 fetch 실행확인!!')
    }
  },
  mounted() {
    window.onNuxtReady(() => {
      // Nuxt 애플리케이션이 로드되고 준비된 후에 실행되는 코드 작성
      console.log('Nuxt application is ready!')
    })

    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
}
</script>
