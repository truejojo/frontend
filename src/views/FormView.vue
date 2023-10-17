<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useEmployeeStore } from '../stores/useEmployeeStore';

const { employeeID, employee, loading, error } = storeToRefs(useEmployeeStore());
const { fetchEmployee } = useEmployeeStore();

const { v$ } = defineProps({ v$: { type: Object } });
watch(employeeID, () => fetchEmployee());
</script>

<template>
  <form class="px-0">
    <fieldset>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error.message }}</div>

      <div class="mb-3">
        <label for="firstName" class="form-label">Vorname</label>
        <input
          class="form-control"
          maxlength="80"
          placeholder="Vorname..."
          id="firstName"
          type="text"
          v-model="employee.firstName"
        />
        <span class="text-danger" v-if="v$.firstName.$error">
          {{ v$.firstName.$errors[0].$message }}
        </span>
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Nachname</label>
        <input
          class="form-control"
          maxlength="80"
          placeholder="Nachname..."
          id="lastName"
          type="text"
          v-model="employee.lastName"
        />
        <span class="text-danger" v-if="v$.lastName.$error">
          {{ v$.lastName.$errors[0].$message }}
        </span>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          class="form-control"
          maxlength="80"
          placeholder="Email..."
          id="email"
          type="email"
          v-model="employee.email"
        />
        <span class="text-danger" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Beschreibung</label>
        <textarea
          class="form-control"
          id="description"
          placeholder="Beschreibung..."
          rows="3"
          maxlength="500"
          v-model="employee.description"
        ></textarea>
        <span class="text-danger" v-if="v$.description.$error">
          {{ v$.description.$errors[0].$message }}
        </span>
      </div>
    </fieldset>
    <!-- <button class="btn btn-secondary" @click.prevent="checkFormInput">check</button> -->
  </form>
</template>
