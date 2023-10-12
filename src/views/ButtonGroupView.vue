<script setup>
import ButtonView from '../components/ButtonView.vue';
import { useEmployeeStore } from '../stores/useEmployeeStore';

const { addNewEmployee, deleteEmployee, resetEmployeeForm } = useEmployeeStore();

const searchData = () => console.log('search');
</script>

<template>
  <ButtonView @click="addNewEmployee()" class="btn-primary"> Speichern </ButtonView>
  <ButtonView @click="searchData" class="btn-success"> Suchen </ButtonView>
  <ButtonView @click="deleteEmployee()" class="btn-danger"> Löschen </ButtonView>
  <ButtonView @click="resetEmployeeForm()" class="btn-info"> Reset Form </ButtonView>
</template>

<style></style>
