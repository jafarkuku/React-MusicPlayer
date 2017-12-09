import React from 'react';
import PropTypes from 'prop-types';
//  import classNames from 'classnames';

const Track = (props) => {
  const {
    onTrackSelect,
    trackId,
    children,
  } = props;

  Track.propTypes = {
    onTrackSelect: PropTypes.func,
    trackId: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
  };

  Track.defaultProps = Object.assign({}, Track.propTypes);

  return (
    <li
      aria-hidden
      data-id={trackId}
      onClick={onTrackSelect}
    >
      {children}
    </li>
  );
};

export default Track;
