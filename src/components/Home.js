import React, {lazy} from 'react';
import {useMedia} from './hooks/useMedia';
import DayNight from './DayNight';
import {withTimeOfDay} from './hoc/withTimeOfDay';
import TreeContainer from './Tree/TreeContainer';
import {withTheme} from './hoc/withTheme';
import MotiveSlider from './MotiveSlider';
import MainWrapper from './MainWrapper';
import WrapperContainer from './WrapperContainer';
import MainContent from './MainContent';
import Header from './Header';
import TreeItems from './TreeItems';
import TreeItem from './TreeItems/TreeItem';
import Footer from './Footer';

function Home({dateTime, changeTimeOfDay, setDateTime, motive, changeMotive, theme}) {
  const largeDevice = useMedia('(min-width: 896px)');

  return (
    <MainWrapper>
      {dateTime && <DayNight setDateTime={setDateTime} dateTime={dateTime}></DayNight>}

      <WrapperContainer motive={motive}>
        <Header largeDevice={largeDevice}>
          <MainContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel vitae, quo nam, ducimus similique
            quaerat error id dignissimos facilis totam distinctio veritatis doloribus maiores? Quasi commodi alias hic
            nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio iste alias rerum consectetur expedita
            saepe, necessitatibus eligendi libero suscipit reprehenderit? Provident repudiandae modi possimus repellat
            iusto optio enim repellendus maiores.
          </MainContent>
          <MotiveSlider
            title="Przełącz motyw"
            theme={theme}
            dateTime={dateTime}
            motive={motive}
            changeMotive={changeMotive}
            changeTimeOfDay={changeTimeOfDay}></MotiveSlider>
        </Header>

        <TreeContainer dateTime={dateTime}>
          <TreeItems>
            <TreeItem birdType="baby" className="right" largeDevice={largeDevice} bird="baby" title="Baby Bird">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum architecto nulla
              dicta amet cum quidem voluptatem odio officia veritatis ea distinctio sed, natus vero quasi, culpa
              repudiandae necessitatibus consectetur?
            </TreeItem>

            <TreeItem largeDevice={largeDevice} bird="white" title="Pas biały">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure.
            </TreeItem>

            <TreeItem largeDevice={largeDevice} className="right" bird="blue" title="Pas niebieski">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam ipsa enim excepturi tempore.
              Nobis, eaque ad illum sapiente fugiat aperiam voluptatum laborum modi reiciendis architecto. Libero modi
              expedita velit!
            </TreeItem>

            <TreeItem largeDevice={largeDevice} bird="yellow" title="Pas żółty">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, est totam sapiente ipsum debitis nihil cum
              odit commodi sequi fuga blanditiis ipsam, neque dolores repellendus cumque dolore adipisci quae
              laboriosam!
            </TreeItem>

            <TreeItem largeDevice={largeDevice} bird="green" className="right" title="Pas zielony">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nostrum ea recusandae, modi est
              libero rerum unde laudantium ex voluptas accusamus molestias repellendus veritatis quam! Ullam saepe ab
              rem dolorum?
            </TreeItem>

            <TreeItem bird="brown" title="Pas brązowy" largeDevice={largeDevice}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure.
            </TreeItem>

            <TreeItem largeDevice={largeDevice} bird="black" title="Pas czarny - Sensei" className="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum architecto nulla
              dicta amet cum quidem voluptatem odio officia veritatis ea distinctio sed, natus vero quasi, culpa
              repudiandae necessitatibus consectetur?
            </TreeItem>
          </TreeItems>
        </TreeContainer>
      </WrapperContainer>
      <Footer></Footer>
    </MainWrapper>
  );
}

export default withTimeOfDay(withTheme(Home));
