const list = document.querySelector('.list');
const addBtn = document.querySelector(".addBtn");
const clearBtn = document.querySelector('.clearBtn');
const noteInput = document.querySelector('.note');

function deleteNote(e) {
  const parent = e.target.parentNode;
  parent.remove();
}

function addStuff() {
  
  const note = noteInput.value;
  
  if(note.length === 0) return;
    
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = 'Delete note';
  btn.addEventListener("click", (e) => deleteNote(e));
  
  const li = document.createElement('li');
  li.textContent = `${note} `;
  li.appendChild(btn);
  
  list.appendChild(li);
  
  noteInput.value = "";
}

function clearNotes() {
  list.innerHTML  = ''
}

addBtn.addEventListener("click", addStuff);
clearBtn.addEventListener("click", clearNotes);

                          

