<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <div class="columns is-centered"> 
        <div class="column is-half">
          <post :title=post.title
                :imageUrl=post.imageUrl
                :content=post.content></post>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";
export default {
  name: 'Home',
  data: function() {
   return {
     posts: [{
       id: 1,
       title: 'Look at this AWESOME Cat!',
       imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/1200px-VAN_CAT.png',
       content:'This is my cat LIKO!'
     },
     {
       id: 2,
       title:'RTX ON Minecraft!?',
       imageUrl: 'https://www.somagnews.com/wp-content/uploads/2020/03/a6-2-e1585682773996.jpeg',
       content: '2020 Graphic Cards are CHANGING the Game!'
     },
     ]
   } 
  },
  components: {
    Post
  }
}
</script>
