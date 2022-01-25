import { API_URL, CHARACTER_URL, LIMIT, ALIVE } from '../constants/api';

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

export async function getCharacterData(id) {
  const data = await getFromAPI(`${CHARACTER_URL}/${id}`);
  const characterData = data[0];
  characterData.isDead = characterData.status !== ALIVE;

  return characterData;
}

export async function getCharacterCount(category) {
  const data = await getCharacterList(category);
  return data.length;
}

export async function getCharactersGalleryData(category) {
  const rawData = await getCharacterList(category);
  const characterData = rawData.map((character) => {
    const { char_id: id, img, name } = character;
    return { id, img, name };
  });
  return characterData;
}

export async function getCharacterListOffset(category, page = 1) {
  const offsetPage = page <= 0 ? 0 : page;
  const data = await getFromAPI(
    `${CHARACTER_URL}?category=${category.replaceAll(
      ' ',
      '+'
    )}&limit=${LIMIT}&offset=${offsetPage * LIMIT}`
  );

  return data;
}

export async function findCharacterByName(searchString) {
  const rawData = await getFromAPI(
    `${CHARACTER_URL}?name=${searchString.toLowerCase().replaceAll(' ', '+')}`
  );
  const characterData = rawData.map((character) => {
    const { char_id: id, img, name } = character;
    return { id, img, name };
  });

  return characterData;
}
