<template>
  <div>
    <NuxtLink to="/async-data/page">/async-data/page 페이지로 이동</NuxtLink>
    >> {{ user }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line require-await
  async asyncData() {
    console.log('asyncData call.', process.server)
    return {}
  },
  data() {
    return {
      user: {},
    }
  },

  /*
  브라우저에서
  http://localhost:3000/async-data 를 직접 호출 하는 경우(A)와
  http://localhost:3000/async-data/page 에서 링크를 통해 이동하는 경우(B)를 비교해 보자.

  A의 경우에는 user 정보가 로딩되는 모습 없이 즉시 보인다.(SSR)
  B의 경우에는 user 정보가 없다가 fetch 메소드의 결과값으로 인해 표시된다.(CSR)
  */
  async fetch() {
    console.log('fetch call...', process.server)
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    this.user = res.data
  },
  // fetchOnServer 의 기본값은 true 이다. 만약 false 설정 한다면 무조건 B의 경우처럼 처리된다.
  // fetchOnServer: false,
}
</script>
