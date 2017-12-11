import React, { Component } from 'react';
import axios from 'axios';

import TrackList from '../../presentational/TrackList';
import TrackInformation from '../../presentational/TrackInformation';
import Player from '../../presentational/Player';

import tracklist from '../../../themes/sass/components/tracklist.scss';
import playerInfo from '../../../themes/sass/components/player-info.scss';
import button from '../../../themes/sass/components/button.scss';
import menucontainer from '../../../themes/sass/components/menucontainer.scss';

class MusicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        tracks: [],
        selectedTrack: {},
        state: 'playing',
        duration: 0,
        progress: '0',
      },
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3200/musicplayer/api/tracks')
      .then((res) => {
        const player = Object.assign({}, this.state.player, {
          tracks: res.data,
          selectedTrack: res.data[0],
        });
        this.setState({ player });
      });
  }

  getProgressValue = () => {
    this.progress.value = this.audio.currentTime / this.audio.duration;
    this.progress.addEventListener('click', this.handleOnSeek);
    return this.progress.value || '20';
  }


  handleOnPlay = () => {
    if (this.state.player.state === 'playing') {
      const player = Object.assign({}, this.state.player, { state: 'paused' });
      this.setState({ player });
      this.audio.pause();
    } else if (this.state.player.state === 'paused') {
      const player = Object.assign({}, this.state.player, { state: 'playing' });
      this.setState({ player });
      this.audio.play();
    }
  }


  handleOnSeek = (e) => {
    const percent = e.pageX / this.progress.offsetWidth;
    this.audio.currentTime = percent * this.audio.duration;
    this.progress.value = percent / 100;
    return this.progress.value || '20';
  }


  handleOnSelect = (e) => {
    if (this.state.player.state === 'paused') {
      this.state.player.state = 'playing';
    }
    const selectedTrack = this.state.player.tracks.filter(track =>
      track.track_id === e.currentTarget.dataset.id);
    const player = Object.assign({}, this.state.player, {
      selectedTrack: selectedTrack[0],
    });
    this.setState({ player });
  }

  handleTimeUpdate = () => {
    function timeFormat(time) {
      const hrs = Math.floor(time / 3600);
      const mins = Math.floor((time % 3600) / 60);
      const secs = Math.round(time % 60);

      let value = '';

      if (hrs > 0) {
        value += `${hrs}:${(mins < 10 ? 0 : '')}`;
      }
      value += `${mins}:${(secs < 10 ? '0' : '')}`;
      value += `${secs}`;
      return value;
    }
    const { duration, currentTime } = this.audio;
    const player = Object.assign({}, this.state.player, {
      duration: timeFormat((duration - currentTime)),
      progress: (this.audio.currentTime / this.audio.duration).toString(),
    });
    this.setState({ player });
  }

  render() {
    const style = {
      backgroundImage: `url(${this.state.player.selectedTrack.track_image_file})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };

    if (this.state.player.tracks.length === 0) {
      return (
        <div>
          <h1>Loading Player...</h1>
        </div>
      );
    }

    return (
      <div style={style} className={menucontainer.wrapper}>
        <div className={playerInfo.player_info_wrapper}>
          <Player
            onPlay={this.handleOnPlay}
            audioFile={this.state.player.selectedTrack.track_file}
            audio={(audio) => { this.audio = audio; }}
            progress={(progress) => { this.progress = progress; }}
            progressValue={this.state.player.progress}
            duration={this.state.player.duration}
            onTimeUpdate={this.handleTimeUpdate}
            onClick={this.getProgressValue}
            buttonClass={[
              button.buttonClass,
              (this.state.player.state === 'playing') ?
                button.activeClass :
                null,
            ]}
          />
          <TrackInformation track={this.state.player.selectedTrack} />
        </div>
        <TrackList
          onPlay={this.handleOnPlay}
          tracks={this.state.player.tracks}
          trackId={this.state.player.selectedTrack.track_id}
          onTrackSelect={this.handleOnSelect}
          itemClass={[
            tracklist.itemClass,
          ]}
        />
      </div>
    );
  }
}

export default MusicContainer;
