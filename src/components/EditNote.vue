
<template>
  <!-- Edit Note Modal -->
  <div id="editNoteModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <span id="closeEdit" class="close">&times;</span>
        <h2>Edit Note</h2>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="left">
            <p>Title</p>
          </div>
          <div class="right">
            <input id="editTitle" type="text" class="modal-input" />
          </div>
        </div>
        <div class="row">
          <div class="left">
            <p>Content</p>
          </div>
          <div class="right">
            <textarea id="editContent"></textarea>
          </div>
        </div>
        <p id="editError" class="error"></p>
      </div>
      <div class="modal-footer">
        <button
          id="saveEditNoteBtn"
          onclick="saveEditNote()"
          type="button"
          class="action-button"
        >
          Save
        </button>
        <button id="cancelEditNoteBtn" type="button" class="action-button">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
