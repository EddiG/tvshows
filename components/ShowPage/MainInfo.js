import React, { PureComponent } from 'react';
import { Item, List, Rating, Container } from 'semantic-ui-react';
import fixUrls from '../../utils/fixUrls';

const MainInfo = ({
  image,
  rating,
  genres,
  language,
  premiered,
  status,
  summary,
}) => (
  <Item.Group>
    <Item>
      <Item.Image size="small" src={fixUrls(image && image.medium)} />
      <Item.Content>
        <Container textAlign="right">
          <Rating
            defaultRating={rating && rating.average}
            maxRating={10}
            disabled
          />
        </Container>
        <Item.Meta>
          <List>
            <List.Item>
              Genre: {genres && genres.join(', ')}
            </List.Item>
            <List.Item>
              Language: {language}
            </List.Item>
            <List.Item>
              Premiere: {premiered}
            </List.Item>
            <List.Item>
              Status: {status}
            </List.Item>
          </List>
        </Item.Meta>
        <Item.Description>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default MainInfo;
