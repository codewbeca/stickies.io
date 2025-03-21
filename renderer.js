// toggle 
document.getElementById('toggle-button').addEventListener('click', () => {
  const note = document.getElementById('note');
  note.style.display = (note.style.display === 'none') ? 'block' : 'none';
});

// close button
document.getElementById('close-button').addEventListener('click', () => {
  window.electronAPI.closeApp();
});

// auto save 
const note = document.getElementById('note');
note.addEventListener('input', () => {
  localStorage.setItem('stickyNote', note.value);
});

document.addEventListener('DOMContentLoaded', () => {
  note.value = localStorage.getItem('stickyNote') || '';
});
