<template>
  <div>
    <div class="block"></div>
    <div class="columns is-centered">
      <add-post @created="pushPost"/>
    </div>
    <div v-for="post in posts" :key="post.id">
      <div class="columns is-centered">
        <div class="column is-half">
          <post
            :title="post.title"
            :imageUrl="post.imageUrl"
            :content="post.content"
          ></post>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "../components/Post";
import AddPost from "../components/AddPost";
export default {
  name: "Home",
  computed:{
    posts() {
      return this.$store.state.posts
    }
  },
  created() {
    this.$store.dispatch('loadPosts')
  },
  methods: {
    pushPost(value){
      console.log("fires")
      this.posts.push(value)
    },
    getPosts() {
      axios
        .get("http://localhost:3000")
        .then((res) => (this.posts = res.data))
        .catch((error) => console.log(error));
    },
  },
  components: {
    Post,
    AddPost,
  },
};
</script>
