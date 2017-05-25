import { Item } from 'semantic-ui-react';

const Season = ({ number, name, image, premiereDate, endDate }) => (
  <Item>
    <Item.Image size="tiny" src={image && image.medium} />
    <Item.Content>
      <Item.Header>
        <a>Season {name || number}</a>
      </Item.Header>
      <Item.Description>
        <p>
          {`Premiere date: ${premiereDate || '-'}`}
        </p>
        <p>
          {`End date: ${endDate || '-'}`}
        </p>
      </Item.Description>
    </Item.Content>
  </Item>
);

export default Season;
