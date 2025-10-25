const boxes = document.querySelectorAll(".wide-box");
const container = document.querySelector("#window3")
const monitor = document.querySelector(".monitor")
const deleteBtn = document.querySelector("#deleteBtn")
let baseHeight = 175; 
let isDown = false;
let startX;
let scrollLeft;
const BoxImage = [];

const myText = document.querySelector(".myText");

// USER ID, PASSWORD
// Uob@99---

boxes.forEach(box => {
  box.addEventListener("pointerdown", () => {
    const boxImg = getComputedStyle(box).backgroundImage;

    monitor.style.backgroundImage = boxImg;
  })  
})

deleteBtn.addEventListener("pointerdown", () => {
  monitor.style.backgroundImage = "none";
})


boxes.forEach(box => {
  box.addEventListener("mouseenter", () => {
    box.style.transform = "scale(1.3)";
    box.style.zIndex = "10"; // bring on top

    container.style.height = `${baseHeight * 1.5}px`
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "scale(1)";
    box.style.zIndex = "1"; // reset z-index
    container.style.height = `${baseHeight + 50}px`
  });
});

container.addEventListener("pointerdown", (e) => {
  isDown = true
  container.style.cursor = "grabbing";
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft
})

container.addEventListener("pointermove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft
  const walk = (x - startX) * 1;
  container.scrollLeft = scrollLeft - walk;
})

container.addEventListener("pointerup", () => {
  isDown = false
  container.style.cursor = "grab";
})

container.addEventListener("pointeLeave", () => {
  isDown = false
  container.style.cursor = "grab";
})



// container.addEventListener("pointerdown", (e) => {
//   isDown = true;
//   container.style.cursor = "grabbing"; // optional
//   startX = e.pageX - container.offsetLeft;
//   scrollLeft = container.scrollLeft;
// });

// container.addEventListener("pointermove", (e) => {
//   if (!isDown) return; // only move if dragging
//   e.preventDefault();
//   const x = e.pageX - container.offsetLeft;
//   const walk = (x - startX) * 1; // scroll speed
//   container.scrollLeft = scrollLeft - walk;
// });

// container.addEventListener("pointerup", () => {
//   isDown = false;
//   container.style.cursor = "grab"; // reset cursor
// });

// container.addEventListener("pointerleave", () => {
//   isDown = false;
//   container.style.cursor = "grab";
// });