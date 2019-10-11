import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

function Faq() {
  return (
    <section id="faq">
      <div className="container">
        <h1>FAQ</h1>
        <FaqItem></FaqItem>
        <FaqItem></FaqItem>
      </div>
    </section>
  );
}

function FaqItem() {
  const [isVisible, toggleVisibility] = useState(false);

  const animatedDesc = useSpring({
    maxHeight: isVisible ? '200px' : '0px',
    config: {easing: 'ease-in-out'},
    padding: isVisible ? '20px 0px' : '0px 0px',
  });

  return (
    <div className="faq">
      <div onClick={() => toggleVisibility(!isVisible)} className="faq-icon">
        <div>
          <i className="fas fa-circle"></i>
        </div>
        <button className="faq-title" onClick={() => toggleVisibility(!isVisible)}>
          Lorem Ipsum Sit Dolor ?
        </button>
      </div>

      <animated.div className="faq-description" style={animatedDesc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci cupiditate sint inventore quasi cum
        dolores, rerum similique soluta magni praesentium, itaque, animi ratione nihil fugit assumenda enim totam
        laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ut laborum, officia eaque fuga
        dignissimos, molestiae perferendis quasi velit non voluptates cumque omnis tempore perspiciatis? Quod nesciunt
        expedita magnam fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni asperiores aspernatur
        odio sequi repellat delectus, error optio cum beatae. Ab natus blanditiis reprehenderit eveniet pariatur, cumque
        velit et porro aperiam!
      </animated.div>
    </div>
  );
}

export default Faq;
