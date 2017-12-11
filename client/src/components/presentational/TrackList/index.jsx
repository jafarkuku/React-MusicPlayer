import React from 'react';
import PropTypes from 'prop-types';

import Track from '../Track';
import Button from '../../presentational/Button';

import tracklist from '../../../themes/sass/components/tracklist.scss';

const TrackList = (props) => {
  const {
    tracks,
    onTrackSelect,
    trackId,
    onPlay,
    itemClass,
    buttonClass,
  } = props;

  const render = tracks.map((track, i) => (
    <Track
      key={track.track_id}
      tabindex={i.toString()}
      onTrackSelect={onTrackSelect}
      trackId={track.track_id}
      itemClass={[itemClass, (track.track_id === trackId) ? tracklist.active : 'nope']}
    >
      <Button
        buttonClass={buttonClass}
        onClick={onPlay}
      />
      <div className={tracklist.artist_song}>
        <h3>{track.track_title}</h3>
        <p>{track.artist_name}</p>
      </div>
      <div className={tracklist.duration}><p>{track.track_duration}</p></div>
    </Track>
  ));

  return (
    <div className={tracklist.container}>
      <h3 className={tracklist.title}>Songs</h3>
      <ul>
        {render}
      </ul>
    </div>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  trackId: PropTypes.string,
  onPlay: PropTypes.func,
  itemClass: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  onTrackSelect: PropTypes.func,
  buttonClass: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.any,
  ]),
};

TrackList.defaultProps = Object.assign({}, TrackList.propTypes);

export default TrackList;
