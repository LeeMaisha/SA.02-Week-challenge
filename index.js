//Dom application of elemnts 
const inputbox = document.getElementById('.inputbox');
const listcontainer = document.getElementById('.listcontainer');
const guestlist = document.getElementById('.guestlist');
const guestname = document.getElementById('.guestname');
const guestconst = document.getElementById('.guestconst');
const maxguest = 10;

 // Function to create a new guest list item
    const createGuestListItem = (name, isAttending = true) => {
        const listItem = document.createElement('li');
        listItem.dataset.name = name; // Store name for easy access (e.g., for editing later)

        const guestNameSpan = document.createElement('span');
        guestNameSpan.classList.add('guest-name');
        guestNameSpan.textContent = name;
        listItem.appendChild(guestNameSpan);

        const guestStatusSpan = document.createElement('span');
        guestStatusSpan.classList.add('guest-status');
        if (isAttending) {
            guestStatusSpan.classList.add('attending');
            guestStatusSpan.textContent = '(Attending)';
        } else {
            guestStatusSpan.classList.add('not-attending');
            guestStatusSpan.textContent = '(Not Attending)';
        }
        listItem.appendChild(guestStatusSpan);

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('guest-actions')
    }
  // Handle form submission
    guestForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Suppress default form submission behavior (page refresh)

        const guestName = guestNameInput.value.trim();

        if (guestName) {
            if (guestCount >= MAX_GUESTS) {
                alert(`The guest list is full! Maximum ${MAX_GUESTS} guests allowed.`);
                guestNameInput.value = ''; // Clear input field
                return;
            }

            const newGuestItem = createGuestListItem(guestName);
            guestList.appendChild(newGuestItem);
            guestNameInput.value = ''; // Clear input field
            updateGuestCount();
        } else {
            alert('Please enter a guest name.');
        }
    });
// geusts names not execeeding the maximum limit of 10
console.log('Guest list initialized. Maximum guests allowed:', maxguest);
console.log('stacie mucuiya' , 'elssie' , 'jennifer' , 'john' , 'mary' , 'peter' , 'samuel' , 'grace' , 'michael' , 'emily' );
document.addEventListener('DOMContentLoaded', (event) => {
  // Now, guestForm can be defined and used here safely
  const guestForm = document.getElementById('yourFormId'); // Replace 'yourFormId' with the actual ID of your form

  if (guestForm) {
    guestForm.addEventListener('submit', (event) => {
      // Your event handler logic
    });
  } else {
    console.error('Guest form not found');
  }
});
// index.js

function AddTask() {
    // Your code to add a task goes here
    console.log("AddTask function called!");
    // ... rest of your function logic
}
