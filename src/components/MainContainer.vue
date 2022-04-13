<template>
  <section>
    <slot> </slot>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
  background-color: #fff;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.6);
}
</style>
