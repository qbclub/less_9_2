<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(photo, index) in photos"
        :key="index"
        class="col-12 col-md-4"
      >
      <v-img :src="addImage()"></v-img>
        {{ photo.name }}
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
    addImage: function (img) {
      return require("../assets/6d80db2d008d82b7131a77e4bf4f7d75");
    },
  },
  mounted: function () {
    let vm = this;
    axios
      .get("http://localhost:3000/feed")
      .then(function (res) {
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