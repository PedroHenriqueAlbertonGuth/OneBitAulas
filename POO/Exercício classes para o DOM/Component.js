class Component {
  #element;
  #user = "naag";
  #password = "1234";
  newElement;
  innerText = "";
  constructor(element) {
    this.#element = element;
    this.build();
  }
  getElement(user, password) {
    if (this.#autenthicate(user, password)) {
      return this.#element;
    } else {
      console.log(`Usuário ou senha errados`);
    }
  }
  #autenthicate(user, password) {
    return this.#user === user && this.#password === password;
  }

  build() {
    this.newElement = document.createElement(this.#element);
    this.newElement.innerText = this.innerText;
  }
  render(elementId) {
    document.getElementById(elementId).appendChild(this.newElement);
  }
}

class Input extends Component {
  constructor() {
    super("input");
  }
}

class Label extends Component {
  constructor(innerText) {
    super("label");
    this.innerText = innerText;
    this.build();
  }
}

class Form extends Component {
  constructor(id) {
    super("form");
    this.id = id;
    this.build();
    this.newElement.id = this.id;
  }
  appendChild(child) {
    document.getElementById(this.id).appendChild(child);
  }
}

export default Component;
export { Input, Label, Form };
