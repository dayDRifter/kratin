// Get references to the form elements
const medForm = document.querySelector("#med-reminder form");
const medNameInput = document.querySelector("#med-name");
const medTimeInput = document.querySelector("#med-time");
const medList = document.querySelector("#med-list");

const checkForm = document.querySelector("#health-check form");
const bpInput = document.querySelector("#bp");
const sugarInput = document.querySelector("#sugar");
const checkTimeInput = document.querySelector("#check-time");
const checkList = document.querySelector("#check-list");

// Set up event listeners for the forms
medForm.addEventListener("submit", addMedReminder);
checkForm.addEventListener("submit", addCheckReminder);

// Function to add a medication reminder
function addMedReminder(event) {
  event.preventDefault();

  // Create a new list item for the reminder
  const listItem = document.createElement("li");

  // Create a span for the medication name
  const medNameSpan = document.createElement("span");
  medNameSpan.textContent = medNameInput.value;
  listItem.appendChild(medNameSpan);

  // Create a span for the reminder time
  const medTimeSpan = document.createElement("span");
  medTimeSpan.textContent = medTimeInput.value;
  listItem.appendChild(medTimeSpan);

  // Create a button to remove the reminder
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.appendChild(removeButton);

  // Add the list item to the medication list
  medList.appendChild(listItem);

  // Clear the form inputs
  medNameInput.value = "";
  medTimeInput.value = "";
}

// Function to add a health check reminder
function addCheckReminder(event) {
  event.preventDefault();

  // Create a new list item for the reminder
  const listItem = document.createElement("li");

  // Create a span for the blood pressure
  const bpSpan = document.createElement("span");
  bpSpan.textContent = `BP: ${bpInput.value}`;
  listItem.appendChild(bpSpan);

  // Create a span for the blood sugar
  const sugarSpan = document.createElement("span");
  sugarSpan.textContent = `Sugar: ${sugarInput.value}`;
  listItem.appendChild(sugarSpan);

  // Create a span for the reminder time
  const checkTimeSpan = document.createElement("span");
  checkTimeSpan.textContent = checkTimeInput.value;
  listItem.appendChild(checkTimeSpan);

  // Create a button to remove the reminder
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.appendChild(removeButton);

  // Add the list item to the health check list
  checkList.appendChild(listItem);

  // Clear the form inputs
  bpInput.value = "";
  sugarInput.value = "";
  checkTimeInput.value = "";
}
