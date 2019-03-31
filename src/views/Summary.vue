<template>
  <div class="Summary" v-if="$store.state.summary.isComplete">
    <h1>Assessment Summary</h1>
    <v-flex
      class="xs12"
      v-for="a in completedAssessment.assessments"
      :key="a.id"
    >
      <v-divider></v-divider>
      <v-layout class="row">
        <v-flex class="xs12">{{ a.id }}</v-flex>
      </v-layout>
      <v-layout class="row" v-for="answer in a.answers" :key="answer.key">
        <v-flex class="xs12">{{ answer.key }} - {{ answer.value }}</v-flex>
      </v-layout>
    </v-flex>
  </div>
</template>

<script>
import uuidv1 from "uuid/v1";
import _ from "lodash";

export default {
  name: "Summary",
  data() {
    return {};
  },
  computed: {
    completedAssessment() {
      let returnObj = {
        assessments: _.map(this.$store.state.summary.responses, r => {
          return {
            id: uuidv1(),
            answers: _.map(r, (value, key) => {
              return {
                value,
                key
              };
            })
          };
        })
      };
      return returnObj;
    }
  },
  mounted() {
    if (!this.$store.getters.loggedIn) {
      this.$router.push({ name: "Login" });
    }
    // eslint-disable-next-line
    console.log("Assessment complete, summary below");
    // eslint-disable-next-line
    console.log(this.completedAssessment);
  }
};
</script>
