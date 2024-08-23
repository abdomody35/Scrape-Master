import logo from "../assets/logo.png";
import bell from "../assets/bell.png";
import questionMark from "../assets/questionMark.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#293038] px-10 py-3">
      <a href="/">
        <div className="flex items-center gap-4 text-white">
          <div className="size-4">
            <img src={logo} />
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            ScrapeMaster
          </h2>
        </div>
      </a>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-white text-sm font-medium leading-normal" href="/">
            Dashboard
          </a>
          <a
            className="text-white text-sm font-medium leading-normal"
            href="https://github.com/abdomody35/Scrape-Master-AI/blob/main/README.md"
          >
            API Docs
          </a>
        </div>
        <div className="flex gap-2">
          <a href="/scrape">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">New scrape</span>
            </button>
          </a>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#293038] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div
              className="text-white"
              data-icon="Bell"
              data-size="20px"
              data-weight="regular"
            >
              <img src={bell} width="20px" height="20px" />
            </div>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#293038] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div
              className="text-white"
              data-icon="Question Mark"
              data-size="20px"
              data-weight="regular"
            >
              <img src={questionMark} width="20px" height="20px" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
