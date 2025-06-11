


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
    console.log(data);
    return data
  } catch (error) {
    console.log(error);
  }
}

export async function getSerials() {
  const config = {
    header: {
      Accept: "application/json",
    },
  };
  try {
    const { data } = await axios.get(
      `https://api.tvmaze.com/shows?page=0`,
      config
    );
    // const dramas = data.filter(show => show.genres.includes("Action"));
    return data;
  } catch (error) {
    alert(error);
  }
}
