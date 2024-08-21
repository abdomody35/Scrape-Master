import { cardData } from "../types";
import Label from "./Label";

const Card = ({
  key,
  url,
  title,
  content,
  className,
  handleClick,
}: cardData) => {
  return (
    <div
      className={className ? className : "card"}
      key={key}
      onClick={handleClick}
    >
      <Label text="URL" data={url} />
      <Label text="Title" data={title} />
      <Label text="Content" data={content} />
    </div>
  );
};

export default Card;
