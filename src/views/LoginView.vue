<template>
  <v-container fluid>
    <v-overlay :model-value="isLoading" class="align-center justify-center">
      <v-progress-circular indeterminate color="white"></v-progress-circular>
    </v-overlay>
    <v-row justify="center">
      <v-col cols="5">
        <v-card class="pa-4">
          <v-card-title class="text-center">Login-here</v-card-title>
          <v-card-item>
            <v-sheet>
              <v-form @submit.prevent="submit">
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  prepend-inner-icon="mdi-mail"
                  :rules="[rules.required]"
                ></v-text-field>

                <v-text-field
                  type="password"
                  v-model="form.password"
                  label="Password"
                  prepend-inner-icon="mdi-key"
                ></v-text-field>

                <v-checkbox
                  v-model="form.remember"
                  label="Remember Me"
                  color="red"
                  hide-details
                ></v-checkbox>

                <v-btn
                  color="red-darken-1"
                  type="submit"
                  block
                  variant="elevated"
                  class="mt-2"
                >
                  <span>Submit</span>
                </v-btn>
              </v-form>
            </v-sheet>
          </v-card-item>
          <v-card-actions>
            <v-btn block to="/register">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  email: "",
  password: "",
  remember: false,
});

const isLoading = ref(false);

const rules = {
  required: (value: string) => !!value || "Email is required",
};

function submit() {
  if (form.value.email === "") return;

  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    alert(JSON.stringify(form.value));
  }, 2000);
}
</script>
