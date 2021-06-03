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
  },
});
