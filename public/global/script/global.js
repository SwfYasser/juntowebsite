const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.querySelector(".sidebar");

// window.addEventListener("load", () => {
//     if (window.innerWidth > "600px") {
//         const nav = document.querySelector(".navBar");
//         const navHeight = getComputedStyle(nav).height;
//         document.body.style.paddingTop = navHeight;
//     }
// });

toggleBtn.onclick = function() {
    if(sidebar.style.display === "flex") {
        sidebar.style.display = "none";
        document.body.classList.remove("no-scroll");
    } else {
        sidebar.style.display = "flex";
        document.body.classList.add("no-scroll");
    }
};

function adjustPadding() {
    const nav = document.querySelector(".navBar")
    const navHeight = getComputedStyle(nav).height;
    document.body.style.paddingTop = navHeight;

}

window.addEventListener("load", adjustPadding)
window.addEventListener("resize", adjustPadding)