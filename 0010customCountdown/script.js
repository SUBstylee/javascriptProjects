const inputContainer = document.getElementById('input-container');
const coundownForm = document.getElementById('coundown-form');
const dateEl = document.getElementById('date-picker');

const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);
