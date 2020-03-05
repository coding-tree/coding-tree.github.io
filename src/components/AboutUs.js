import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';

const fakeData = [
  {
    id: 1,
    name: 'Coding Tree',
    kind: 'folder',
    children: [
      {id: 1, kind: 'folder', name: 'Czarny Pas', children: [{id: 1, kind: 'person', name: 'Damian Ospara'}]},
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
      },
      {
        id: 4,
        kind: 'folder',
        name: 'Żółty Pas',
        children: [
          {id: 1, kind: 'person', name: 'Kazimierz Bargowski'},
          {id: 2, kind: 'person', name: 'Emil Sankowski'},
          {id: 3, kind: 'person', name: 'Łukasz Strobejko'},
          {id: 4, kind: 'person', name: 'Paweł Wojtkiewicz'},
          {id: 5, kind: 'person', name: 'Jędrzej Paulus'},
        ],
      },
      {
        id: 5,
        kind: 'folder',
        name: 'Niebieski Pas',
        children: [],
      },
      {
        id: 6,
        kind: 'folder',
        name: 'Biały Pas',
        children: [
          {id: 1, kind: 'person', name: 'Arkadiusz Świokło'},
          {id: 2, kind: 'person', name: 'Bartosz Kamiński'},
          {id: 3, kind: 'person', name: 'Paweł Kochowicz'},
          {id: 4, kind: 'person', name: 'Paweł Marciniak'},
          {id: 5, kind: 'person', name: 'Piotr Rasztemborski'},
        ],
      },
    ],
  },
];

const AboutUs = () => {
  const [fakePath, setFakePath] = useState(`C:\\Coding Tree\\Czarny Pas\\Damian Ospara `);
  const [selectedElement, setSelectedElement] = useState(null);

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
              <Folders setSelectedElement={setSelectedElement}></Folders>
            </div>

            {/* RIGHT BOX */}
            <div className="box-info">
              {selectedElement && (
                <div>
                  <h3>
                    {selectedElement.kind}: {selectedElement.name}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

const Folders = ({setSelectedElement}) => {
  const [selectedItem, setSelection] = useState(null);
  const setFolderIcon = isVisible => {
    return isVisible ? '-' : '+';
  };
  useEffect(() => {
    selectedItem && selectedItem.lastElementChild.classList.add('folder-selected');
  }, [selectedItem]);
  return (
    <div>
      {fakeData.map(el => (
        <SubFolder
          key={el.id}
          fakeData={fakeData}
          selectedItem={selectedItem}
          setSelection={setSelection}
          setFolderIcon={setFolderIcon}
          setSelectedElement={setSelectedElement}
          el={el}></SubFolder>
      ))}
    </div>
  );
};

const SubFolder = ({el, setFolderIcon, fakeData, selectedItem, setSelection, setSelectedElement}) => {
  const [isExpanded, setExpand] = useState(false);
  const {id, name, kind, children} = el;

  const styles = {
    height: fakeData.length === id && kind === 'person' && '30px',
    top: kind === 'person' && '-15px',
  };

  const handleFolderClick = e => {
    const elem = e.currentTarget;
    setSelectedElement(el);
    if (selectedItem && selectedItem !== elem) selectedItem.lastElementChild.classList.remove('folder-selected');
    setSelection(elem);
    setExpand(!isExpanded);
  };

  return (
    <div key={id} className="folder">
      {(fakeData.length !== id || kind === 'person') && <hr className="border-top" style={styles} />}

      <div onClick={e => handleFolderClick(e)} className="folder-kind">
        {/* BORDER */}
        <hr className="border-left" />

        {kind === 'folder' && (
          <div onClick={() => setExpand(!isExpanded)} className="expand">
            {setFolderIcon(isExpanded)}
          </div>
        )}
        {kind === 'folder' ? <i className="fas fa-folder"></i> : <img src="pawel_woj.svg" />}
        <p> {name} </p>
      </div>

      {children !== undefined &&
        children.length > 0 &&
        isExpanded &&
        children.map(el => (
          <SubFolder
            key={el.id}
            fakeData={children}
            selectedItem={selectedItem}
            setSelection={setSelection}
            setFolderIcon={setFolderIcon}
            setSelectedElement={setSelectedElement}
            el={el}></SubFolder>
        ))}
    </div>
  );
};
