import React, { PureComponent } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import Layout from '../Layout';
import MainInfo from './MainInfo';
import AdditionalInfo from './AdditionalInfo';
import get from 'lodash/get';

const BackButton = styled.a`
  cursor: pointer;
`;

const ShowPage = ({ show }) => (
  <Layout>
    <BackButton onClick={() => window.history.back()}>
      <Icon name="arrow left" />Back
    </BackButton>
    <Header as="h1">
      {show.name}
    </Header>
    <MainInfo {...show} />
    <AdditionalInfo showId={show.id} />
  </Layout>
);

export default ShowPage;
