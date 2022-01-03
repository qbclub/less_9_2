<template>
  <div>
    <v-container>
      <v-row class="justify-center">
        <v-col class="col-md-6 ">
          <h2 class="text-center mb-6">Добавить фотографию</h2>
          <v-form v-on:submit.prevent="upload">
            <label for="fileInput" v-if="!previewed">
              <div class="d-flex flex-column text-center">
                <v-icon large> mdi-camera </v-icon>
                <span class="caption"> выбери <br /></span>
                <span class="caption"> фото </span>
              </div>
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              name="image"
              v-on:change="preview"
            />

            <v-text-field
              class="align-stretch"
              label="Название"
              name="name"
              v-if="previewed"
            ></v-text-field>

            <v-text-field label="Автор" name="author" v-if="previewed">
            </v-text-field>

            <v-img v-if="previewed" :src="image" />
            <div class="d-flex justify-center">
              <v-btn type="submit" class="primary ma-10" v-if="previewed">
                Загрузить!
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";
export default {
  data: function () {
    return {
      image: "",
      previewed: false,
    };
  },

  methods: {
    preview: function (event) {
      var vm = this;
      var files = event.target.files;
      console.log(files);
      if (files.length > 0) {
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
          vm.image = readerEvent.target.result;
          vm.previewed = true;
        };
        reader.readAsDataURL(files[0]);
      }
    },
    upload: function (event) {
      var data = new FormData(event.target);
      axios
        .post("http://localhost:3000/upload", data)
        .then(function (res) {
          console.log(res);
          router.push("/feed");
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style>
input[type="file"] {
  display: none;
}
</style>