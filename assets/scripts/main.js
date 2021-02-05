import sayHello from "./sayHello";
import moment from "moment";

function run() {
  const sayHelloElement = document.getElementsByClassName("js_say-hello")[0];
  console.log(sayHelloElement);
  if (sayHelloElement) {
    sayHello(sayHelloElement);
  }
  const datePicker = document.getElementsByClassName("js_date-picker")[0];
  if (datePicker) {
    datePicker.innerHTML = moment();
  }
}
run();
