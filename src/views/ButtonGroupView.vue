<script setup>
import ButtonView from '../components/ButtonView.vue';
import { useEmployeeStore } from '../stores/useEmployeeStore';

const { addNewEmployee, searchEmployees, deleteEmployee, resetEmployeeForm, fetchEmployees } =
  useEmployeeStore();

const { checkFormInput } = defineProps({ checkFormInput: { type: Function } });

</script>

<template>
  <ButtonView @click.prevent="checkFormInput(addNewEmployee)" class="btn-primary"> Speichern </ButtonView>
  <ButtonView @click.prevent="searchEmployees()" class="btn-success"> Suchen </ButtonView>
  <ButtonView @click.prevent="deleteEmployee()" class="btn-danger"> Löschen </ButtonView>
  <ButtonView @click.prevent="resetEmployeeForm()" class="btn-outline-secondary">
    Reset Form
  </ButtonView>
  <ButtonView @click="fetchEmployees()" class="btn-outline-secondary"> Reset Table </ButtonView>
</template>
