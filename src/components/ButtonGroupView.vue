<script setup>
import { inject } from "vue";
import ButtonView from "../assets/ButtonView.vue";

const emitter = inject("emitter");

const saveData = () => emitter.emit("saveData");

const searchData = () => emitter.emit("searchData");

const deleteData = () => emitter.emit("deleteData");

const resetForm = () => emitter.emit("resetForm");
</script>

<template>
  <ButtonView
   @click="saveData" class="btn-primary">
    Speichern
  </ButtonView
  >
  <ButtonView
   @click="searchData" class="btn-success">
    Suchen
  </ButtonView
  >
  <ButtonView
   @click="deleteData" class="btn-danger">
    Löschen
  </ButtonView
  >
  <ButtonView
   @click="resetForm" class="btn-info">
    Reset Form
  </ButtonView
  >
</template>

<style></style>
