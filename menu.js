// Header menus: one open at a time, closed by a click elsewhere or Escape.
(function () {
  const menus = [...document.querySelectorAll(".site-header .menu")];

  for (const menu of menus) {
    menu.addEventListener("toggle", () => {
      if (menu.open) for (const m of menus) if (m !== menu) m.open = false;
    });
  }
  document.addEventListener("click", (ev) => {
    for (const m of menus) if (!m.contains(ev.target)) m.open = false;
  });
  document.addEventListener("keydown", (ev) => {
    const open = menus.find((m) => m.open);
    if (ev.key === "Escape" && open) {
      open.open = false;
      open.querySelector("summary").focus();
    }
  });
})();
