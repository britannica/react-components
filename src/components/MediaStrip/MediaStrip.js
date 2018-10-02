
import classNames from 'classnames';
import React from 'react';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';
import Thumbnail from '../Thumbnail/Thumbnail';
import { MediaStripNextArrow, MediaStripPreviousArrow } from './media-strip-components/media-strip-components';
import styles from './MediaStrip.scss';

const MediaStrip = ({ handleCarouselPagination, mediaIndex, mediaStrip, slideIndex, slidesToShow, ThumbnailComponent }) => {
  const hasArrows = mediaStrip.length > slidesToShow;

  return (
    <div className={styles.MediaStrip}>
      <Carousel
        slideIndex={slideIndex}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToShow}
        cellSpacing={5}
        heightMode="first"
        initialSlideHeight={75}
        renderBottomCenterControls={null}
        renderCenterLeftControls={hasArrows ? MediaStripPreviousArrow : null}
        renderCenterRightControls={hasArrows ? MediaStripNextArrow : null}
        afterSlide={handleCarouselPagination}
      >
        {mediaStrip.map((thumbnail, i) => (
          <Thumbnail
            key={thumbnail.mediaId}
            container={styles.MediaStrip}
            className={classNames({ selected: i === mediaIndex })}
            {...thumbnail}
            height={75}
            width={null}
            ThumbnailComponent={ThumbnailComponent}
          />
        ))}
      </Carousel>
    </div>
  );
};

MediaStrip.propTypes = {
  handleCarouselPagination: PropTypes.func.isRequired,
  mediaIndex: PropTypes.number,
  mediaStrip: PropTypes.arrayOf(PropTypes.shape(Thumbnail.propTypes)).isRequired,
  slideIndex: PropTypes.number,
  slidesToShow: PropTypes.number.isRequired,
  ThumbnailComponent: Thumbnail.propTypes.ThumbnailComponent,
};

MediaStrip.defaultProps = {
  mediaIndex: 0,
  slideIndex: 0,
  ThumbnailComponent: Thumbnail.defaultProps.ThumbnailComponent,
};

export default MediaStrip;
