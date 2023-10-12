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
const handleEmployeeID = (id) => employeeID.value = id;
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
      >
        <td role="button">{{ index + 1 }}</td>
        <td role="button">{{ employee.firstName }}</td>
        <td role="button">{{ employee.lastName }}</td>
        <td role="button">{{ employee.email }}</td>
      </tr>
    </tbody>
  </table>
</template>
