import React from 'react';
import PropTypes from 'prop-types';
import styles from './Interactive.module.scss';

const Interactive = ({ iframeSrc, height, width, titleText }) => (
  <div className={styles.InteractiveMedia} style={{ paddingBottom: `${(height / width) * 100}%` }}>
    <iframe src={iframeSrc} title={titleText} />
  </div>
);

Interactive.propTypes = {
  iframeSrc: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  titleText: PropTypes.string,
};

Interactive.defaultProps = {
  titleText: 'Interactive Media',
};

export default Interactive;
