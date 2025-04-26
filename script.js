let streakCount = 0;

function addHabit() {
  const habitInput = document.getElementById('habit-input');
  const habitText = habitInput.value.trim();

  if (habitText === '') {
    alert('Please enter a habit!');
    return;
  }

  const habitList = document.getElementById('habit-list');
  const habitItem = document.createElement('div');
  habitItem.classList.add('habit');
  
  habitItem.innerHTML = `
    <span>${habitText}</span>
    <button onclick="toggleComplete(this)">✔</button>
  `;
  
  habitList.appendChild(habitItem);
  habitInput.value = '';
}

function toggleComplete(button) {
  const habitItem = button.closest('.habit');
  habitItem.classList.toggle('complete');

  // Update streak counter
  streakCount = document.querySelectorAll('.habit.complete').length;
  document.getElementById('streak-count').textContent = streakCount;
}

