import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';
import folderStructure from '../data/folderStructure.json';

const AboutUs = () => {
  const [fakePath, setFakePath] = useState(`C:\\Coding Tree\\Czarny Pas\\Damian Ospara `);
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <section id="about-us">
      <Navigation></Navigation>

      {/* // * BACKGROUND IMAGE */}
      <div className="background">{/* <BackgroundLarge></BackgroundLarge> */}</div>

      {/* // * BOX */}
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
              <Folders folderStructure={folderStructure} setSelectedElement={setSelectedElement}></Folders>
            </div>

            {/* RIGHT BOX */}
            <div className="box-info">
              {selectedElement ? (
                selectedElement.kind === 'person' ? (
                  <ProfileDetail profil={selectedElement}></ProfileDetail>
                ) : (
                  <FolderDetail items={selectedElement.children} name={selectedElement.name}></FolderDetail>
                )
              ) : (
                <div className="box-info-startup">
                  <h2>Witamy na widoku folderów</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis officiis vitae praesentium
                    ducimus iste incidunt voluptates cum autem quis, totam beatae. Animi fuga expedita atque labore
                    reiciendis magni harum obcaecati.
                  </p>
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

const ProfileDetail = ({profil}) => {
  const {
    name,
    landscape,
    github,
    fb,
    dateOfBirth,
    stack,
    stackOverflow,
    twitter,
    linkedIn,
    portfolio,
    description,
  } = profil;

  const date = new Date().getFullYear();

  const calculateAge = dateOfBirth => {
    return date - dateOfBirth;
  };

  return (
    <div>
      <div className="avatar">
        <img src={`avatars/${landscape}.svg`} alt="" />
      </div>
      <div className="profile">
        <div className="profile-name">
          <h2>{name}</h2>
          <div className="profile-social">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            )}
            {fb && (
              <a href={fb} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            )}
            {stackOverflow && (
              <a href={stackOverflow} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-stack-overflow"></i>
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter-square"></i>
              </a>
            )}
            {linkedIn && (
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            )}
            {portfolio && (
              <a href={portfolio} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe"></i>
              </a>
            )}
          </div>
        </div>
        {dateOfBirth && <div className="profile-age">Wiek: {calculateAge(dateOfBirth)} lat</div>}

        {stack && (
          <div className="profile-stack">
            <p>
              Technologie:{' '}
              {stack.length > 1 ? stack.map(el => <span key={el.id}>{el.title}, </span>) : <span>{stack}</span>}
            </p>
          </div>
        )}

        {description ? (
          <div className="profile-description">{description}</div>
        ) : (
          <div className="profile-description">Brak opisu profilu</div>
        )}
      </div>
    </div>
  );
};

const FolderDetail = ({name, items = []}) => {
  return (
    <div className="folder-detail">
      <h2>{name}</h2>
      <p>Ilość plików w folderze: {items.length}</p>
    </div>
  );
};

const Folders = ({setSelectedElement, folderStructure}) => {
  const [selectedItem, setSelection] = useState(null);
  const setFolderIcon = isVisible => {
    return isVisible ? '-' : '+';
  };
  useEffect(() => {
    selectedItem && selectedItem.lastElementChild.classList.add('folder-selected');
  }, [selectedItem]);
  return (
    <div>
      {folderStructure.map(el => (
        <SubFolder
          key={el.id}
          folderStructure={folderStructure}
          selectedItem={selectedItem}
          setSelection={setSelection}
          setFolderIcon={setFolderIcon}
          setSelectedElement={setSelectedElement}
          el={el}></SubFolder>
      ))}
    </div>
  );
};

const SubFolder = ({el, setFolderIcon, folderStructure, selectedItem, setSelection, setSelectedElement}) => {
  const [isExpanded, setExpand] = useState(false);
  const {id, name, kind, children, avatar} = el;

  const styles = {
    height: folderStructure.length === id && kind === 'person' && '30px',
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
      {(folderStructure.length !== id || kind === 'person') && <hr className="border-top" style={styles} />}

      <div onClick={e => handleFolderClick(e)} className="folder-kind">
        {/* BORDER */}
        <hr className="border-left" />

        {kind === 'folder' && (
          <div onClick={() => setExpand(!isExpanded)} className="expand">
            {setFolderIcon(isExpanded)}
          </div>
        )}
        {kind === 'folder' ? <i className="fas fa-folder"></i> : <img src={`avatars/${avatar}.svg`} />}
        <p> {name} </p>
      </div>

      {children !== undefined &&
        children.length > 0 &&
        isExpanded &&
        children.map(el => (
          <SubFolder
            key={el.id}
            folderStructure={children}
            selectedItem={selectedItem}
            setSelection={setSelection}
            setFolderIcon={setFolderIcon}
            setSelectedElement={setSelectedElement}
            el={el}></SubFolder>
        ))}
    </div>
  );
};
