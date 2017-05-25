import Head from 'next/head';
import styled from 'styled-components';
import './global-styles';

const Main = styled.main`
  width: 60vw;
  padding: 3em;
  margin: 5em auto;
  background-color: whitesmoke;
  border-radius: 10px;
`;

const Layout = ({ children }) => (
  <Main>
    <Head>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
      />
    </Head>
    {children}
  </Main>
);

export default Layout;
