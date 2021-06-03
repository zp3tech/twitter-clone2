var app = new Vue({
  el: "#app",

  data: {
    userData: {},
    userId: 0,
    name: "",
    email: "",
    password: "",
    max_length: 25,
    max_pass_length: 16,
    error: "",
    registered: false,
    tweetMsg: "",
    max_tweet: 200,
    tweets: [],
  },

  computed: {},

  methods: {
    registerAccount() {
      //validation
      if (this.name !== "" && this.email !== "" && this.password !== "") {
        //records user details
        this.userData.id = ++this.userId;
        this.userData.name = this.name;
        this.userData.email = this.email;
        this.userData.password = this.password;
      } else {
        this.error = "Complete all the form fields";
      }

      //adds registration data to localStorage
      localStorage.setItem("simple_tweet_registered", true);
      //adds the whole userData object as JSON string
      localStorage.setItem(
        "simple_tweet_registered_user",
        JSON.stringify(this.userData)
      );

      //clears the registration fields
      this.name = "";
      this.email = "";
      this.password = "";
    },

    sendTweet() {
        //adds tweetMsg string to tweets array
        this.tweets.unshift({
            text: this.tweetMsg,
            date: new Date().toLocaleTimeString(),
        });
        //empty the textarea of tweetMsg text
        this.tweetMsg = "";

        //localStorage
        stringTweets = JSON.stringify(this.tweets)
        localStorage.setItem('simple_tweet_tweets', stringTweets)
    },
  },

  created() {
    if (localStorage.getItem("simple_tweet_registered") === "true") {
      this.registered = true;
    }
    //repopulates userData object
    if (localStorage.getItem("simple_tweet_registered_user")) {
      this.userData = JSON.parse(
        localStorage.getItem("simple_tweet_registered_user")
      );
    }
    //parse tweets from localStorage and readd to tweets array
    if (localStorage.getItem("simple_tweet_tweets")) {
        console.log("this is a list of tweets");
        this.tweets = JSON.parse(localStorage.getItem('simple_tweet_tweets'))
    } else {
        console.log('No tweets here');
    }
  },
});
