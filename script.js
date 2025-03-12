document.addEventListener("DOMContentLoaded", function () {
    loadNotes();
});

// Fetch a new positive quote
function fetchQuote() {
    const quotes = [
        "Believe you can and you're halfway there.",
        "Happiness is not something ready-made. It comes from your own actions.",
        "Every day may not be good, but there's something good in every day.",
        "You are stronger than you think."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

// Chatbot functionality
function sendMessage() {
    let userMessage = document.getElementById("userInput").value;
    if (!userMessage) return;
    let chatbox = document.getElementById("chatbox");
    let userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.innerText = "You: " + userMessage;
    chatbox.appendChild(userDiv);
    document.getElementById("userInput").value = "";

    setTimeout(() => {
        let botDiv = document.createElement("div");
        botDiv.className = "bot-message";
        botDiv.innerText = "Bot: " + getBotResponse(userMessage);
        chatbox.appendChild(botDiv);
    }, 1000);
}

function getBotResponse(input) {
    const responses = [
        "I'm here for you. What's on your mind?",
        "It's okay to feel this way. Tell me more.",
        "You're not alone in this. How can I help?",
        "Deep breaths. You're doing great."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Save and load notes
function saveNote() {
    let noteText = document.getElementById("noteArea").value;
    localStorage.setItem("savedNote", noteText);
    alert("Note saved successfully!");
}

function loadNotes() {
    let savedNote = localStorage.getItem("savedNote");
    if (savedNote) {
        document.getElementById("noteArea").value = savedNote;
    }
}
