import React, {useEffect, useState} from 'react';
import Lottie from 'react-lottie';

const Background = ({children, treeFile}) => {
  const [animation] = useState('tree');
  const [tree, setTree] = useState(null);

  const loadData = async () => {
    const [tree] = await Promise.all([import(`./${treeFile}.json`)]);
    setTree(tree);
  };

  useEffect(() => {
    loadData();
  }, []);

  const data = {
    tree: tree || {},
  };

  const options = {
    loop: false,
    autoplay: false,
    animationData: data[animation].default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <Lottie
        style={{zIndex: 1, position: 'relative'}}
        isClickToPauseDisabled={true}
        speed={1}
        options={options}></Lottie>
      {children}
    </>
  );
};

export default Background;
