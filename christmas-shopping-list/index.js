const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")


for (let i=0; i<items.length; i++) {
    checklist.innerHTML += `
         <div class="checklist-item">
                <input type="checkbox" id="${items[i]}" value="${items[i]}">
                <label for="${items[i]}" class="strikethrough">${items[i]}</label>
            </div>
    `
}

document.getElementById("add-button").addEventListener("click", function() {
    const text = document.getElementById("new-item").value;
    checklist.innerHTML += `<div class="checklist-item">
                                <input type="checkbox" id="${text}" value="${text}">
                                <label for="${text}" class="strikethrough">${text}</label>
                            </div>
                        `
});


