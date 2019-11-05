import React, {useState, useRef, useEffect} from 'react';

export default function Gallery() {
  const [openedImage, setImage] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const lightbox = useRef(null);

  const fakeImages = [
    {id: 1, thumb: 'https://picsum.photos/300/300', url: 'https://picsum.photos/1800/1500', alt: ''},
    {id: 2, thumb: 'https://picsum.photos/301/300', url: 'https://picsum.photos/1502/2500', alt: ''},
    {id: 3, thumb: 'https://picsum.photos/302/300', url: 'https://picsum.photos/1501/1500', alt: ''},
    {id: 4, thumb: 'https://picsum.photos/303/300', url: 'https://picsum.photos/1503/1500', alt: ''},
  ];

  useEffect(() => {
    openedImage && lightbox.current.focus();
  });

  const openLightbox = id => {
    setLoading(true);
    setImage(id);
  };

  const closeLightbox = e => {
    const cn = e.target.className;
    cn === 'lightbox' && setImage(false);
  };

  const isFinished = () => {
    setLoading(false);
  };

  const changeImage = type => {
    setLoading(true);
    setImage(prevState => {
      if (type === 'prev') return prevState - 1 === 0 ? fakeImages.length : prevState - 1;
      return prevState + 1 > fakeImages.length ? 1 : prevState + 1;
    });
  };

  const handleKeyDown = e => {
    if (!isLoading) {
      e.key === 'a' && changeImage('prev');
      e.key === 'd' && changeImage('next');
      e.key === 'Escape' && closeLightbox(e);
    }
  };

  return (
    <section id="gallery">
      <div className="container">
        <h1>Galeria</h1>
        <div className="grid-gallery">
          {fakeImages.map(el => (
            <div key={el.id} className="grid-item">
              <img onClick={() => openLightbox(el.id)} src={el.thumb} alt={el.alt} />
            </div>
          ))}
        </div>
        {openedImage && (
          <div
            ref={lightbox}
            onKeyDown={handleKeyDown}
            onClick={e => closeLightbox(e)}
            className="lightbox"
            tabIndex="0">
            {!isLoading && (
              <React.Fragment>
                <button className="arrow previous" onClick={() => changeImage('prev')}>
                  <i className="far fa-arrow-alt-circle-left"></i>
                </button>
                <button className="arrow next" onClick={() => changeImage('next')}>
                  <i className="far fa-arrow-alt-circle-right"></i>
                </button>
              </React.Fragment>
            )}
            <img
              onError={() => setImage(false)}
              onLoad={() => isFinished()}
              src={fakeImages[openedImage - 1].url}
              alt=""
            />
            {isLoading && <div className="loading">Loading...</div>}
          </div>
        )}
      </div>
    </section>
  );
}
