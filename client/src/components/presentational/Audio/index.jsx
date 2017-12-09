import React from 'react';
import PropTypes from 'prop-types';
//  import classNames from 'classnames';

const Audio = (props) => {
  const {
    audiofile,
    autoPlay,
    audio,
    onTimeUpdate,
  } = props;

  return (
    <div className="audio">
      <audio
        src={audiofile}
        autoPlay={autoPlay}
        controls
        ref={audio}
        onTimeUpdate={onTimeUpdate}
      >
        <track kind="captions" />
      </audio>
    </div>
  );
};

Audio.propTypes = {
  audiofile: PropTypes.string,
  autoPlay: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  audio: PropTypes.func,
  onTimeUpdate: PropTypes.func,
};

Audio.defaultProps = Object.assign({}, Audio.propTypes);

export default Audio;
