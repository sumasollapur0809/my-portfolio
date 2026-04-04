function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const toggleBtns = document.querySelectorAll("#theme-toggle");

toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        toggleBtns.forEach(b => {
            if (document.body.classList.contains("dark-mode")) {
                b.textContent = "☀️";
            } else {
                b.textContent = "🌙";
            }
        });
    });
});

// for chatbot
function toggleChat() {
  let box = document.getElementById("chatBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}
function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value.toLowerCase();
  let chatBody = document.getElementById("chatBody");
  if (message.trim() === "") return;
  // Show user message
  chatBody.innerHTML += `<div class="user">${message}</div>`;
  let reply = getBotReply(message);
  // Show bot reply
  setTimeout(() => {
    chatBody.innerHTML += `<div class="bot">${reply}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
  input.value = "";
}
function getBotReply(msg) {
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello 😊! How can I help you?";
  }
  if (msg.includes("name") || msg.includes("who are you")) {
    return "I am a chatbot 🤖 created to assist you with information about me and my work.";
  }
  if (msg.includes("contact") || msg.includes("email")) {
    return "connect with us at : sumasollapur0908@gmail.com";
  }
  if (msg.includes("contact") || msg.includes("number")) {
    return "contact us at : +91 9960795912";
  }
  if (msg.includes("project")) {
    return "You can check my projects in the Projects section of this website.";
  }
  if (msg.includes("thank you") || msg.includes("thanks")) {
    return "You're welcome! If you have any more questions, feel free to ask.";
  }
  return "Sorry, I didn’t understand. Ask about contact, projects, or services.";
}
document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    sendMessage(); 
  }
});