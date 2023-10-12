<script setup>
import { computed } from "vue";

const props = defineProps(["description"]);
const emit = defineEmits(["update:description"]);

const value = computed({
  get() {
    return props.description;
  },
  set(value) {
    emit("update:description", value);
  },
});
</script>

<template>
  <textarea
    class="form-control"
    id="textarea"
    rows="3"
    placeholder="Beschreibung..."
    maxlength="500"
    v-model="value"
  ></textarea>
</template>

<style></style>
