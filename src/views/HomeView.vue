<template>
  <v-carousel
    :continuous="false"
    :show-arrows="false"
    hide-delimiter-background
    delimiter-icon="mdi-square"
    height="300"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%" tile>
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">{{ slide }} Slide</div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
export default {
  data() {
    return {
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>
