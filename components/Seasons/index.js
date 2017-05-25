import React, { PureComponent } from 'react';
import { Item } from 'semantic-ui-react';
import { fetchSeasons } from '../../api';
import Season from './Season';

class Seasons extends PureComponent {
  state = { seasons: null };

  async componentDidMount() {
    const seasons = await fetchSeasons(this.props.showId);
    this.setState({ seasons });
  }

  render() {
    const seasons = this.state.seasons;
    return (
      <section>
        <Item.Group>
          {seasons &&
            seasons.map((season, idx) => <Season key={idx} {...season} />)}
        </Item.Group>
      </section>
    );
  }
}

export default Seasons;
