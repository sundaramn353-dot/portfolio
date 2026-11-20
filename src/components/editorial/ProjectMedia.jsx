import { useRef } from 'react';
import { useSurfaceMotion } from '../../hooks/useSurfaceMotion.js';

/** Shared landscape image treatment; no padded wrapper or background panel. */
export default function ProjectMedia({ image, video, poster, alt, imageWidth, imageHeight, imageFit = 'cover', imagePosition = 'center', caption }) {
  const interaction = useRef(null);
  useSurfaceMotion(interaction);
  return (
    <figure className="project-media">
      <div className="project-entrance" data-reveal="media">
        <div className="project-interaction" ref={video ? undefined : interaction}>
          <div className="project-tilt">
            <div className={`project-visual${video ? ' project-video-frame' : ''}`}>
              {video ? (
                <video id="simulation-demo" controls playsInline preload="metadata" poster={poster} width={imageWidth} height={imageHeight} aria-label={alt} tabIndex={0}>
                  <source src={video} type="video/mp4" />
                  Your browser does not support embedded video. <a href={video}>Download the simulation video</a>.
                </video>
              ) : (
                <img src={image} alt={alt} loading="lazy" decoding="async" width={imageWidth} height={imageHeight} style={{ objectFit: imageFit, objectPosition: imagePosition }} />
              )}
            </div>
          </div>
        </div>
      </div>
      {caption && <figcaption>{caption}{video && <> · <a href={video}>Open video</a></>}</figcaption>}
    </figure>
  );
}
