onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HAPPY ANNYVERSARY').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);

  // Putar musik setelah klik
  const music = document.getElementById("backgroundMusic");
  document.body.addEventListener("click", () => {
    if (music.paused) {
      music.volume = 0.5; // Atur volume
      music.play();
    }
  });
};
