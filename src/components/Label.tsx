import { LabelData } from "../types";

const Label = ({ text, data }: LabelData) => {
  return (
    data && (
      <p>
        <strong>{text}:</strong> {data}
      </p>
    )
  );
};

export default Label;
