import React from 'react';

import videoBack from '../../public/4K_19.mp4';
import { FullscreenBg, FullscreenBgVideo } from './BackGroundVideoStyle';

const BackGroundVideo = () => (
  <>
    <FullscreenBg>
      <FullscreenBgVideo loop autoPlay>
        <source src={videoBack} type="video/mp4" />
      </FullscreenBgVideo>
    </FullscreenBg>
  </>
);

export default BackGroundVideo;
