import axios from 'axios'
import _ from 'lodash'

export default {
  state: {
    isLoading: false,
    togglePage: true,
    login: {
      users: [
        {
          name: 'Frank Smith',
          logo: 0,
          userId: '5c86be20340000e21389c26b'
        },
        {
          name: 'Jane Doe',
          logo: 30,
          userId: '5c7164773500007000e9e82a'
        }
      ],
      currentUser: null
    },
    questions: {
      currentAssessment: 0,
      currentQuestion: 0,
      assessments: []
    },
    summary: {
      isComplete: false,
      responses: {}
    }
  },
  getters: {
    currentAssessmentRef(state) {
      if (state.currentAssessment)
        return state.assessments[state.questions.currentAssessment]
    },
    currentQuestionRef(state) {
      return state.assessments[state.questions.currentAssessment].questions[state.questions.currentQuestion]
    },
    loggedIn(state) {
      return state.login.currentUser !== null
    },
    currentQuestion(state) {
      if (state.questions.currentAssessment > 0) {
        let previousAssessmentTotal = 0
        for (var i = state.questions.currentAssessment - 1; i >= 0; i--) {
          previousAssessmentTotal += state.questions.assessments[i].questions.length
        }
        return previousAssessmentTotal + state.questions.currentQuestion + 1
      } else {
        return state.questions.currentQuestion + 1
      }
    },
    totalQuestions(state) {
      return _.sumBy(state.questions.assessments, (assessment) => {
        return assessment.questions.length
      })
    },
    pageProgressPercent(state, getters) {
      return Math.floor((getters.currentQuestion / getters.totalQuestions) * 100)
    }
  },
  mutations: {
    login (state, user) {
      state.login.currentUser = user
    },
    setIsLoading(state) {
      state.isLoading = true
    },
    unSetIsLoading(state) {
      state.isLoading = false
    },
    setAssessments(state, assessments) {
      state.questions.assessments = assessments
      state.summary.responses[state.questions.currentAssessment] = {}
    },
    completeAssessment(state) {
      state.summary.isComplete = true
      console.log('complete')
      console.log(state)
    },
    setAssessment(state, progressForward = true) {
      if (progressForward) {
        state.questions.currentAssessment += 1
        state.questions.currentQuestion = 0
        state.summary.responses[state.questions.currentAssessment] = {}
      }
      else {
        state.questions.currentAssessment -= 1 
        state.questions.currentQuestion = state.questions.assessments[state.questions.currentAssessment].questions.length - 1
      }
    },
    answerQuestionAndAdvance(state, response) {
      let currentAssessment = state.questions.currentAssessment
      state.summary.responses[currentAssessment][response.key] = response.val
      state.togglePage = false
      if (state.questions.currentQuestion + 1 < state.questions.assessments[currentAssessment].questions.length)
      {
        state.questions.currentQuestion += 1
      }
      else
      {
        if (state.questions.currentAssessment + 1 < state.questions.assessments.length)
        {
          this.commit('setAssessment')
        }
        else
        {
          this.commit('completeAssessment')
        }
      }
      setTimeout(() => {
        state.togglePage = true
      }, 1)
    },
    navPreviousQuestion(state) {
      let ca = state.questions.currentAssessment
      let cq = state.questions.currentQuestion
      if (cq === 0) {
        this.commit('setAssessment', false)
      }
      else {
        state.questions.currentQuestion -= 1
      }
    }
  },
  actions: {
    loadAssessments(context) {
      context.commit('setIsLoading')
      let url = `https://www.mocky.io/v2/${context.state.login.currentUser.userId}`
      axios.get(url)
        .then((response) => {
          console.log(response)
          context.commit('setAssessments', response.data) 
        })
        .catch((e) => {
          console.log('error')
          console.log(e)
        })
        .finally(() => {
          context.commit('unSetIsLoading')
        })
    }
  }
}