const app = Vue.createApp({
  data() {
    return {
      index: 0,
      count: 3,
      correctAnswer: 0,
      wrongAnswer: 0,
      selectedAnswer: "",
      questions: [
        {
          question: "When did Facebook launch ?",
          answers: { a: "2005", b: "2008", c: "2003", d: "2004" },
          correctAnswer: "d",
        },
        {
          question:
            "Albert Eintein had trouble with mathematics when he was in school",
          answers: { a: "True", b: "False" },
          correctAnswer: "b",
        },
        {
          question:
            "Rolex is a company that specializes in what type of product ?",
          answers: { a: "Bags", b: "Watches", c: "Shoes", d: "Laptops" },
          correctAnswer: "b",
        },
      ],
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      if (this.selectedAnswer == this.questions[this.index]["correctAnswer"])
        this.correctAnswer++;
      else this.wrongAnswer++;
    },
    nextQuestion() {
      this.index++;
      this.selectedAnswer = "";
    },
    showResults() {
      this.index++;
    },
    resetQuiz() {
      this.index = 0;
      this.selectedAnswer = "";
      this.correctAnswer = 0;
      this.wrongAnswer = 0;
    },
  },
});

app.mount("#app");
