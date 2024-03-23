<script setup lang="ts">
import AddNote from "@/components/AddNote.vue";
import EditNote from "@/components/EditNote.vue";
import type { INote } from "@/interfaces/notes";
import { useStore } from "@/stores";
import { storeToRefs } from "pinia";

const store = useStore();

const selectedNote: INote = {
  _id: "",
  title: "",
  content: "",
};

const { displayAddModal, displayEditModal, notes, isLoaded } =
  storeToRefs(store);

const deleteNote = (id: string, title: string) => {
  const confirmDelete = window.confirm(
    `delete note with title: ${title}, are you sure?`
  );
  if (!confirmDelete) return;

  store.deleteNote(id);
};

const openAddModal = () => {
  displayAddModal.value = true;
};

const openEditModal = (note: INote) => {
  selectedNote._id = note._id;
  selectedNote.title = note.title;
  selectedNote.content = note.content;
  displayEditModal.value = true;
};
</script>

<template>
  <main :on-load="isLoaded ? null : store.fetchNotes()">
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
        <col span="1" style="width: 50%" />
        <col span="1" style="width: 20%" />
        <col span="1" style="width: 10%" />
      </colgroup>
      <tr class="table-header">
        <th>Title</th>
        <th>Content</th>
        <th>Last Updated</th>
        <th></th>
      </tr>
      <tr v-for="note in notes" :key="note._id">
        <th>{{ note.title }}</th>
        <th>{{ note.content }}</th>
        <th>{{ note.updatedAt }}</th>
        <th class="edit-delete" v-if="note">
          <a href="#" @click="openEditModal(note)">
            <img src="../assets/images/edit.png" style="width: 22px"
          /></a>
          <a href="#" @click="deleteNote(note._id, note.title)">
            <img src="../assets/images/delete.png" style="width: 22px"
          /></a>
        </th>
      </tr>
    </table>
  </main>

  <!-- open add note -->
  <AddNote v-if="displayAddModal"></AddNote>
  <!-- open edit note -->
  <EditNote
    v-if="displayEditModal"
    :_id="selectedNote._id"
    :title="selectedNote.title"
    :content="selectedNote.content"
  ></EditNote>
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

.edit-delete {
  display: flex;
  justify-content: space-around;
}

th {
  text-align: center;
}
/* New Note and Updated Note Animation */

@keyframes new-row {
  0% {
    background-color: #ffd700;
  }
}
</style>
