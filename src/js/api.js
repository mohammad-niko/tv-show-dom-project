import {showError} from "./ui.js"


export async function getSerials(page = 0) {
  const config = {
    header: {
      Accept: "application/json",
    },
  };
  try {
    const { data } = await axios.get(
      `https://api.tvmaze.com/shows?page=${page}`,
      config
    );
    return data;
  } catch (error) {
    showError(error)
  }
}

export async function apiSearch(query) {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${query}`,
      config
    );
    return data;
  } catch (error) {
        console.log(error);
  }
}

export async function getEpisodesApi(showId) {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const { data } = await axios.get(
      `https://api.tvmaze.com/shows/${showId}/episodes`,
      config
    );
    console.log(data);
    return data;
  } catch (error) {
        showError(error)
  }
}

