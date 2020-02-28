import React, {useState} from 'react';
import Navigation from './Navigation';

const AboutUs = () => {
  const [fakePath, setFakePath] = useState(`C:\\Coding Tree\\Czarny Pas\\Damian Ospara `);
  return (
    <section id="about-us">
      <Navigation></Navigation>

      <div className="background">{/* <BackgroundLarge></BackgroundLarge> */}</div>

      {/* Container */}
      <div className="box">
        <img src="box.svg" alt="" />
        <div className="box-wrapper">
          <div className="box-path">
            <div>
              <h5>Lokalizacja</h5>
            </div>
            <div className="box-path-breadcrumb">
              <i className="fas fa-folder"></i>
              <h5>{fakePath}</h5>
            </div>
            <div>
              <div className="slider-background">
                <button className="slider-button"></button>
              </div>
              <input hidden type="checkbox" />
              <h5>Przełącz motyw</h5>
            </div>
          </div>

          <div className="box-content">
            {/*  LEFT BOX */}
            <div className="box-folders">
              <Folders></Folders>
            </div>

            {/* RIGHT BOX */}
            <div className="box-info">
              <h1>AVATAR</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

const fakeData = {
  name: 'Coding Tree',
  kind: 'folder',
  children: [
    {id: 1, kind: 'folder', name: 'Czarny Pas', children: [{id: 1, name: 'Damian Ospara'}]},
    {
      id: 2,
      kind: 'folder',
      name: 'Brązowy Pas',
      children: [
        {id: 1, kind: 'person', name: 'Józef Rzadkosz'},
        {id: 2, kind: 'person', name: 'Jakub Wojtoń'},
      ],
    },
    {
      id: 3,
      kind: 'folder',
      name: 'Zielony Pas',
      children: [
        {
          id: 1,
          kind: 'folder',
          name: 'Józef Rzadkosz',
        },
        {id: 2, kind: 'person', name: 'Jakub Wojtoń'},
      ],
    },
    {
      id: 4,
      kind: 'folder',
      name: 'Żółty Pas',
      children: [
        {id: 1, kind: 'person', name: 'Kazimierz Bargowski'},
        {id: 2, kind: 'person', name: 'Emil Sankowski'},
        {id: 3, kind: 'person', name: 'Paweł Wojtkiewicz'},
        {id: 4, kind: 'person', name: 'Jędrzej Paulus'},
      ],
    },
  ],
};

const Folders = () => {
  const [isExpanded, setExpand] = useState(false);

  const setFolderIcon = isVisible => {
    return isVisible ? '-' : '+';
  };
  return (
    <div>
      <div className="parent-folder">
        <div onClick={() => setExpand(!isExpanded)} className="expand">
          {setFolderIcon(isExpanded)}
        </div>
        <i className="fas fa-folder"></i>
        {fakeData.name}
      </div>
      {fakeData.children.map(el => (
        <SubFolder key={el.id} setFolderIcon={setFolderIcon} el={el}></SubFolder>
      ))}
    </div>
  );
};

const SubFolder = ({el, setFolderIcon}) => {
  const [isExpanded, setExpand] = useState(false);
  const {id, name, kind, children} = el;
  const changeIcon = kind => {
    return kind === 'folder' ? 'fas fa-folder' : '';
  };
  return (
    <div key={id} className="folder">
      <div className="folder-kind">
        {kind === 'folder' && (
          <div onClick={() => setExpand(!isExpanded)} className="expand">
            {setFolderIcon(isExpanded)}
          </div>
        )}
        <i className={changeIcon(kind)}></i>
        <p> {name} </p>
      </div>
      {children !== undefined &&
        children.length > 0 &&
        isExpanded &&
        children.map(el => <SubFolder key={el.id} setFolderIcon={setFolderIcon} el={el}></SubFolder>)}
    </div>
  );
};
