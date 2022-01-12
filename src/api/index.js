import { API_URL, CHARACTER_URL, LIMIT, DEAD } from '../constants/api';

async function getFromAPI(tail) {
  const response = await fetch(`${API_URL}${tail}`);
  const data = await response.json();
  return data;
}

export async function getCharacterData(id) {
  const data = await getFromAPI(`${CHARACTER_URL}/${id}`);
  const characterData = data[0];
  characterData.isDead = characterData.status === DEAD;

  return characterData;
}

export async function getCharacterCount(category) {
  const data = await getFromAPI(
    `${CHARACTER_URL}?category=${category.replaceAll(' ', '+')}`
  );
  return data.length;
}

export async function getCharacterListOffset(category, offset = 0) {
  const data = await getFromAPI(
    `${CHARACTER_URL}?category=${category.replaceAll(
      ' ',
      '+'
    )}&limit=${LIMIT}&offset=${offset}`
  );

  const characterList = data.map((character) => ({
    id: character.char_id,
    name: character.name,
    image: character.img,
    isDead: character.status === DEAD,
  }));

  return characterList;
}
