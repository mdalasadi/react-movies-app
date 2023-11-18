import { API, APIKey } from './../config';

export const getGenres = async () => {
  const res = await API.get(`/genre/movie/list?api_key=${APIKey}`);
  return res;
};

export const getSingleMovie = async (id) => {
  try {
    const res = await API.get(`/movie/${id}`, {
      params: {
        api_key: APIKey,
        append_to_response: 'videos',
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getRecommended = async (id) => {
  try {
    const res = await API.get(`/movie/${id}/recommendations?api_key=${APIKey}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getBrowse = async (type, page = '1') => {
  try {
    const res = await API.get(`/movie/${type}`, {
      params: {
        api_key: APIKey,
        page,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const getGenre = async (type, page = '1') => {
  try {
    const res = await API.get(`/discover/movie`, {
      params: {
        api_key: APIKey,
        with_genres: type,
        page,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const getSearch = async (search, page) => {
  const res = await API.get(`/search/movie`, {
    params: {
      api_key: APIKey,
      query: search,
      page,
    },
  });

  return res;
};
