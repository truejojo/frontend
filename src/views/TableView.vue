<script setup>
import { storeToRefs } from 'pinia';
import { useEmployeeStore } from '../stores/useEmployeeStore';

const headlines = [
  {
    name: 'index',
    label: 'index'
  },
  {
    name: 'first',
    label: 'Vorname'
  },
  {
    name: 'last',
    label: 'Nachname'
  },
  {
    name: 'handle',
    label: 'Email'
  }
];

const { employeeID, employees, loading, error } = storeToRefs(useEmployeeStore());
const { fetchEmployees } = useEmployeeStore();

fetchEmployees();

/**
 * Die store employeeID wird auf die ausgewählte id gesetzt
 */
const handleEmployeeID = (id) => (employeeID.value = id);
</script>

<template>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-for="headline in headlines" :key="headline.label" scope="col">
          {{ headline.label }}
        </th>
      </tr>
      <tr v-if="headlines.length === 0">
        Loading...
      </tr>
    </thead>

    <tbody>
      <p v-if="loading">Loading...</p>
      <p v-if="error">
        {{ error.message }}
      </p>
      <tr
        v-for="(employee, index) in employees"
        :key="employee._id"
        @click="handleEmployeeID(employee._id)"
        role="button"
      >
        <td>{{ index + 1 }}</td>
        <td>{{ employee.firstName }}</td>
        <td>{{ employee.lastName }}</td>
        <td>{{ employee.email }}</td>
      </tr>
    </tbody>
  </table>
</template>
