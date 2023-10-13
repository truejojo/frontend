<script setup>
import ButtonView from '../components/ButtonView.vue';
import { useEmployeeStore } from '../stores/useEmployeeStore';

const { addNewEmployee, searchEmployees, deleteEmployee, resetEmployeeForm, fetchEmployees } = useEmployeeStore();
</script>

<template>
  <ButtonView @click="addNewEmployee()" class="btn-primary"> Speichern </ButtonView>
  <ButtonView @click="searchEmployees()" class="btn-success"> Suchen </ButtonView>
  <ButtonView @click="deleteEmployee()" class="btn-danger"> Löschen </ButtonView>
  <ButtonView @click="resetEmployeeForm()" class="btn-outline-secondary"> Reset Form </ButtonView>
  <ButtonView @click="fetchEmployees()" class="btn-outline-secondary"> Reset Table </ButtonView>
</template>

