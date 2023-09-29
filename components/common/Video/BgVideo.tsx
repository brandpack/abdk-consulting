import React from 'react';

const BgVideo = () => {

	const video = { link: require( '@/public/BgVideo.webm' ) };

	return (
		<div className={'videoWrapper'}>
			<video className={ 'bgVideo' } autoPlay muted playsInline loop>
				<source src={ video.link } type="video/mp4"/>
				<source src={ video.link } type="video/webm"/>
			</video>
		</div>
	);
};

export default BgVideo;