<script setup>
import axios from "axios";
import { ref, onMounted, inject, onUnmounted } from "vue";

//defineProps... router /person oder /fahrzeuge

const headlines = [
  {
    name: "id",
    label: "Id",
  },
  {
    name: "first",
    label: "Vorname",
  },
  {
    name: "last",
    label: "Nachname",
  },
  {
    name: "handle",
    label: "Email",
  },
];
const items = ref([]);
const emitter = inject("emitter");

/**
 * @param {*} paramsData
 * Lädt Users aus der DB, wenn kein Argument übergeben wird
 * sonst lädt gefilterte Users aus DB
 * presentiert/aktualisiert die Tabelle
 */
const fetchData = async (paramsData = {}) => {
  const para_data = Object.keys(paramsData)
    .map(function (key) {
      return "data[" + key + "]=" + paramsData[key];
    })
    .join("&");
  try {
    const response = await axios.get(`/person/?${para_data}`);
    items.value = response.data;
  } catch (err) {
    console.warn(err);
  }
};

/**
 * @param {*} id
 * Übergibt dem emitter die ausgewählte id
 */
const handleSubmitID = (id) => emitter.emit("currentID", id);

onMounted(() => {
  fetchData();
  emitter.on("updateData", fetchData);
  emitter.on("serachData", async (paramsData) => {
    fetchData(paramsData);
  });
});
onUnmounted(() => {
  emitter.off("updateData");
  emitter.off("serachData");
});
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
      <tr v-for="item in items" :key="item.id" @click="handleSubmitID(item.id)">
        <td v-for="field in item" :key="field" role="button">{{ field }}</td>
      </tr>
      <tr v-if="items.length === 0">
        Loading...
      </tr>
    </tbody>
  </table>
</template>

<style></style>
