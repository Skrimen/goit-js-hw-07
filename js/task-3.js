function updateName() {
  var nameInput = document.getElementById("name-input").value.trim();

  var outputName = nameInput === "" ? "Anonymous" : nameInput;

  document.getElementById("name-output").textContent = outputName;
}
