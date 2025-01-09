class Form {
  #fields = [];

  constructor(title) {
    this.title = title;
  }

  #submit(e) {
    // Prevent page from refreshing on form submit.
    e.preventDefault();

    // Collect the values from the form fields. formData will be an array of objects
    // with key-value pairs referring to each field's name and value.
    const formData = this.#fields.map((field) => {
      return {
        [field.name]: field.value,
      };
    });

    // Find the toast element and add the "show" class to it.
    const toastElement = document.querySelector("#toast");
    toastElement.classList.add("show");

    // Set the text content of the toast element to be a JSON representation of formData.
    toastElement.textContent = formData.map((el) => JSON.stringify(el));

    // Wait 5 seconds, then remove the show class from the toast.
    setTimeout(() => {
      toastElement.classList.remove("show");
    }, 5000);

    return formData;
  }
}

class Field {
  constructor(name, type, label) {
    this._name = name;
    this.type = type;
    this.label = label;
  }

  #inputElement = document.createElement("input");

  render() {
    const newDiv = document.createElement("div").classList.add("field-container");
    const label = document.createElement("label").textContent("label"); 
    



  }


}
