import styled from 'styled-components';
import { Footer, Header } from '../components/layout';

const MainLayout = styled.main`
  max-width: 140rem;
  margin: 0 auto;
`;

const BaseLayout = ({children}) => {
  return (
    <>
      <Header />
      <MainLayout>
        { children }
      </MainLayout>
      <Footer />
    </>
  )
};

export default BaseLayout;