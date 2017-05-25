import { Item } from 'semantic-ui-react';

const Person = ({ name, image, type }) => (
  <Item>
    <Item.Image size="tiny" src={image && image.medium} />
    <Item.Content>
      <Item.Header>
        <a>{name}</a>
      </Item.Header>
      <Item.Description>
        {type}
      </Item.Description>
    </Item.Content>
  </Item>
);

export default Person;
