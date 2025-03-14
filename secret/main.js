document.querySelector(".gibt").addEventListener("click", () => {
  //Animate gibt fading out
  const gibt = document.querySelector(".gibt")
  gibt.classList.remove("waiting")
  gibt.classList.add("opened")

  //Animate actual present fading in
  const present = document.querySelector(".present")
  present.classList.remove("hide")
  present.classList.add("show")
})