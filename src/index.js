document.addEventListener("DOMContentLoaded", () => {
  console.log("hi it's me")
  const form = document.querySelector("#create-task-form")
  console.log(form[0])
  form.insertBefore(createSelect(), form[1])
  form.addEventListener("submit", handleSubmit)
  const theList = document.querySelector("#list")
  const sortButton = document.createElement("button")
  sortButton.innerText = "sort THIS bad boy"
  sortButton.addEventListener("click", sortList)
  theList.appendChild(sortButton)
});

function handleSubmit(e) {
  e.preventDefault(); 
  const listEl = document.createElement("li")
  listEl.innerText = e.target[0].value
  listEl.appendChild(createDelete())
  const priorityInput = e.target[1].selectedIndex
  listEl.dataset.priority = priorityInput
  document.querySelector("#tasks").appendChild(listEl)
  e.currentTarget[0].value = "" 
  // console.log(e.target[1].selectedIndex)
  if (priorityInput === 0) {
    listEl.style.backgroundColor = "red";
  } else if (priorityInput === 1) {
    listEl.style.backgroundColor = "yellow";
  } else if (priorityInput === 2) {
    listEl.style.backgroundColor = "green";
  }
};

function createDelete() {
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "x"
  deleteButton.addEventListener("click", handleDelete)
  return deleteButton
}

function handleDelete(e) {
  e.target.parentNode.remove()
}

function createSelect() {
  const select = document.createElement("select")
  const options = ["high priority", "meh priority", "bro priority"]
  options.map((opt)=>{
      option = document.createElement("option")
      option.innerText = opt
      return option
  }).forEach((opt)=>{
    select.appendChild(opt)
  })
  return select
}

// function sortList() {
//   const allTasks = document.querySelectorAll("li")
//   const array = Array.from(allTasks)
//   console.log(array)
//   const arrayAgain = array.sort()
//   console.log(arrayAgain) 
// }





