import fetch from 'isomorphic-unfetch';
import ShowPage from '../components/ShowPage';
import { fetchShow } from '../api';

const Post = props => <ShowPage {...props} />;

Post.getInitialProps = async context => {
  const { id } = context.query;
  const show = await fetchShow(id);
  return { show };
};

export default Post;
