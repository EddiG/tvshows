import HomePage from '../components/HomePage';
import { fetchShows, fetchShowsPage } from '../api';

const Index = props => <HomePage {...props} />;

const searchShows = async query => await fetchShows(query);

const getShowsOfPage = async page => await fetchShowsPage(page);

Index.getInitialProps = async context => {
  const { query } = context;
  let shows = null;

  if (query.search) {
    shows = await searchShows(query.search);
  } else {
    shows = await getShowsOfPage(1);
  }

  return { shows };
};

export default Index;
