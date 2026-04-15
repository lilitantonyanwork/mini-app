window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const app = document.getElementById("app");

    setTimeout(() => {
        loader.style.display = "none";
        app.style.display = "flex";
    }, 1000); // можно убрать задержку или оставить для плавности
});

const navItems = document.querySelectorAll(".nav__item");
const pages = document.querySelectorAll(".page");

navItems.forEach(btn => {
    btn.addEventListener("click", () => {
        const pageId = btn.dataset.page;

        // убираем active у всех кнопок
        navItems.forEach(b => b.classList.remove("nav__item--active"));
        btn.classList.add("nav__item--active");

        // скрываем все блоки
        pages.forEach(p => p.classList.remove("active"));

        // показываем нужный
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add("active");
        }
    });
});
const invTabItems = document.querySelectorAll(" .tab__item");
const invTabs = document.querySelectorAll(".tab__content");

invTabItems.forEach(btn => {
    btn.addEventListener("click", () => {
        const pageId = btn.dataset.id;

        // убираем active у всех кнопок
        invTabItems.forEach(b => b.classList.remove("tab__item--active"));
        btn.classList.add("tab__item--active");

        // скрываем все блоки
        invTabs.forEach(p => p.classList.remove("active"));

        // показываем нужный
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add("active");
        }
    });
});