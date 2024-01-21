class Component {
  #element = null;
  #user = "naag";
  #password = "1234";
  innerText = "";
  constructor(tag, parent, options) {
    this.tag = tag;
    this.parent = parent;
    this.options = options;
    this.build();
  }
  getElement() {
    return this.#element;
  }

  build() {
    this.#element = document.createElement(this.tag);
    Object.assign(this.#element, this.options);
    return this;
  }
  render() {
    if (this.parent instanceof Component) {
      this.parent.getElement().append(this.#element);
    } else {
      document.querySelector(this.parent).append(this.#element);
    } 
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
