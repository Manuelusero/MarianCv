import React from 'react';
import './VideoGallery.css';

const videos = [
  {
    id: 1,
    thumbnail: '/PortadasReel/PORTADA REEL-1.jpg',
    link: 'https://www.instagram.com/p/C3iqEv8OFyh/'
  },
  {
    id: 2,
    thumbnail: '/PortadasReel/PORTADA REEL-10.jpg',
    link: 'https://www.instagram.com/p/DKGcdW5NKxs/'
  },
  {
    id: 3,
    thumbnail: '/PortadasReel/PORTADA REEL-9.jpg',
    link: 'https://www.instagram.com/p/DJ754zcNLn2/'
  },
  {
    id: 4,
    thumbnail: '/PortadasReel/PORTADA REEL-5.jpg',
    link: 'https://www.instagram.com/p/DHrx9c_tj_L/'
  },
  {
    id: 5,
    thumbnail: '/PortadasReel/PORTADA REEL-3.jpg',
    link: 'https://www.instagram.com/p/C-JPctLSIi5/'
  },
    {
    id: 6,
    thumbnail: '/PortadasReel/PORTADA REEL-6.jpg',
    link: 'https://www.instagram.com/p/DG1tEsoNp_X/'
  },
    {
    id: 7,
    thumbnail: '/PortadasReel/PORTADA REEL-7.jpg',
    link: 'https://www.instagram.com/p/C9Qsdkut_mR/'
  },
    {
    id: 8,
    thumbnail: '/PortadasReel/PORTADA REEL-8.jpg',
    link: 'https://www.instagram.com/p/DAjsBKDyzVn/'
  },
    {
    id: 9,
    thumbnail: '/PortadasReel/PORTADA REEL-2.jpg',
    link: 'https://www.instagram.com/p/DJp2WNPt5RJ/'
  },
    {
    id: 10,
    thumbnail: '/PortadasReel/PORTADA REEL-4.jpg',
    link: 'https://www.instagram.com/p/C5COmH9OJvY/'
  },
    {
    id: 11,
    thumbnail: '/PortadasReel/PORTADA REEL-11.JPG',
    link: 'https://www.instagram.com/p/DIzhCqRy3Pw/'
  },
    {
    id: 12,
    thumbnail: '/PortadasReel/PORTADA REEL-12.jpg',
    link: 'https://www.instagram.com/p/DJGFAVnthXs/'
  },
    {
    id: 13,
    thumbnail: '/PortadasReel/PORTADA REEL-13.jpg',
    link: 'https://www.instagram.com/p/DJzVfIptqoC/'
  },
  // Más videos si querés
];

const VideoGallery = () => {
  return (
    <section className="video-gallery">
      <div className="video-scroll">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <img src={video.thumbnail} alt="video thumbnail" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
