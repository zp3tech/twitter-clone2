var app = new Vue({
  el: "#app",

  data: {
    tweet: "",
    tweets: [],
    max_length: 200,
  },

  computed: {
    maxCharsText: function() {
        return `${this.tweet.length} characters used of ${this.max_length} (${this.max_length - this.tweet.length} remaining)`;
    },
    errorMessage: function() {
        return `Max char limit reached! excess chars: ${this.tweet.length - this.max_length}`
    },
  },

  methods: {
    submitData() {
      if (this.tweet.length > 0 && this.tweet.length <= this.max_length) {
        this.tweets.unshift(this.tweet);
        this.tweet = "";
      }
    },
  },
});
