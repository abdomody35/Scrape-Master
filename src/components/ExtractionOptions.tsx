import { useState } from "react";

interface ExtractOptionsProps {
  modes: any;
  setModes: (modes: any) => void;
}

const ExtractionOptions = ({ modes, setModes }: ExtractOptionsProps) => {
  const [content, setContent] = useState(false);
  const [images, setImages] = useState(false);
  const [videos, setVideos] = useState(false);
  const [audios, setAudios] = useState(false);
  const [links, setLinks] = useState(false);

  const handleChange = (item: string) => {
    switch (item) {
      case "content":
        setContent(!content);
        break;
      case "images":
        setImages(!images);
        break;
      case "videos":
        setVideos(!videos);
        break;
      case "audios":
        setAudios(!audios);
        break;
      case "links":
        setLinks(!links);
        break;
      default:
        break;
    }
    setModes({ ...modes, [item]: !modes[item] });
  };

  return (
    <>
      <p className="text-center text-white tracking-light text-[32px] font-bold leading-tight">
        What would you like to get?
      </p>
      <div className="checkbox-group gap-3 justify-center">
        <label>
          <input
            type="checkbox"
            name="item"
            value="content"
            checked={content}
            onChange={() => handleChange("content")}
          />
          Content
        </label>
        <label>
          <input
            type="checkbox"
            name="item"
            value="images"
            checked={images}
            onChange={() => handleChange("images")}
          />
          Images
        </label>
        <label>
          <input
            type="checkbox"
            name="item"
            value="videos"
            checked={videos}
            onChange={() => handleChange("videos")}
          />
          Videos
        </label>
        <label>
          <input
            type="checkbox"
            name="item"
            value="audio"
            checked={audios}
            onChange={() => handleChange("audios")}
          />
          Audios
        </label>
        <label>
          <input
            type="checkbox"
            name="item"
            value="links"
            checked={links}
            onChange={() => handleChange("links")}
          />
          Links
        </label>
      </div>
    </>
  );
};

export default ExtractionOptions;
