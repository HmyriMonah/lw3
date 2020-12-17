window.onload = function () {
  var listingElements = ["apple", "orange"];
  var storeElements = [];
  updateUI();
  // логика JS, не связана с DOM
  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }
  function addToListingElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }
  // updateUI берет данные из массивов и занимается вставкой
  function updateUI() {
    var storeSelect = document.querySelector(".store-select");
    var listingSelect = document.querySelector(".listing-select");
    storeSelect.innerHTML = "";
    listingSelect.innerHTML = "";
    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement("option");
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }
    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement("option");
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }
  function sort() {
    if (listingElements[0] > listingElements[1]) {
      listingElements = listingElements.sort();
      storeElements = storeElements.sort();
    } else {
      listingElements = listingElements.sort();
      storeElements = storeElements.sort();
      listingElements = listingElements.reverse();
      storeElements = storeElements.reverse();
    }
  }
  function remove(element, array) {
    var elementPosition = array.indexOf(element);
    if (elementPosition !== -1) {
      var list = array.splice(elementPosition, 1);
      return list;
    }
  }
  function rename(oldName, array, newName) {
    var elementPosition = array.indexOf(oldName);
    if (elementPosition !== -1) {
      var list = array.splice(elementPosition, 1, newName);
      return list;
    }
  }
  // регистрируем события
  var addButton = document.querySelector("#add-button");
  var addToListingButton = document.querySelector("#add-listing-button");
  var deleteButton = document.querySelector("#delete-button");
  var newElementButton = document.querySelector("#new-element-button");
  var sortButton = document.querySelector("#sort-button");
  var renameButton = document.querySelector("#rename-button");
  addButton.onclick = function () {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    addToStoreElements(selectedOption.innerText);
    updateUI();
  };
  addToListingButton.onclick = function () {
    var selectedOption = document.querySelector(".store-select option:checked");
    addToListingElements(selectedOption.innerText);
    updateUI();
  };
  deleteButton.onclick = function () {
    if (document.querySelector(".store-select option:checked") !== null) {
      var selectedOption = document.querySelector(
        ".store-select option:checked"
      );
      remove(selectedOption.innerText, storeElements);
    } else {
      var selectedOption = document.querySelector(
        ".listing-select option:checked"
      );
      remove(selectedOption.innerText, listingElements);
    }
    updateUI();
  };
  newElementButton.onclick = function () {
    var newElement = prompt("Enter element");
    listingElements.push(newElement);
    updateUI();
  };
  sortButton.onclick = function () {
    sort();
    updateUI();
  };
  renameButton.onclick = function () {
    let newName = prompt("Enter new name");
    if (document.querySelector(".store-select option:checked") !== null) {
      var selectedOption = document.querySelector(
        ".store-select option:checked"
      );
      rename(selectedOption.innerText, storeElements, newName);
    } else {
      var selectedOption = document.querySelector(
        ".listing-select option:checked"
      );
      rename(selectedOption.innerText, listingElements, newName);
    }
    updateUI();
  };
};