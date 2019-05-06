import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import renderImg from './RenderImages';

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3, link: '/en/artworks/introduction/', title: 'The forest' },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1, link: '/en/artworks/painting/', title: 'The mushroom' },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4, link: '/en/artworks/sculpture/', title: 'The lake' },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4, link: '/en/artworks/performance/', title: 'The river' },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4, link: '/en/artworks/interactivity/', title: 'The leaves' },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3, link: '/en/artworks/', title: 'The trees' },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4, link: '/en/artworks/', title: 'The firs' },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3, link: '/en/artworks/', title: 'The acorn' },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3, link: '/en/artworks/', title: 'The road' }
];

function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 500) columns = 2;
  if (containerWidth >= 900) columns = 3;
  if (containerWidth >= 1500) columns = 4;
  return columns;
}

class MasonryGal extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {

    return (

      <div className="container">
        <Gallery
        galleryStyle={{ backgroundColor: 'red' }}
        margin={10}
        photos={photos}
        onClick={this.openLightbox}
        direction={'column'}
        columns={columns}
        renderImage={renderImg}
        />
        <Lightbox
          theme={{ container: { background: 'rgba(0, 0, 0, 0.85)' } }}
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )

  }
}

export default MasonryGal;
