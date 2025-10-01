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
