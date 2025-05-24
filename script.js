let typingInterval = null;

function goToPage2() {
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");

  page1.classList.add("hidden");
  page1.classList.remove("active");

  page2.classList.remove("hidden");
  page2.classList.add("active");

  startTypingEffect();
}

function goBack() {
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");

  clearTypingEffect();

  page2.classList.remove("active");
  page2.classList.add("hidden");

  page1.classList.remove("hidden");
  page1.classList.add("active");

  document.getElementById("after-typing").classList.add("opacity-0");
  document.getElementById("typing-text").innerHTML = "";
}

function startTypingEffect() {
  const text = "KOA LOVE TONKHAOW ";
  const target = document.getElementById("typing-text");
  const afterText = document.getElementById("after-typing");

  target.innerHTML = "";
  afterText.classList.add("opacity-0");

  let i = 0;

  typingInterval = setInterval(() => {
    if (i < text.length) {
      const span = document.createElement("span");
      span.textContent = text[i];
      span.classList.add("typing-char");
      target.appendChild(span);
      i++;
    } else {
      clearInterval(typingInterval);
      afterText.classList.remove("opacity-0");
    }
  }, 150);
}

function clearTypingEffect() {
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }
}
