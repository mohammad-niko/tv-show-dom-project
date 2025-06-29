
export async function getSerialEpisodes(e) {
  const card = e.target.closest(".card-serial");
  if (!card) return;

  const episodeId = card.id;
  if (!episodeId) return;

  location.hash = `#/show/${episodeId}`; 
}
