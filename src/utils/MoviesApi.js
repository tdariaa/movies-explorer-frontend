export const BASE_URL = 'https://api.nomoreparties.co';

function getResponseData(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

// (GET) получить список всех фильмов в виде массива 
export const getInitialCards = () => {
  return fetch(`${BASE_URL}/beatfilm-movies`)
    .then((res) => {
      return getResponseData(res)
    })
}