import React, { PureComponent } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import Crew from '../Crew';
import Seasons from '../Seasons';

class Info extends PureComponent {
  state = { active: 'seasons' };

  getActiveItem = () => {
    switch (this.state.active) {
      case 'crew':
        return <Crew showId={this.props.showId} />;
      case 'seasons':
        return <Seasons showId={this.props.showId} />;
      default:
        null;
    }
  };

  handleItemClick = (e, { name }) => this.setState({ active: name });

  render() {
    return (
      <div>
        <Menu tabular attached="top">
          <Menu.Item
            name="seasons"
            active={this.state.active === 'seasons'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="crew"
            active={this.state.active === 'crew'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment attached="bottom">
          {this.getActiveItem()}
        </Segment>
      </div>
    );
  }
}

export default Info;
