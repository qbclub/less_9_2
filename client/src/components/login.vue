<template>
        <v-container>
        <v-row class="justify-center">
          <v-col cols="12" md="6">
            <h2 class="text-center">Войти</h2>
            <v-form  class="d-flex flex-column">
              <v-text-field
                v-model="login"
                label="Логин"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Пароль"
                required
              ></v-text-field>
         
              <div class="d-flex justify-center">
                <v-btn class="primary">Отправить</v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>