<template>
  <div>
    <p style="background-color: aqua">/slot/index.vue</p>
    <!-- store getters 사용 -->
    <p>count : {{ $store.getters.getCounter }}</p>
    <!-- store state 사용 -->
    <p>count : {{ $store.state.counter }}</p>
    <Child ref="childComponent">
      <template #testName>
        이 값은 자식의 slot 쪽에 입력 됩니다. {{ value1 }}</template
      >
    </Child>
    <button ref="clickBtn" class="btn btn-b" @click.prevent="showAlert">
      누르세요
    </button>
  </div>
</template>
<script>
import Child from '~/pages/slot/child.vue'
export default {
  components: { Child },
  data() {
    return {
      value1: 0,
    }
  },
  watch: {
    value1(newValue, oldValue) {
      console.log(newValue, oldValue)
    },
  },
  methods: {
    showAlert() {
      // alert('test')
      // 자식 컴포넌트의 메소드를 직접 호출
      this.$refs.childComponent.testMethod()
      // store mutations 메소드를 호출해서 값을 변경
      this.$store.commit('increment')
      this.$store.dispatch('fetchCounter')
      // this.$store.dispatch('setCounter', 100)
      this.value1++

      // replace 하면 페이지 이동이 되지만 이전 페이지 이동은 안된다.
      // this.$router.replace('/dyn')
      // 페이지 이동 가능. 이전 페이지 이동 가능
      this.$router.push('/dyn')
    },
  },
}
</script>
