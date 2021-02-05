import sayHello from "./sayHello";

function run() {
  const sayHelloElement = document.getElementsByClassName("js_say-hello")[0];
  if (sayHelloElement) {
    sayHello(sayHelloElement);
  }
}
run();
