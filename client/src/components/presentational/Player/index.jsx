import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Audio from '../Audio';
import ProgressBar from '../ProgressBar';

import player from '../../../themes/sass/components/player.scss';

const Player = (props) => {
  const {
    buttonClass,
    onPlay,
    onClick,
    progressValue,
    audioFile,
    audio,
    progress,
    duration,
    onTimeUpdate,
  } = props;

  Player.propTypes = {
    buttonClass: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.any,
    ]),
    onPlay: PropTypes.func,
    audioFile: PropTypes.string,
    audio: PropTypes.func,
    progress: PropTypes.func,
    progressValue: PropTypes.string,
    onTimeUpdate: PropTypes.func,
    onClick: PropTypes.func,
    duration: PropTypes.string,
  };

  Player.defaultProps = Object.assign({}, Player.propTypes);

  return (
    <div className={player.player}>
      <Button
        onClick={onPlay}
        buttonClass={buttonClass}
      />
      <Audio
        audiofile={audioFile}
        audio={audio}
        onTimeUpdate={onTimeUpdate}
      />
      <ProgressBar
        className={player.progressbar}
        progress={progress}
        onClick={onClick}
        value={progressValue}
      />
      <h3>{duration || 0}</h3>
    </div>
  );
};

export default Player;
