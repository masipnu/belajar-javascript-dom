// // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// const container = document.querySelector('#container');
// const baseImgURL =
// 	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// for (let i = 1; i <= 500; i++) {
// 	const pokeBall = document.createElement('div');
// 	pokeBall.classList.add('pokemon');

// 	const imgPokemon = document.createElement('img');
// 	imgPokemon.src = `${baseImgURL}${i}.png`;

// 	const label = document.createElement('span');
// 	label.innerText = `#${i}`;

// 	pokeBall.appendChild(imgPokemon);
// 	pokeBall.appendChild(label);
// 	container.appendChild(pokeBall);
// }

/**
 * By me : @masipnu | masipnu1@gmail.com
 */
const container = document.querySelector("#container");
const baseImgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (i = 1; i < 500; i++) {
  //   container.append(i);
  const pokeBall = document.createElement("div");
  const imgPokemon = document.createElement("img");
  imgPokemon.src = `${baseImgUrl}${i}.png`;

  const label = document.createElement("label");
  label.innerText = `#${i}`;

  pokeBall.classList.add("pokemon");
  pokeBall.appendChild(imgPokemon);
  pokeBall.appendChild(label);
  container.appendChild(pokeBall);
}
