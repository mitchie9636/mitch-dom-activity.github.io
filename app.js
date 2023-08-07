document.addEventListener("DOMContentLoaded", function() {
  // Search an item //
  const filterInput = document.getElementById("filter");
  filterInput.addEventListener("keyup", function() {
    const filterValue = filterInput.value.toLowerCase();
    const items = itemList.getElementsByTagName("li");
    for (const item of items) {
      const itemText = item.textContent.toLowerCase();
      if (itemText.includes(filterValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
});
// end of Search an item //

 // Add an item //
    const addItemForm = document.getElementById("addForm");
    const itemList = document.getElementById("items");
    addItemForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const newItemInput = document.getElementById("item");
      const newItemValue = newItemInput.value.trim();
      if (newItemValue !== "") {
        const newItem = document.createElement("li");
        newItem.className = "list-group-item";
        newItem.textContent = newItemValue;
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm float-right delete";
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", function() {
          itemList.removeChild(newItem);
        });
        newItem.appendChild(deleteBtn);
        itemList.appendChild(newItem);
        newItemInput.value = "";
      };
    });
   // end of Add an item //

  // Remove an item //
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const listItem = button.parentNode;
        itemList.removeChild(listItem);
      });
    });

// end of Remove an item //

