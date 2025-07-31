
const binder = document.getElementById('binder');

cards.forEach(card => {
  const owned = localStorage.getItem(card.code) === '1';
  const div = document.createElement('div');
  div.className = 'card';
  const img = document.createElement('img');
  img.src = owned ? card.img : 'https://images.digimoncard.io/images/icons/icon-digimon-card-back.jpg';
  img.onclick = () => {
    localStorage.setItem(card.code, owned ? '0' : '1');
    location.reload();
  };
  div.appendChild(img);
  binder.appendChild(div);
});
