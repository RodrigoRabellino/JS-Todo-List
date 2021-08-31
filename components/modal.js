import Alert from "./alert.js";

class Modal {
  constructor() {
    this.title = document.getElementById("modal-title");
    this.description = document.getElementById("modal-description");
    this.btn = document.getElementById("modal-btn");
    this.completed = document.getElementById("modal-completed");
    this.todo = null;

    this.alert = new Alert("modal-alert");
  }

  onclick(callback) {
    this.btn.onclick = () => {
      if (!this.title.value || !this.description.value) {
        this.alert.show("todos los campos son requeridos");
        return;
      }

      $("#modal").modal("toggle");
      callback(this.todo.id, {
        title: this.title.value,
        description: this.description.value,
        completed: this.completed.checked,
      });
    };
  }

  setValues(todo) {
    this.todo = todo;
    this.title.value = todo.title;
    this.description.value = todo.description;
    this.completed.checked = todo.completed;
  }
}

export default Modal;
