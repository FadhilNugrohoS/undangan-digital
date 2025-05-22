function openInvitation() {
  const opening = document.getElementById("opening");
  const music = document.getElementById("bg-music");

  music.play(); // start the background music

  opening.classList.add("fade-out"); // fade out the opening section

  setTimeout(() => {
    opening.style.display = "none"; // hide the opening section
    showSection("#home"); // show the home section
  }, 500);
}

const sections = document.querySelectorAll("section");

function showSection(id) {
  sections.forEach((sec) => {
    sec.classList.remove("active");
  });
  const activeSection = document.querySelector(id);
  if (activeSection) {
    activeSection.classList.add("active");
  }
}

// Countdown script
function startCountdown(targetDate) {
  const timerEl = document.getElementById("timer");

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      timerEl.innerHTML =
        "<div class='time-box'>Hari Bahagia Telah Tiba!</div>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerEl.innerHTML = `
        <div class="time-box">
          <div class="time-value">${days}</div>
          <div class="time-label">Hari</div>
        </div>
        <div class="time-box">
          <div class="time-value">${hours}</div>
          <div class="time-label">Jam</div>
        </div>
        <div class="time-box">
          <div class="time-value">${minutes}</div>
          <div class="time-label">Menit</div>
        </div>
        <div class="time-box">
          <div class="time-value">${seconds}</div>
          <div class="time-label">Detik</div>
        </div>
      `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Ganti dengan tanggal pernikahanmu
startCountdown(new Date("2025-08-01T09:00:00"));
