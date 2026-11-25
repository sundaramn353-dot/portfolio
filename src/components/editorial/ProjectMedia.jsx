/** One fixed landscape frame; preserve every source with contain sizing. */
export default function ProjectMedia({ image, video, poster, alt, imageWidth, imageHeight, caption }) {
  return (
    <figure className="project-media">
      <div className="project-visual">
        {video ? (
          <video controls playsInline preload="metadata" poster={poster} width={imageWidth} height={imageHeight} aria-label={alt} tabIndex={0}>
            <source src={video} type="video/mp4" />
            Your browser does not support embedded video. <a href={video}>Download the simulation video</a>.
          </video>
        ) : (
          <img src={image} alt={alt} loading="lazy" decoding="async" width={imageWidth} height={imageHeight} />
        )}
      </div>
      {caption && <figcaption>{caption}{video && <> · <a href={video}>Open video</a></>}</figcaption>}
    </figure>
  );
}
