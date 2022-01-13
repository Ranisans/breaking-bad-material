import { API_URL, CHARACTER_URL, LIMIT, DEAD } from '../constants/api';

async function getFromAPI(tail) {
  const response = await fetch(`${API_URL}${tail}`);
  const data = await response.json();
  return data;
}

async function getCharacterList(category) {
  const result = await getFromAPI(
    `${CHARACTER_URL}?category=${category.replaceAll(' ', '+')}`
  );
  return result;
}

const transformCharacterListData = (rawData) =>
  rawData.map((character) => ({
    id: character.char_id,
    name: character.name,
    image: character.img,
    isDead: character.status === DEAD,
  }));

export async function getCharacterData(id) {
  const data = await getFromAPI(`${CHARACTER_URL}/${id}`);
  const characterData = data[0];
  characterData.isDead = characterData.status === DEAD;

  return characterData;
}

export async function getCharacterCount(category) {
  const data = await getCharacterList(category);
  return data.length;
}

export async function getCharactersGalleryData(category) {
  const rawData = await getCharacterList(category);
  const characterData = rawData.map((character) => {
    const { id, img, name } = character;
    return { id, img, name };
  });
  return characterData;
}

export async function getCharacterListOffset(category, page = 1) {
  // first page - 1 equal to offset - 0
  const offsetPage = page <= 1 ? 0 : page - 1;
  const data = await getFromAPI(
    `${CHARACTER_URL}?category=${category.replaceAll(
      ' ',
      '+'
    )}&limit=${LIMIT}&offset=${offsetPage * LIMIT}`
  );

  return transformCharacterListData(data);
}

export async function findCharacterByName(category, searchString) {
  const data = await getFromAPI(
    `${CHARACTER_URL}?name=${searchString.toLowerCase().replaceAll(' ', '+')}`
  );

  return transformCharacterListData(data);
}
