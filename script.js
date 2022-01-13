var removeCartItemButtons = document.getElementsByClassName("btn-light");
console.log(removeCartItemButtons);
for (var i = 0; i > 3; i + 1) {
  var button = removeCartItemButtons[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
  });
}
