document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("guest-form");
    const guestList = document.getElementById("guest-list");
    let guestCount = 0;
    const maxGuest = 10;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const guestName = document.getElementById("guest-name").value.trim();
        if (guestName === "") return;

        if (guestCount >= maxGuest) {
            alert("Guest list is full! Maximum of 10 guests allowed.");
            return;
        }

        // Create the main list item and add the guest-entry class
        const listItem = document.createElement("li");
        listItem.classList.add("guest-entry");

        // Guest Name
        const nameSpan = document.createElement("span");
        nameSpan.textContent = guestName;

        // Category selector
        const categorySelect = document.createElement("select");
        ["Friend", "Family", "Colleague"].forEach(category => {
            const option = document.createElement("option");
            option.value = category.toLowerCase();
            option.textContent = category;
            categorySelect.appendChild(option);
        });
        categorySelect.addEventListener("change", () => {
            listItem.style.backgroundColor =
                categorySelect.value === "friend" ? "lightblue" :
                categorySelect.value === "family" ? "lightgreen" :
                categorySelect.value === "colleague" ? "lightyellow" : "";
        });

        // RSVP Toggle Button
        const rsvpButton = document.createElement("button");
        rsvpButton.textContent = "Not Attending";
        rsvpButton.addEventListener("click", () => {
            if (rsvpButton.textContent === "Not Attending") {
                rsvpButton.textContent = "Attending";
                listItem.style.textDecoration = "line-through";
            } else {
                rsvpButton.textContent = "Not Attending";
                listItem.style.textDecoration = "none";
            }
        });

        // Edit Button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            const newName = prompt("Edit Guest Name:", nameSpan.textContent);
            if (newName && newName.trim() !== "") {
                nameSpan.textContent = newName.trim();
            }
        });

        // Remove Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.addEventListener("click", () => {
            guestList.removeChild(listItem);
            guestCount--;
        });

        // Group RSVP, Edit, Remove buttons in a div for styling
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");
        buttonsDiv.appendChild(rsvpButton);
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(deleteButton);

        // Timestamp
        const timestamp = document.createElement("span");
        const timeAdded = new Date().toLocaleTimeString();
        timestamp.textContent = `Added at: ${timeAdded}`;
        timestamp.classList.add("time");

        // Append all elements to the list item
        listItem.append(nameSpan, categorySelect, buttonsDiv, timestamp);
        guestList.appendChild(listItem);
        guestCount++;
        form.reset();
    });
});