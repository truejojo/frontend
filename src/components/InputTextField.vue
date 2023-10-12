<script setup>
import { defineProps } from 'vue';

const { model, type, label } = defineProps(['model', 'type', 'label']);
</script>

<template>
  <div>
    <label :for="label" class="form-label">{{ label }}</label>
    <input 
      class="form-control"
      maxlength="80" 
      :id="label" 
      :type="type" 
      :v-model="model"
     />
  </div>
</template>

<style>

/**
<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { model, type, label } = defineProps(['model', 'type', 'label']);
const inputModel = ref(model);
const emit = defineEmits(['update:model']);

const updateInputModel = (value) => {
  inputModel.value = value;
  emit('update:model', value);
};
</script>

<template>
  <div>
    <label :for="label" class="form-label">{{ label }}</label>
    <input
      class="form-control"
      maxlength="80"
      :id="label"
      :type="type"
      :value="inputModel"
      @input="updateInputModel($event.target.value)"
    />
  </div>
</template>
*/
</style>
