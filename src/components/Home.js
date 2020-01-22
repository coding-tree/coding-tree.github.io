import React, {useEffect, useState, lazy} from 'react';
import ReactResizeDetector from 'react-resize-detector';

const MainWrapper = lazy(() => import('./MainWrapper'));
const WrapperContainer = lazy(() => import('./WrapperContainer'));
const MainContent = lazy(() => import('./MainContent'));
const Header = lazy(() => import('./Header'));
const BackgroundContainer = lazy(() => import('./Background/BackgroundContainer'));
const TreeContainer = lazy(() => import('./Tree/TreeContainer'));
const TreeItems = lazy(() => import('./TreeItems'));
const TreeItem = lazy(() => import('./TreeItem'));
const Gallery = lazy(() => import('./Gallery'));
const Faq = lazy(() => import('./Faq'));
const FaqItem = lazy(() => import('./FaqItem'));
const Footer = lazy(() => import('./Footer'));

function Home() {
  const [documentWidth, setWidth] = useState(null);

  const resize = () => {
    setWidth(document.body.clientWidth);
  };

  useEffect(() => {
    setWidth(document.body.clientWidth);
  }, [documentWidth]);

  const rwd = {
    isLargeDesktop: documentWidth >= 1200,
    isDesktop: documentWidth < 1200 && documentWidth >= 896,
    isTablet: documentWidth < 896 && documentWidth >= 568,
    isMobile: documentWidth < 568 && documentWidth >= 433,
    isSmallMobile: documentWidth < 433,
  };

  return (
    <MainWrapper>
      <WrapperContainer>
        <Header rwd={rwd}>
          <MainContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel vitae, quo nam, ducimus similique
            quaerat error id dignissimos facilis totam distinctio veritatis doloribus maiores? Quasi commodi alias hic
            nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio iste alias rerum consectetur expedita
            saepe, necessitatibus eligendi libero suscipit reprehenderit? Provident repudiandae modi possimus repellat
            iusto optio enim repellendus maiores.
          </MainContent>
          <TreeItems>
            <TreeItem
              rwd={rwd}
              bird="black_bird"
              title="Pas czarny - Sensei"
              top={['16%', '28%', '29.1%', '30.5%', '34.4%']}
              right="11%">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum architecto nulla
              dicta amet cum quidem voluptatem odio officia veritatis ea distinctio sed, natus vero quasi, culpa
              repudiandae necessitatibus consectetur?
            </TreeItem>
            <TreeItem
              rwd={rwd}
              bird="brown_bird"
              title="Pas brązowy"
              top={['25.1%', '36%', '37.2%', '38.8%', '43.5%']}
              left="20%">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure.
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="yellow_bird"
              title="Pas żółty"
              top={['36.8%', '45.3%', '46.6%', '48.5%', '51.3%']}
              right="24%">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, est totam sapiente ipsum debitis nihil cum
              odit commodi sequi fuga blanditiis ipsam, neque dolores repellendus cumque dolore adipisci quae
              laboriosam!
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="green_bird"
              title="Pas zielony"
              top={['48.3%', '55.3%', '56.8%', '59%', '60.2%']}
              left="23%">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam ipsa enim excepturi tempore.
              Nobis, eaque ad illum sapiente fugiat aperiam voluptatum laborum modi reiciendis architecto. Libero modi
              expedita velit!
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="blue_bird"
              title="Pas niebieski"
              top={['59.6%', '65.3%', '66.8%', '69.2%', '70.1%']}
              right="16%">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nostrum ea recusandae, modi est
              libero rerum unde laudantium ex voluptas accusamus molestias repellendus veritatis quam! Ullam saepe ab
              rem dolorum?
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="white_bird"
              title="Pas biały"
              top={['68.8%', '72.6%', '73.7%', '76.6%', '77.9%']}
              left="20%">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure.
            </TreeItem>
          </TreeItems>
        </Header>
        <BackgroundContainer rwd={rwd}></BackgroundContainer>
        <TreeContainer rwd={rwd}></TreeContainer>
      </WrapperContainer>

      <Gallery rwd={rwd}></Gallery>

      <Faq>
        <FaqItem title="Lorem Ipsum ?">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dignissimos, ipsa dolore aspernatur iusto
          aliquam tenetur fugit! Cum accusantium adipisci recusandae laudantium labore maxime voluptas. Odio,
          perferendis. Ullam, incidunt aliquam?
        </FaqItem>
        <FaqItem title="Muszę zakładać konto?">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dignissimos, ipsa dolore aspernatur iusto
          aliquam tenetur fugit! Cum accusantium adipisci recusandae laudantium labore maxime voluptas. Odio,
          perferendis. Ullam, incidunt aliquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta illum
          natus facilis unde aliquam voluptatibus, error numquam perferendis odit voluptate repudiandae tempore corporis
          cum temporibus exercitationem doloribus! Quaerat, maiores culpa.
        </FaqItem>
      </Faq>

      <Footer></Footer>

      <ReactResizeDetector handleWidth handleHeight onResize={resize} />
    </MainWrapper>
  );
}

export default Home;
