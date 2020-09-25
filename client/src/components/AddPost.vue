<template>
  <div>
    <button @click="showModal = true" class="button is-dark">
      Create New Post!
    </button>

    <div v-if="showModal" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Create Your Post</p>
          <button
            @click="closeModal"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                v-model="newPost.title"
                class="input"
                type="text"
                placeholder="SUCH A COOL POST"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Image URL</label>
            <div class="control">
              <input v-model="newPost.imageUrl" class="input" />
            </div>
            <div class="field">
              <label class="label">Content</label>
              <div class="control">
                <textarea
                  v-model="newPost.content"
                  class="textarea"
                  placeholder="Post Content"
                ></textarea>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="post" class="button is-dark">POST</button>
          <button @click="closeModal" class="button is-danger">CANCEL</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddPost",
  data: function () {
    return {
      showModal: false,
      newPost: { title: "", imageUrl: "", content: "" },
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    post() {
      axios.post('http://localhost:3000', this.newPost)
      this.$emit("created", this.newPost)
      this.closeModal()
      
    },
  },
};
</script>

<style lang="scss" scoped>
</style>