<template>
  <v-container>
    <v-row class="justify-center">
      <v-col
        v-for="(photo, index) in photos"
        :key="index"
        class=" col-12 col-md-4"
      >
      <v-img v-if="photo.image"  :src="addImage(photo.image)"></v-img>
    
       <p class="text-center text-h6">{{ photo.name }}</p> 
       <p class="text-right">{{ photo.author }}</p> 
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      photos: [],
    };
  },
  methods: {
    addImage:  function (img) {
       return require("/../uploads/" + img);
    },
  },
  mounted:  function () {
    let vm = this;
     axios
      .get("http://localhost:3000/feed")
      .then(function (res) {
        // console.log(res.data);
        vm.photos = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style>
</style>