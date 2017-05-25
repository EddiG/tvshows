import React, { PureComponent } from 'react';
import { Item } from 'semantic-ui-react';
import { fetchCrew } from '../../api';
import Person from './Person';

class ShowCrew extends PureComponent {
  state = { crew: null };

  async componentDidMount() {
    const crew = await fetchCrew(this.props.showId);
    this.setState({ crew });
  }

  render() {
    const crew = this.state.crew;
    return (
      <section>
        <Item.Group>
          {crew &&
            crew.map((member, idx) => (
              <Person key={idx} {...member.person} type={member.type} />
            ))}
        </Item.Group>
      </section>
    );
  }
}

export default ShowCrew;
