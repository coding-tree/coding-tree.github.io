import React, {useEffect, useState, lazy} from 'react';
import ReactResizeDetector from 'react-resize-detector';

const MainWrapper = lazy(() => import('./MainWrapper'));
const WrapperContainer = lazy(() => import('./WrapperContainer'));
const MainContent = lazy(() => import('./MainContent'));
const Header = lazy(() => import('./Header'));
const BackgroundContainer = lazy(() => import('./Background/BackgroundContainer'));
const TreeItems = lazy(() => import('./Tree/TreeItems'));
const TreeItem = lazy(() => import('./Tree/TreeItem'));
// * Temporarily turned off
// const Gallery = lazy(() => import('./Gallery'));
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
    is2K: documentWidth >= 1986,
    isLargeDesktop: documentWidth < 1986 && documentWidth > 1260,
    isDesktop: documentWidth < 1260 && documentWidth >= 896,
    isTablet: documentWidth < 896 && documentWidth >= 612,
    isMobile: documentWidth < 612 && documentWidth >= 500,
    isSmallMobile: documentWidth < 500,
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
              bird="black"
              title="Pas czarny - Sensei"
              top={['24.2%', '29.9%', '35.1%', '26.8%', '30%', '39.1%']}
              right={['20%', '21%', '24%', '28%', '29%', '32%']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum architecto nulla
              dicta amet cum quidem voluptatem odio officia veritatis ea distinctio sed, natus vero quasi, culpa
              repudiandae necessitatibus consectetur?
            </TreeItem>
            <TreeItem
              rwd={rwd}
              bird="brown"
              title="Pas brązowy"
              top={['25.2%', '34%', '40.2%', '38.4%', '39.8%', '47.5%']}
              left={['20%', '20%', '15%', '19%', '27%', '28%']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure.
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="green"
              title="Pas zielony"
              top={['45%', '49.3%', '52.6%', '42.7%', '45.9%', '52.6%']}
              right={['12.5%', '16%', '20%', '19%', '20%', '20%']}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam ipsa enim excepturi tempore.
              Nobis, eaque ad illum sapiente fugiat aperiam voluptatum laborum modi reiciendis architecto. Libero modi
              expedita velit!
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="yellow"
              title="Pas żółty"
              top={['45.4%', '51.3%', '53.9%', '55%', '57.9%', '62.8%']}
              left={['19%', '20%', '28%', '27%', '28%', '24%']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, est totam sapiente ipsum debitis nihil cum
              odit commodi sequi fuga blanditiis ipsam, neque dolores repellendus cumque dolore adipisci quae
              laboriosam!
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="blue"
              title="Pas niebieski"
              top={['64.5%', '64.6%', '67.8%', '62.8%', '65.5%', '69.4%']}
              right={['25.5%', '26%', '28%', '29%', '28%', '30%']}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nostrum ea recusandae, modi est
              libero rerum unde laudantium ex voluptas accusamus molestias repellendus veritatis quam! Ullam saepe ab
              rem dolorum?
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="white"
              title="Pas biały"
              top={['69.6%', '72.5%', '72.7%', '74.5%', '77.4%', '79.1%']}
              left={['22.7%', '24.7%', '19%', '19%', '20%', '20%']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure.
            </TreeItem>
          </TreeItems>
        </Header>
        <BackgroundContainer rwd={rwd}></BackgroundContainer>
      </WrapperContainer>

      {/* //TODO: Gallery project */}
      {/* <Gallery rwd={rwd}></Gallery> */}

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
