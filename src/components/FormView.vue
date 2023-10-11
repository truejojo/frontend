<script setup>
import axios from "axios";
import { ref, onMounted, inject, onUnmounted } from "vue";
import InputTextField from "../assets/InputTextField.vue";
import TextareaField from "../assets/TextareaField.vue";

const data = ref({
  id: null,
});
const description = ref("");
const emitter = inject("emitter");

/**
 * Lädt einen User anhand der id vom emitter
 * und aktualisiert die Form
 */
const fetchData = async () => {
  try {
    emitter.on("currentID", async (id) => {
      const response = await axios.get(`/person/${id}`);
      data.value = response.data;
    });
  } catch (err) {
    console.warn(err);
  }
};

/**
 * übergibt einen Datensatz an die DB zum neu anlegen,
 * wenn id = null - sonst zum updaten.
 */
const save = async () => {
  await axios.post(`/person`, { data: data.value });
  setUpTableAndForm();
};

/**
 * übergibt dem emitter die search params values aus der Form
 */
const search = async () => emitter.emit("serachData", data.value);

/**
 * Übergibt id vom User an die DB
 * zum entfernen des Users aus der DB
 */
const deleteUser = async () => {
  await axios.delete(`/person/${data.value.id}`);
  setUpTableAndForm();
};

/**
 * aktualisiert die Tabelle
 * resetet die Form
 */
const setUpTableAndForm = () => {
  emitter.emit("updateData");
  resetFormFields();
};

/**
 * setzt Form-Felder auf default
 */
const resetFormFields = () =>
  (data.value = {
    id: null,
  });

onMounted(() => {
  fetchData();
  resetFormFields();
  emitter.on("resetForm", resetFormFields);

  emitter.on("saveData", () => save());
  emitter.on("searchData", () => search());
  emitter.on("deleteData", () => deleteUser());
});
onUnmounted(() => {
  emitter.off("currendID");
  emitter.off("resetForm");
  emitter.off("saveData");
  emitter.off("searchData");
  emitter.off("deleteData");
});
</script>

<template>
  <form class="px-0">
    <fieldset>
      <div class="mb-3">
        <InputTextField v-model:field="data.first" type="text" label="Name" />
      </div>
      <div class="mb-3">
        <InputTextField
          v-model:field="data.last"
          type="text"
          label="Nachname"
        />
      </div>

      <div class="mb-3">
        <InputTextField
          v-model:field="data.handle"
          type="email"
          label="Email"
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Example textarea</label
        >
        <TextareaField v-model:description="data.description" />
      </div>
    </fieldset>
  </form>
</template>

<style></style>
