import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 justify-center">
      <button
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default GoBackButton;
