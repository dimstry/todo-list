const input = document.getElementById('my_input');
const my_button = document.querySelector('.my_button');
const list = document.querySelector('.list');

// Function hapus

my_button.addEventListener("click", function() {
  const card = document.createElement('div');
  card.setAttribute('class', 'card_list');
  list.appendChild(card);
  const p = document.createElement('p');
  let hasil = document.createTextNode(input.value);
  p.appendChild(hasil);
  card.appendChild(p);
  input.value = '';
  const button = document.createElement('button');
  const textButton = document.createTextNode('hapus')
  button.setAttribut = 'type', 'button';
  button.classList.add('button');
  button.appendChild(textButton)
  card.appendChild(button);
});