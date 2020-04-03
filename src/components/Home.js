import React from 'react';
import {withTimeOfDay} from './hoc/withTimeOfDay';
import TreeContainer from './Tree/TreeContainer';
import {withTheme} from './hoc/withTheme';
import MotiveSlider from './MotiveSlider';
import MainContent from './MainContent';
import Header from './Header';
import Birds from './Birds/Birds';
import BirdContainer from './Birds/BirdContainer';

function Home({dateTime, changeTimeOfDay, changeMotive, theme}) {
  return (
    <>
      <Header>
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
          changeMotive={changeMotive}
          changeTimeOfDay={changeTimeOfDay}></MotiveSlider>
      </Header>

      <TreeContainer dateTime={dateTime}>
        <Birds
          placeOne={props => (
            <BirdContainer birdType="baby" bird="baby" title="Baby Bird" {...props}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum architecto nulla
              dicta amet cum quidem voluptatem odio officia veritatis ea distinctio sed, natus vero quasi, culpa
              repudiandae necessitatibus consectetur?
            </BirdContainer>
          )}
          placeTwo={props => (
            <BirdContainer bird="white" title="Pas biały" {...props}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure.
            </BirdContainer>
          )}
          placeThree={props => (
            <BirdContainer bird="blue" title="Pas niebieski" {...props}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam ipsa enim excepturi tempore.
              Nobis, eaque ad illum sapiente fugiat aperiam voluptatum laborum modi reiciendis architecto. Libero modi
              expedita velit!
            </BirdContainer>
          )}
          placeFour={props => (
            <BirdContainer bird="yellow" title="Pas żółty" {...props}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, est totam sapiente ipsum debitis nihil cum
              odit commodi sequi fuga blanditiis ipsam, neque dolores repellendus cumque dolore adipisci quae
              laboriosam!
            </BirdContainer>
          )}
          placeFive={props => (
            <BirdContainer bird="green" title="Pas zielony" {...props}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nostrum ea recusandae, modi est
              libero rerum unde laudantium ex voluptas accusamus molestias repellendus veritatis quam! Ullam saepe ab
              rem dolorum?
            </BirdContainer>
          )}
          placeSix={props => (
            <BirdContainer bird="brown" title="Pas brązowy" {...props}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure.
            </BirdContainer>
          )}
          placeSeven={props => (
            <BirdContainer bird="black" title="Pas czarny - Sensei" {...props}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro assumenda quisquam quos, similique
              eius nemo quod minima sunt harum debitis adipisci velit aliquid consequuntur, officiis consectetur rerum
              doloremque iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum architecto nulla
              dicta amet cum quidem voluptatem odio officia veritatis ea distinctio sed, natus vero quasi, culpa
              repudiandae necessitatibus consectetur?
            </BirdContainer>
          )}></Birds>
      </TreeContainer>
    </>
  );
}

export default withTimeOfDay(withTheme(Home));
