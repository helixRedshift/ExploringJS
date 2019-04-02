let myMail = document.getElementById("myMail")
let myForm = document.getElementById("myForm")
let myPwd = document.getElementById("myPwd")

myForm.addEventListener("submit", (evnt) => {
  evnt.preventDefault()
  if (myPwd.value == '') {
    alert("Please enter password")
  }
  if (myMail.value == '') {
    alert("Please enter email")
  }
  if (myMail.value && myPwd.value) {
    alert("Your data is saved. Thank you!")
    clearData()
  }
})

function clearData() {
  if (myMail.value || myPwd.value) {
    myMail.value = ""
    myPwd.value = ""
  }
}
