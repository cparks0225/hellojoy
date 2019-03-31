<template>
  <div class='question'>
    <h1>{{question.title}}</h1>
    <div v-for="answer in answers">
      <Answer :title="answer.title" :value="answer.value" @answer-selected="onAnswerSelected" />
    </div>
  </div>
</template>

<script>
import Answer from '@/components/Answer'

export default {
  name: "question",
  components: {
    Answer
  },
  data() {
    return {}
  },
  props: {
    question: {
      type: Object,
      required: true
    },
    answers: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onAnswerSelected(i) {
      let responseObj = {
        key: this.question.key,
        val: i
      }
      this.$emit('question-answered', responseObj)
    }
  }
}
</script>

<style>
h1 {
  margin-bottom: 25px;
}
</style>