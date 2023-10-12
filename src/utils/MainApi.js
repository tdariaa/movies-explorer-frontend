// export const BASE_URL = 'http://localhost:3001';
export const BASE_URL = 'https://api.tdariaamovie.nomoredomainsicu.ru';


function getResponseData(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
    .then((res) => {
      return getResponseData(res)
    })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((res) => {
      return getResponseData(res)
    });
};

// получить данные пользователя (GET)
export const getProfileData = () => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
  })
    .then((res) => {
      return getResponseData(res)
    })
}

// получить созраненные фильмы пользователя (GET)
export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    credentials: 'include',
  })
    .then((res) => {
      return getResponseData(res)
    })
}

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return getResponseData(res)
    })
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include'
  })
}

// заменить данные пользователя (PATCH)
export const patchProfileData = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then((res) => {
      return getResponseData(res)
    })
}


// добавить карточку (POST)
export const saveMovie = (movieData) => {
  console.log(movieData);
  
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
      country: movieData.country,
      director: movieData.director,
      duration: movieData.duration,
      year: movieData.year,
      description: movieData.description,
      image: movieData.image,
      trailerLink: movieData.trailerLink,
      thumbnail: movieData.thumbnail,
      // owner: movieData.owner,
      movieId: movieData.movieId,
      nameRU: movieData.nameRU,
      nameEN: movieData.nameEN
    }
)
  })
    .then((res) => {
      return getResponseData(res)
    })
}

// удалить карточку (DELETE)
export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return getResponseData(res)
    })
}
