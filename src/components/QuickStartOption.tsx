import { QuickStartOptionsProps } from "../types";

const QuickStartOption = ({
  icon,
  title,
  description,
  handleClick,
}: QuickStartOptionsProps) => {
  return (
    <div
      className="flex flex-1 gap-3 rounded-lg border border-[#3c4753] bg-[#1c2126] p-4 flex-col cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="text-white"
        data-icon="Globe"
        data-size="24px"
        data-weight="regular"
      >
        <img src={icon} width="24px" height="24px" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-white text-base font-bold leading-tight">
          {title}
        </h2>
        <p className="text-[#9dabb8] text-sm font-normal leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default QuickStartOption;
