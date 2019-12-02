import React, {useEffect, useState, lazy} from 'react';
import ReactResizeDetector from 'react-resize-detector';

const MainContent = lazy(() => import('./MainContent'));
const Header = lazy(() => import('./Header'));
const BackgroundContainer = lazy(() => import('./Background/BackgroundContainer'));
const TreeContainer = lazy(() => import('./Tree/TreeContainer'));
const TreeItemsModal = lazy(() => import('./TreeItemsModal'));
const TreeItems = lazy(() => import('./TreeItems'));
const TreeItem = lazy(() => import('./TreeItem'));
const TreeItemModal = lazy(() => import('./TreeItemModal'));
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

  const setButtonModalPosition = (topMedium, topMobile, topSmallMobile) => {
    if (documentWidth > 568) return topMedium;
    if (documentWidth > 433) return topMobile;
    return topSmallMobile;
  };

  const isDesktop = documentWidth > 896;
  const checkLarge = documentWidth > 1200;

  return (
    <main>
      <div className="container">
        <Header isDesktop={isDesktop}>
          <MainContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel vitae, quo nam, ducimus similique
            quaerat error id dignissimos facilis totam distinctio veritatis doloribus maiores? Quasi commodi alias hic
            nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio iste alias rerum consectetur expedita
            saepe, necessitatibus eligendi libero suscipit reprehenderit? Provident repudiandae modi possimus repellat
            iusto optio enim repellendus maiores.
          </MainContent>
          {isDesktop ? (
            <TreeItems>
              <TreeItem title="Pas biały" top={checkLarge ? '32.5%' : '43%'} left="28%">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos,
                similique eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis
                consectetur rerum doloremque iure.
              </TreeItem>
              <TreeItem title="Pas zielony" top={checkLarge ? '44.5%' : '52.5%'} right="32%" isLeft={false}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, est totam sapiente ipsum debitis nihil
                cum odit commodi sequi fuga blanditiis ipsam, neque dolores repellendus cumque dolore adipisci quae
                laboriosam!
              </TreeItem>
              <TreeItem title="Pas brązowy" top={checkLarge ? '56.5%' : '63%'} left="31%">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam ipsa enim excepturi tempore.
                Nobis, eaque ad illum sapiente fugiat aperiam voluptatum laborum modi reiciendis architecto. Libero modi
                expedita velit!
              </TreeItem>
              <TreeItem title="Pas czarny" top={checkLarge ? '66.7%' : '72.3%'} right="29%" isLeft={false}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nostrum ea recusandae, modi est
                libero rerum unde laudantium ex voluptas accusamus molestias repellendus veritatis quam! Ullam saepe ab
                rem dolorum?
              </TreeItem>
            </TreeItems>
          ) : (
            <TreeItemsModal>
              <TreeItemModal title="Pas biały" top={setButtonModalPosition('43%', '44.5%', '49%')} left="33%">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, maiores, veritatis reprehenderit
                nostrum vel voluptatibus dolore recusandae consequatur a quod obcaecati blanditiis aliquam voluptas
                velit optio quidem molestiae numquam harum?
              </TreeItemModal>
              <TreeItemModal title="Pas zielony" top={setButtonModalPosition('53%', '54.5%', '57.5%')} right="39%">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti id molestiae repellendus at
                rem vero dolorum. Necessitatibus incidunt est ea quasi neque! Repudiandae voluptate commodi earum, magni
                corrupti omnis.
              </TreeItemModal>
              <TreeItemModal title="Pas brązowy" top={setButtonModalPosition('63%', '65%', '66%')} left="38.5%">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti id molestiae repellendus at
                rem vero dolorum. Necessitatibus incidunt est ea quasi neque! Repudiandae voluptate commodi earum, magni
                corrupti omnis.
              </TreeItemModal>
              <TreeItemModal title="Pas czarny" top={setButtonModalPosition('72.5%', '74.5%', '75.5%')} right="37%">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti id molestiae repellendus at
                rem vero dolorum. Necessitatibus incidunt est ea quasi neque! Repudiandae voluptate commodi earum, magni
                corrupti omnis.
              </TreeItemModal>
            </TreeItemsModal>
          )}
        </Header>
        <BackgroundContainer rwd={rwd}></BackgroundContainer>
        <TreeContainer rwd={rwd}></TreeContainer>
      </div>

      <Gallery isDesktop={isDesktop}></Gallery>

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
    </main>
  );
}

export default Home;
