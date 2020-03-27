import React, { lazy } from "react";
import { useMedia } from "./hooks/useMedia";
import DayNight from "./DayNight";
import { withTimeOfDay } from "./hoc/withTimeOfDay";

import TreeContainer from "./Tree/TreeContainer";
import { withTheme } from "./hoc/withTheme";

const MainWrapper = lazy(() => import("./MainWrapper"));
const WrapperContainer = lazy(() => import("./WrapperContainer"));
const MainContent = lazy(() => import("./MainContent"));
const Header = lazy(() => import("./Header"));
const TreeItems = lazy(() => import("./TreeItems/TreeItems"));
const TreeItem = lazy(() => import("./TreeItems/TreeItem"));
const Footer = lazy(() => import("./Footer"));

function Home({ dateTime, setDateTime, motive, changeMotive }) {
  const is2K = useMedia("(min-width: 1986px)");
  const isLargeDesktop = useMedia("(max-width:1985px) and (min-width: 1260px)");
  const isDesktop = useMedia("(max-width:1259px) and (min-width: 896px)");
  const isTablet = useMedia("(max-width:896px) and (min-width: 612px)");
  const isMobile = useMedia("(max-width:612px) and (min-width: 500px)");
  const isSmallMobile = useMedia("(max-width: 499px)");

  const rwd = {
    is2K,
    isLargeDesktop,
    isDesktop,
    isTablet,
    isMobile,
    isSmallMobile
  };

  return (
    <MainWrapper>
      {dateTime && (
        <DayNight
          setDateTime={setDateTime}
          dateTime={"main" + dateTime}
        ></DayNight>
      )}

      <WrapperContainer motive={motive}>
        <Header rwd={rwd}>
          <MainContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            vel vitae, quo nam, ducimus similique quaerat error id dignissimos
            facilis totam distinctio veritatis doloribus maiores? Quasi commodi
            alias hic nisi. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Odio iste alias rerum consectetur expedita saepe,
            necessitatibus eligendi libero suscipit reprehenderit? Provident
            repudiandae modi possimus repellat iusto optio enim repellendus
            maiores.
          </MainContent>
        </Header>

        <TreeContainer dateTime={dateTime} rwd={rwd}>
          <TreeItems>
            <TreeItem
              rwd={rwd}
              bird="baby"
              title="Baby Bird"
              top={["24.2%", "29.9%", "35.1%", "26.8%", "30%", "39.1%"]}
              right={["20%", "21%", "24%", "28%", "29%", "32%"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              porro assumenda quisquam quos, similique eius nemo quod minima
              sunt harum debitis adipisci velit aliquid consequuntur, officiis
              consectetur rerum doloremque iure. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Earum harum architecto nulla dicta
              amet cum quidem voluptatem odio officia veritatis ea distinctio
              sed, natus vero quasi, culpa repudiandae necessitatibus
              consectetur?
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="white"
              title="Pas biały"
              top={["25.2%", "34%", "40.2%", "38.4%", "39.8%", "47.5%"]}
              left={["20%", "20%", "15%", "19%", "27%", "28%"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              porro assumenda quisquam quos, similique eius nemo quod minima
              sunt harum debitis adipisci velit aliquid consequuntur, officiis
              consectetur rerum doloremque iure.
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="blue"
              title="Pas niebieski"
              top={["45%", "49.3%", "52.6%", "42.7%", "45.9%", "52.6%"]}
              right={["12.5%", "16%", "20%", "19%", "20%", "20%"]}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              magnam ipsa enim excepturi tempore. Nobis, eaque ad illum sapiente
              fugiat aperiam voluptatum laborum modi reiciendis architecto.
              Libero modi expedita velit!
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="yellow"
              title="Pas żółty"
              top={["45.4%", "51.3%", "53.9%", "55%", "57.9%", "62.8%"]}
              left={["19%", "20%", "28%", "27%", "28%", "24%"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              est totam sapiente ipsum debitis nihil cum odit commodi sequi fuga
              blanditiis ipsam, neque dolores repellendus cumque dolore adipisci
              quae laboriosam!
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="green"
              title="Pas zielony"
              top={["64.5%", "64.6%", "67.8%", "62.8%", "65.5%", "69.4%"]}
              right={["25.5%", "26%", "28%", "29%", "28%", "30%"]}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos nostrum ea recusandae, modi est libero rerum unde
              laudantium ex voluptas accusamus molestias repellendus veritatis
              quam! Ullam saepe ab rem dolorum?
            </TreeItem>

            <TreeItem
              rwd={rwd}
              bird="brown"
              title="Pas brązowy"
              top={["69.6%", "72.5%", "72.7%", "74.5%", "77.4%", "79.1%"]}
              left={["22.7%", "24.7%", "19%", "19%", "20%", "20%"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              porro assumenda quisquam quos, similique eius nemo quod minima
              sunt harum debitis adipisci velit aliquid consequuntur, officiis
              consectetur rerum doloremque iure.
            </TreeItem>
            <TreeItem
              rwd={rwd}
              bird="black"
              title="Pas czarny - Sensei"
              top={["83%", "0", "0", "0", "0", "0"]}
              right={["35%", "0", "0", "0", "0", "0"]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              porro assumenda quisquam quos, similique eius nemo quod minima
              sunt harum debitis adipisci velit aliquid consequuntur, officiis
              consectetur rerum doloremque iure. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Earum harum architecto nulla dicta
              amet cum quidem voluptatem odio officia veritatis ea distinctio
              sed, natus vero quasi, culpa repudiandae necessitatibus
              consectetur?
            </TreeItem>
          </TreeItems>
        </TreeContainer>
      </WrapperContainer>
      <Footer></Footer>
    </MainWrapper>
  );
}

export default withTimeOfDay(withTheme(Home));
