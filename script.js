let ticketId = document.getElementById("ticketId");
let ticketText = document.getElementById("ticketText");
let output = document.getElementById("output");
let copyButton = document.getElementById("copyButton");
copyButton.style.display = 'none';


let generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", () => {
    let id = ticketId.value.trim();
    let text = ticketText.value.trim();

    let formattedText = `[${id}]: ${text}`;

    output.textContent = formattedText;
    copyButton.style.display = 'block';

})


copyButton.addEventListener("click", () => {
    let formattedText = output.textContent;
    navigator.clipboard.writeText(formattedText);
    alert("Copiado rey");
})