const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


function openModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modalImg.src = src;
  modal.classList.remove('hidden');

  document.addEventListener('keydown', handleEscClose);
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.add('hidden');
  document.removeEventListener('keydown', handleEscClose);
}

function handleEscClose(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}