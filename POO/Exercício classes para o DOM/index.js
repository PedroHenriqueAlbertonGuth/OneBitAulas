import Component from "./Component.js";
import { Input, Label, Form } from "./Component.js";

const span = new Component("span");
const input = new Input();
const label = new Label("Abcdefg");
const form = new Form("12");

console.log(span.getElement("naag", "1234"));

console.log(span.newElement);
span.render("components");
span.build();
span.render("components");
input.render("inputs");
label.render("labels");
form.render("form");
form.appendChild(span.newElement);
form.appendChild(input.newElement);
form.appendChild(label.newElement);
