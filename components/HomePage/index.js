import { PureComponent } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Input, Header } from 'semantic-ui-react';
import get from 'lodash/get';
import Layout from '../Layout';
import Shows from '../Shows';
import { fetchShows } from '../../api';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { shows: props.shows };
  }

  onSearchChange = async e => {
    const query = e.target.value;
    const shows = await fetchShows(query);
    this.setState({ shows });

    Router.replace(`/?search=${query}`, `/shows/search/${query}`);
  };

  render() {
    return (
      <Layout>
        <Header as="h1">TV Shows</Header>
        <Input
          size="big"
          icon="search"
          placeholder="Search..."
          onChange={this.onSearchChange}
        />
        <Shows shows={this.state.shows} />
      </Layout>
    );
  }
}

export default HomePage;
