import Link from 'next/link';
import { Input, Header, Item } from 'semantic-ui-react';
import get from 'lodash/get';

const Shows = ({ shows }) => (
  <Item.Group>
    {shows.map(({ show }) => (
      <Item key={show.id}>
        <Item.Image size="tiny" src={get(show, 'image.medium', null)} />
        <Item.Content>
          <Item.Header>
            <Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </Item.Header>
          <Item.Description>
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
          </Item.Description>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
);

export default Shows;
