const container = document.querySelector("#w3-sec2")
const boxes = document.querySelectorAll(".box")
let baseHeight = 350;
let isDown = false;
let startX;
let scrollLeft;

boxes.forEach(box => {
  box.addEventListener("pointerenter", () => {
    box.style.transform = "scale(1.5)";
    box.style.zIndex = "10"; // bring on top

  });

  box.addEventListener("pointerleave", () => {
    box.style.transform = "scale(1)";
    box.style.zIndex = "1"; // reset z-index

  });
});

container.addEventListener("pointerdown", (e) => {
    isDown = true;
    container.setPointerCapture(e.pointerId);
    container.style.cursor = "grabbing";
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft
})

container.addEventListener("pointermove", (e) => {
    if (!isDown) return;
    e.preventDefault()
    const x = e.pageX - container.offsetLeft
    const walk = (x - startX) * 1;
    container.scrollLeft = scrollLeft - walk;
})

container.addEventListener("pointerup", (e) => {
    isDown = false
        container.releasePointerCapture(e.pointerId);
    container.style.cursor = "grab"
})

container.addEventListener("pointerleave", (e) => {
    isDown = false;
    container.style.cursor = "grab"
})