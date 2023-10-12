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
          id="email"
          type="email"
          v-model="employee.email"
        />
      </div>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="textarea"
          rows="3"
          maxlength="500"
          v-model="employee.description"
        ></textarea>
      </div>
    </fieldset>
  </form>
</template>

<style>
/**

import TextareaField from '../components/TextareaField.vue';



// const data = ref({
//   id: null
// });
// const description = ref("");


 Lädt einen User anhand der id vom emitter
 und aktualisiert die Form

const fetchData = () => {
  // emitter.on('currentID', async (id) => {
    // const response = await axios.get(`/person/${id}`);
    // fetchEmployee();
    // data.value = getEmployee();
    // console.log(data.value);
    // newFirstName.value = data.value.firstName
  // });
};


  übergibt einen Datensatz an die DB zum neu anlegen,
  wenn id = null - sonst zum updaten.

// const save = async () => {
  // await axios.post(`/person`, { data: data.value });
  // addNewEmployee({ data: data.value });
  // addNewEmployee();
  // setUpTableAndForm();
// };

  übergibt dem emitter die search params values aus der Form

// const search = async () => emitter.emit('serachData', data.value);

  Übergibt id vom User an die DB
  zum entfernen des Users aus der DB

// const deleteUser = async () => {
//   // await axios.delete(`/person/${data.value.id}`);
//   deleteEmployee(data.value.id);
//   setUpTableAndForm();
// };

  aktualisiert die Tabelle
  resetet die Form
 
// const setUpTableAndForm = () => {
//   emitter.emit('updateData');
//   resetFormFields();
// };

  setzt Form-Felder auf default
 
const resetFormFields = () =>
  (data.value = {
    id: null
  });

onMounted(() => {
  fetchData();
  resetFormFields();
  // emitter.on('resetForm', resetFormFields);

  // emitter.on('saveData', () => save());
  // emitter.on('searchData', () => search());
  // emitter.on('deleteData', () => deleteUser());
});
onUnmounted(() => {
  // emitter.off('currendID');
  // emitter.off('resetForm');
  // emitter.off('saveData');
  // emitter.off('searchData');
  // emitter.off('deleteData');
});


      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <TextareaField v-model:description="employee.description" />
      </div>
*/
</style>
