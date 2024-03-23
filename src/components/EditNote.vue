<script setup lang="ts">
import type { INote } from "@/interfaces/notes";
import type { IUpdatedNote } from "@/interfaces/notes";
import { useStore } from "@/stores";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useStore();

const note = defineProps<INote>();

const { displayEditModal } = storeToRefs(store);

const updatedTitle = ref<string>(note.title);
const updatedContent = ref<string>(note.content);

const saveUpdatedNote = () => {
  if (!updatedTitle.value || !updatedContent.value) {
    window.confirm("Please fill out all fields");
    return;
  }
  const updatedNote: IUpdatedNote = {
    _id: note._id,
    title: updatedTitle.value,
    content: updatedContent.value,
  };
  store.updateNote(updatedNote).then(() => {
    closeEditModal();
  });
};

const closeEditModal = () => {
  displayEditModal.value = false;
};
</script>

<template>
  <!-- Edit Note Modal -->
  <div id="editNoteModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <span id="closeEdit" class="close" @click="closeEditModal()"
          >&times;</span
        >
        <h2>Edit Note</h2>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="left">
            <p>Title</p>
          </div>
          <div class="right">
            <input
              id="editTitle"
              type="text"
              class="modal-input"
              v-model="updatedTitle"
            />
          </div>
        </div>
        <div class="row">
          <div class="left">
            <p>Content</p>
          </div>
          <div class="right">
            <textarea id="editContent" v-model="updatedContent"></textarea>
          </div>
        </div>
        <p id="editError" class="error"></p>
      </div>
      <div class="modal-footer">
        <button
          id="saveEditNoteBtn"
          @click="saveUpdatedNote()"
          type="button"
          class="action-button"
        >
          Save
        </button>
        <button
          id="cancelEditNoteBtn"
          type="button"
          class="action-button"
          @click="closeEditModal()"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
