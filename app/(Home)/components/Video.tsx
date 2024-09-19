export function Video() {
  return (
    <video
      className="w-[90vw] h-[300px]   lg:w-[90vw] lg:h-[600px] object-fill rounded-xl"
      controls
      preload="auto"
    >
      <source src="/soundzz.mp4" type="video/mp4" />
      {/* <track
        src="/path/soundz.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      /> */}
      Your browser does not support the video tag.
    </video>
  );
}
