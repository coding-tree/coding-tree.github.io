import React, {useState, useRef, useEffect} from 'react';

export default function Gallery({rwd, children}) {
  const [openedImage, setImage] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const lightbox = useRef(null);

  const {isLargeDesktop, isDesktop} = rwd;

  const checkDesktop = isLargeDesktop || isDesktop;

  console.log(isLargeDesktop, isDesktop);

  const fakeImages = [
    {
      id: 1,
      thumb: '/images/mobile/1.jpg',
      src: '',
      srcset: '/images/mobile/1.jpg 1100w, /images/1.jpg 4000w',
      alt: '',
    },
    {id: 2, thumb: '/images/mobile/2.jpg', src: '/images/2.jpg', srcset: '/images/2.jpg 896w', alt: ''},
    {id: 3, thumb: '/images/mobile/3.jpg', src: '/images/3.jpg', srcset: '/images/3.jpg 896w', alt: ''},
    {id: 4, thumb: '/images/mobile/4.jpg', src: '/images/4.jpg', srcset: '/images/4.jpg 896w', alt: ''},
  ];

  useEffect(() => {
    !checkDesktop ? setImage(false) : lightbox && openedImage && lightbox.current.focus();
  }, [checkDesktop, openedImage]);

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

        {children}

        <div className="grid-gallery">
          {fakeImages.map(el => (
            <div key={el.id} className="grid-item">
              <img onClick={() => checkDesktop && openLightbox(el.id)} src={el.thumb} alt={el.alt} />
            </div>
          ))}
        </div>
        {openedImage && checkDesktop && (
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
              srcSet={fakeImages[openedImage - 1].srcset}
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
