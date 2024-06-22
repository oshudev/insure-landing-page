const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const img = document.querySelector(".hamburger img");
const nav = document.querySelector(".header__menu-item--nav");

let navInitialHidden = null;
let hamburgerInitialHidden = null;

const updateNavVisibility = (isDesktop) => {
    nav.setAttribute("aria-hidden", String(!isDesktop));
    hamburger.setAttribute("aria-hidden", String(isDesktop));
    img.setAttribute(
        "src",
        `./images/icon-${isDesktop ? "close" : "hamburger"}.svg`
    );

    if (isDesktop) {
        body.classList.remove("no-scroll");
    }

    navInitialHidden = !isDesktop;
    hamburgerInitialHidden = isDesktop;
};

const handleResizeOrLoad = () => {
    const isDesktop = document.documentElement.clientWidth >= 992;
    if (
        (isDesktop && navInitialHidden !== false) ||
        (!isDesktop && navInitialHidden !== true)
    ) {
        updateNavVisibility(isDesktop);
    }
};

window.addEventListener("resize", handleResizeOrLoad);
window.addEventListener("load", handleResizeOrLoad);

hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isExpanded));
    nav.setAttribute("aria-hidden", String(isExpanded));
    img.setAttribute(
        "src",
        `./images/icon-${isExpanded ? "hamburger" : "close"}.svg`
    );

    body.classList.toggle("no-scroll");
});
