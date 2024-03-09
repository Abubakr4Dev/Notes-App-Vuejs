<script setup lang="ts">
import { useStore } from "@/stores";
import { storeToRefs } from "pinia";

const store = useStore();

const { displayAdd } = storeToRefs(store);

const closeAddModal = () => {
  displayAdd.value = false;
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
            <input id="addTitle" type="text" class="modal-input" />
          </div>
        </div>
        <div class="row">
          <div class="left">
            <p>Content</p>
          </div>
          <div class="right">
            <textarea id="addContent"></textarea>
          </div>
        </div>
        <p id="addError" class="error"></p>
      </div>
      <div class="modal-footer">
        <button
          id="saveAddNoteBtn"
          onclick="saveNewNote()"
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
