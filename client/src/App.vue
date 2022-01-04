<template>
  <v-app>
    <v-app-bar app>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <router-link
          class="ma-6"
          v-for="(link, index) in links"
          :key="index"
          :to="link.path"
          >{{ link.name }}</router-link
        >
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    links: [
  
      { path: "/feed", name: "Галерея" },
      { path: "/", name: "Загрузить" },
    ],
  }),
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black !important;
  &:hover {
    color: blue !important;
  }
}
</style>