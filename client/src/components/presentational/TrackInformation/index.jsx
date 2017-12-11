import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

// import Icon from '../../presentational/Icon';
import trackInfo from '../../../themes/sass/components/trackInformation.scss';

const TrackInformation = (props) => {
  const {
    track,
  } = props;

  TrackInformation.propTypes = {
    track: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
  };

  TrackInformation.defaultProps = Object.assign({}, TrackInformation.propTypes);

  return (
    <div className={trackInfo.wrapper}>
      <h2>{track.track_title}</h2>
      <p>{track.artist_name}</p>
    </div>
  );
};

export default TrackInformation;
