import React from 'react';
import ReactPlayer from 'react-player';
import './responsive-player.css';

const ResponsivePlayer = ({ url }) => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url="https://www.youtube.com/watch?v=4YBFhq-tYdM"
            width='100%'
            height='100%'
            playsinline={true}
            controls={true}
          />
        </div>
      )
  }

  export default ResponsivePlayer;