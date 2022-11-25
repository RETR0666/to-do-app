const side_bar = document.getElementById("side-bar");
const content_view = document.getElementById("content-view");

let innerHeight = `${window.innerHeight}px`;
let innerWidth = `${window.innerWidth}px`;
content_view.style.width = `${window.innerWidth}px`;
side_bar.style.height = `${window.innerHeight}px`;

function add_todo() {
  console.log("Test");
}
function resize() {
  if (`${window.innerWidth}px` !== innerWidth) {
    content_view.style.width = `${window.innerWidth}px`;
  }
  else if (`${window.innerHeight}px` !== innerHeight)
  {
    side_bar.style.height = `${window.innerHeight}px`;
  }
}
setTimeout(resize, 1)
