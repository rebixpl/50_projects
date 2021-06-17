const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("") // split letters to array
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 30}ms">${letter}</span>`
    )
    .join(""); // create a string from letters
});
