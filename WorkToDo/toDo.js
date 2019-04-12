let input = document.getElementById('userInput')
let enter = document.getElementById('enter')
let myForm = document.getElementById('inputItem')
let ul = document.querySelector('ul')

myForm.addEventListener("submit", addItemsAfterKeyPress)
enter.addEventListener("click", addItemsAfterClick)

function addItemsAfterKeyPress(event) {
  event.preventDefault()
  if (input.value.length > 0) {
    addItemsToLi()
  }
}

function addItemsAfterClick() {
  if (input.value.length > 0) {
    addItemsToLi()
  }
}

function addItemsToLi() {
  let li = document.createElement("li") //Creates an li element
  li.appendChild(document.createTextNode(input.value))
  ul.appendChild(li)
  input.value = ""

  //Strikeout checked items from the list
  li.addEventListener("click", crossOut)

  function crossOut() {
    li.classList.toggle("done")
  }

  //Add 'X' in the list to delete items
  let xBtn = document.createElement("button")
  xBtn.appendChild(document.createTextNode("X"))
  li.appendChild(xBtn)

  //Delete item when click on 'X'
  xBtn.addEventListener("click", () => {
    li.classList.add("delete")
  })
}
