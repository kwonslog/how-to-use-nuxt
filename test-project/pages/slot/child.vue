<template>
  <div style="background-color: antiquewhite">
    <p>/slot/child.vue</p>
    <slot name="testName" />
  </div>
</template>
<script>
export default {
  methods: {
    testMethod() {
      console.log('call testMethod')
    },
  },
}
</script>
