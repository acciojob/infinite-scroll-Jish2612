const list = document.getElementById("infi-list");

let count = 1;

// Add initial 10 items
for (let i = 0; i < 10; i++) {
  list.innerHTML += `<li>Item ${count++}</li>`;
}

// Detect scroll to bottom
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    // Add 2 more items
    for (let i = 0; i < 2; i++) {
      list.innerHTML += `<li>Item ${count++}</li>`;
    }
  }
});