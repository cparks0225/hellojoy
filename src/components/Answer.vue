<template>
  <v-btn
    outline
    color="indigo"
    round
    block
    @click="$emit('answer-selected', value)"
    >{{ title }}</v-btn
  >
</template>

<script>
export default {
  name: "answer",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
};
</script>

<style></style>
