<script setup lang="ts">
import AddTodo from "@/components/AddNote.vue";
import { useStore } from "@/stores";
import { storeToRefs } from "pinia";


const store = useStore();

const { displayAdd } = storeToRefs(store);

const openAddModal = () => {
  displayAdd.value = true;
};


</script>

<template>
  <main>
    <!-- Search bar -->
    <div>
      <button
        id="addBtn"
        class="action-button"
        @click="openAddModal()"
        type="button"
      >
        Add
      </button>
      <input
        id="searchInput"
        type="text"
        class="search-input"
        placeholder="Search for note by title ..."
      />
      <button
        id="searchBtn"
        onclick="searchNotes()"
        type="button"
        class="action-button"
      >
        Search
      </button>
    </div>

    <!-- Notes table -->
    <table id="notes-table">
      <colgroup>
        <col span="1" style="width: 20%" />
        <col span="1" style="width: 55%" />
        <col span="1" style="width: 20%" />
        <col span="1" style="width: 5%" />
      </colgroup>
      <tr>
        <th>Title</th>
        <th>Content</th>
        <th>Last Updated</th>
        <th></th>
      </tr>
    </table>
  </main>

  <!-- open add todo -->
  <AddTodo v-if="displayAdd"></AddTodo>
</template>

<style>
/* Search Input Field */
.search-input {
  width: 50%;
  height: 32px;
  font-size: 17px;
}

/* The Notes Table */
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  font-size: 17px;
}

td,
th {
  border: 1px solid rgb(233, 233, 233);
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #cecdcd;
}

tr:hover td {
  background-color: lightblue;
}

/* New Note and Updated Note Animation */

@keyframes new-row {
  0% {
    background-color: #ffd700;
  }
}
</style>
