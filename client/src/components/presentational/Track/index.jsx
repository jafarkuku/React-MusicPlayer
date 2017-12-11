import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Track = (props) => {
  const {
    onTrackSelect,
    trackId,
    tabindex,
    children,
    itemClass,
  } = props;

  Track.propTypes = {
    onTrackSelect: PropTypes.func,
    tabindex: PropTypes.string,
    trackId: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    itemClass: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  };

  Track.defaultProps = Object.assign({}, Track.propTypes);

  return (
    <li
      aria-hidden
      tabIndex={tabindex}
      data-id={trackId}
      onClick={onTrackSelect}
      className={classNames([
        itemClass,
      ])}
    >
      {children}
    </li>
  );
};

export default Track;
