<template>
  <h1 id="h1">fetch 는 2번 호출 됩니까?</h1>
</template>

<script>
export default {
  async fetch() {
    await console.log('Before Fetch hook executed in the page component')

    if (process.client) {
      alert('ok2')
    }
  },
  beforeMount() {
    console.log('Before Mount hook executed in the page component')
  },
  mounted() {
    console.log('Mounted hook executed in the page component')
  },
  // 다른 라이프사이클 메소드들을 추가할 수 있습니다.
}
</script>
