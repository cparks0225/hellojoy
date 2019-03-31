<template>
  <div class='questions'>
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
          offset-md4
        >
          <div v-if="$store.state.questions.assessments.length > 0">
            <transition name="slide-left">
              <div v-if="$store.state.togglePage">
                <v-layout wrap justify-space-between>
                  <v-flex class="xs12">
                    <a @click.prevent="$store.commit('navPreviousQuestion')">
                      <p class="text-sm-left" v-if="$store.getters.currentQuestion > 1">
                        <v-icon>arrow_back_ios</v-icon>
                      </p>
                    </a>
                  </v-flex>
                </v-layout>
                <v-layout wrap justify-space-between>
                  <div :style="progressStyle"></div>
                </v-layout>
                <v-layout wrap justify-space-between>
                  <v-flex class="xs6">
                    <p class="text-sm-left">
                      {{currentAssessmentRef.display_name}}
                    </p>
                  </v-flex>
                  <v-flex class="xs6">
                    <p class="text-sm-right">
                      {{progressText}}
                    </p>
                  </v-flex>
                </v-layout>
                <h3>{{$store.state.questions.assessments[$store.state.questions.currentAssessment].title}}</h3>
                <Question
                  :question="currentQuestionRef"
                  :answers="currentAssessmentRef.answers"
                  @question-answered="handleQuestionAnswered" />
              </div>
            </transition>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Question from '@/components/Question'

export default {
  name: "questions",
  components: {
    Question
  },
  data() {
    return {}
  },
  created() {
    if (this.$store.getters.loggedIn) {
      this.$store.dispatch('loadAssessments')
    } else {
      this.$router.push({ name: 'Login' })
    }
  },
  computed: {
    currentAssessmentRef() {
      return this.$store.state.questions.assessments[this.$store.state.questions.currentAssessment]
    },
    currentQuestionRef() {
      return this.currentAssessmentRef.questions[this.$store.state.questions.currentQuestion]
    },
    progressText() {
      return `${this.$store.getters.currentQuestion} out of ${this.$store.getters.totalQuestions}`
    },
    progressStyle() {
      return {
        width: `${this.$store.getters.pageProgressPercent}%`,
        height: '3px',
        backgroundColor: '#2c3e50'
      }
    }
  },
  methods: {
    handleQuestionAnswered(response) {
      this.$store.commit('answerQuestionAndAdvance', response)
    }
  },
  watch: {
    '$store.state.summary.isComplete'(val) {
      console.log('isComplete!?!?')
      console.log(val)
      console.log(this.$store)
      this.$router.push({ name: 'Summary' })
    }
  }
}
</script>

<style>
h3 {
  margin-bottom: 15px;
}
a {
  cursor: pointer;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>