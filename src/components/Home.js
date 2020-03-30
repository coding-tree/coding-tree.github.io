import React, { lazy } from "react";
import { useMedia } from "./hooks/useMedia";
import DayNight from "./DayNight";
import { withTimeOfDay } from "./hoc/withTimeOfDay";

import TreeContainer from "./Tree/TreeContainer";
import { withTheme } from "./hoc/withTheme";
import MotiveSlider from "./MotiveSlider";

const MainWrapper = lazy(() => import("./MainWrapper"));
const WrapperContainer = lazy(() => import("./WrapperContainer"));
const MainContent = lazy(() => import("./MainContent"));
const Header = lazy(() => import("./Header"));
const TreeItems = lazy(() => import("./TreeItems/TreeItems"));
const TreeItem = lazy(() => import("./TreeItems/TreeItem"));
const Footer = lazy(() => import("./Footer"));

function Home({
  dateTime,
  changeTimeOfDay,
  setDateTime,
  motive,
  changeMotive,
  theme
}) {
  const isLargeDesktop = useMedia("(min-width: 1515px)");
  const isDesktop = useMedia("(max-width:1514px) and (min-width: 1150px)");
  const isTablet = useMedia("(max-width:1149px) and (min-width: 613px)");
  const isMobile = useMedia("(max-width:612px) and (min-width: 500px)");
  const isSmallMobile = useMedia("(max-width: 499px)");

  const rwd = {
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
          <MotiveSlider
            title="Przełącz motyw"
            theme={theme}
            dateTime={dateTime}
            motive={motive}
            changeMotive={changeMotive}
            changeTimeOfDay={changeTimeOfDay}
          ></MotiveSlider>
        </Header>

        <TreeContainer dateTime={dateTime} rwd={rwd}>
          <TreeItems>
            <TreeItem
              rwd={rwd}
              bird="baby"
              title="Baby Bird"
              top={["30.2%", "31.5%", "24.1%", "26.8%", "30%"]}
              right={["6%", "9%", "5%", "28%", "29%"]}
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
              top={["29.9%", "33.4%", "31.6%", "38.4%", "39.8%"]}
              left={["20%", "20%", "15%", "19%", "27%"]}
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
              top={["41.7%", "41.3%", "40.9%", "42.7%", "45.9%"]}
              right={["14.5%", "18%", "20%", "19%", "20%"]}
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
              top={["44.3%", "46%", "46.8%", "55%", "57.9%"]}
              left={["19%", "20%", "28%", "27%", "28%"]}
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
              top={["54.5%", "53.8%", "55.4%", "62.8%", "65.5%"]}
              right={["25.5%", "26%", "28%", "29%", "28%"]}
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
              top={["61.8%", "61.7%", "64.7%", "74.5%", "77.4%"]}
              left={["23.7%", "28.7%", "17%", "19%", "20%"]}
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
              top={["78.5%", "76%", "76.7%", "0", "0"]}
              right={["35%", "35%", "35%", "0", "0"]}
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
