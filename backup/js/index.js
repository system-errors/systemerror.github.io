document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const source = params.get("campaign");

    const sourceMessages = {
        "gold_teeth_one": "Gold weighs them down and so does their guilt. Do we really need to chase wealth?",
        "logoff": "The screen in our hands keeps us unaware. What if fresh air became a premium subscription?",
        "election": "A billionaire's algorithm is affecting our election right now. Have you forgotten how to choose? How to think?",
    };

    const messageElement = document.getElementById("message");

    if (source && sourceMessages.hasOwnProperty(source)) {
        messageElement.textContent = sourceMessages[source];
    }
});
