const profile = {
  name: 'João Vitor',
  photo: 'https://via.placeholder.com/120',
  bio: 'Desenvolvedor Full Stack'
};

const container = document.getElementById('profile-container');
container.innerHTML = `
  <div class="profile-card">
    <img src="${profile.photo}" alt="${profile.name}">
    <h2>${profile.name}</h2>
    <p>${profile.bio}</p>
  </div>
`;

// Update clock hands
function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  if (hourHand && minuteHand && secondHand) {
    const hourRotation = (hours * 30) + (minutes * 0.5);
    const minuteRotation = minutes * 6;
    const secondRotation = seconds * 6;

    hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
  }
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
