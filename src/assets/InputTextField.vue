<script setup>
defineProps(["field", "type", "label"]);
defineEmits(["update:field"]);

</script>

<template>
  <label :for="type" class="form-label">{{ label }} input</label>
  <input
    class="form-control"
    maxlength="80"
    :placeholder="`${label}...`"
    :type="type"
    :id="type"

    :value="field"
    @input="$emit('update:field', $event.target.value)"
  />
</template>

<style></style>
