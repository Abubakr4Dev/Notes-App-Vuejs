<script setup lang="ts">
import type { INote } from "@/interfaces/notes";
import { useStore } from "@/stores";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useStore();

const { displayAddModal } = storeToRefs(store);

const title = ref<string>();
const content = ref<string>();

function saveNewNote() {
  if (!title.value || !content.value) {
    window.confirm("Please fill out all fields");
    return;
  }
  const noteData: INote = {
    title: title.value!,
    content: content.value!,
  };

  store.addNote(noteData).then(() => {
    displayAddModal.value = false;
  });
}

const closeAddModal = () => {
  displayAddModal.value = false;
};
</script>

<template>
  <!-- Add Note Modal -->
  <div id="addNoteModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <span id="closeAdd" class="close" @click="closeAddModal()"
          >&times;</span
        >
        <h2>New Note</h2>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="left">
            <p>Title</p>
          </div>
          <div class="right">
            <input
              id="addTitle"
              type="text"
              class="modal-input"
              v-model="title"
            />
          </div>
        </div>
        <div class="row">
          <div class="left">
            <p>Content</p>
          </div>
          <div class="right">
            <textarea id="addContent" v-model="content"></textarea>
          </div>
        </div>
        <p id="addError" class="error"></p>
      </div>
      <div class="modal-footer">
        <button
          id="saveAddNoteBtn"
          @click="saveNewNote()"
          type="button"
          class="action-button"
        >
          Save
        </button>
        <button
          id="cancelAddNoteBtn"
          type="button"
          class="action-button"
          @click="closeAddModal()"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
