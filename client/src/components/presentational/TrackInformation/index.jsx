import React from 'react';
import PropTypes from 'prop-types';
//  import classNames from 'classnames';

const TrackInformation = (props) => {
  const {
    track,
  } = props;

  TrackInformation.propTypes = {
    track: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
  };

  TrackInformation.defaultProps = Object.assign({}, TrackInformation.propTypes);

  return (
    <div>
      <h2>{track.track_title}</h2>
      <p>{track.artist_name}</p>
      <p>{track.track_favorites}</p>
      <p>{track.track_listens}</p>
      <p>{track.track_comments}</p>
    </div>
  );
};

export default TrackInformation;
