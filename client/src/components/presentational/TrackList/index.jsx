import React from 'react';
import PropTypes from 'prop-types';

import Track from '../Track';
import Label from '../../presentational/Label';

const TrackList = (props) => {
  const { tracks, onTrackSelect } = props;

  const render = tracks.map(track => (
    <Track
      key={track.track_id}
      onTrackSelect={onTrackSelect}
      trackId={track.track_id}
    >
      <Label><h2>{track.track_title}</h2></Label>
      <Label><p>{track.artist_name}</p></Label>
      <span><Label><p>{track.track_duration}</p></Label></span>
    </Track>
  ));

  return (
    <ul>
      {render}
    </ul>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTrackSelect: PropTypes.func.isRequired,
};

export default TrackList;
