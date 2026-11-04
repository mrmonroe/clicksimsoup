const newGameEl = document.getElementById("newGame")!;
if (!newGameEl) throw new Error("New Game button not found");

newGameEl.addEventListener("click", () => {
  window.location.href = "/game/index.html";
});
