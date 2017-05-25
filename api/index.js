import fetch from 'isomorphic-unfetch';

export const fetchShows = async query => {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await res.json();
  return data;
};

export const fetchShow = async id => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();
  return data;
};

export const fetchCrew = async showId => {
  const res = await fetch(`https://api.tvmaze.com/shows/${showId}/crew`);
  const data = await res.json();
  return data;
};

export const fetchSeasons = async showId => {
  const res = await fetch(`https://api.tvmaze.com/shows/${showId}/seasons`);
  const data = await res.json();
  return data;
};

export const fetchShowsPage = async page => {
  const res = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
  const data = await res.json();
  return data.reduce((acc, show) => [...acc, { show }], []);
};
