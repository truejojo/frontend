<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useEmployeeStore } from '../stores/useEmployeeStore';

const { employeeID, employee, loading, error } = storeToRefs(useEmployeeStore());
const { fetchEmployee } = useEmployeeStore();

watch(employeeID, () => fetchEmployee());
</script>

<template>
  <form class="px-0">
    <fieldset>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error.message }}</div>

      <div class="mb-3">
        <label for="vorname" class="form-label">Vorname</label>
        <input
          class="form-control"
          maxlength="80"
          placeholder="Vorname..."
          id="vorname"
          type="text"
          v-model="employee.firstName"
        />
      </div>
      <div class="mb-3">
        <label for="nachname" class="form-label">Nachname</label>
        <input
          class="form-control"
          maxlength="80"
          placeholder="Nachname..."
          id="nachname"
          type="text"
          v-model="employee.lastName"
        />
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
      </div>
      <div class="mb-3">
        <label for="textarea" class="form-label">Beschreibung</label>
        <textarea
          class="form-control"
          id="textarea"
          placeholder="Beschreibung..."
          rows="3"
          maxlength="500"
          v-model="employee.description"
        ></textarea>
      </div>
    </fieldset>
  </form>
</template>
