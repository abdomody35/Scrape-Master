import { ScrapeOptionsProps } from "../types";
import { isSinglePage, isList, isScope, isRegex } from "../utils/scrape";
import ExtractionOptions from "./ExtractionOptions";

const ScrapeOptions = ({
  type,
  setUrl,
  setWhiteList,
  setBlackList,
  modes,
  setModes,
}: ScrapeOptionsProps) => {
  const singlePageOptions = (
    <>
      <input
        className="input"
        placeholder="URL"
        type="text"
        onChange={(e) => setUrl(e.target.value)}
      />
      <ExtractionOptions modes={modes} setModes={setModes} />
    </>
  );

  const listOptions = (
    <>
      <textarea
        className="input"
        placeholder="URLs (one per line)"
        onChange={(e) => setWhiteList(e.target.value)}
      />
      <ExtractionOptions modes={modes} setModes={setModes} />
    </>
  );

  const scopeOptions = (
    <>
      <input
        className="input"
        placeholder="Base URL"
        type="text"
        onChange={(e) => setUrl(e.target.value)}
      />
      <ExtractionOptions modes={modes} setModes={setModes} />
      <textarea
        className="input"
        placeholder="Scopes (one per line)"
        onChange={(e) => setWhiteList(e.target.value)}
      />
      <textarea
        className="input"
        placeholder="Scopes to exclude (one per line)"
        onChange={(e) => setBlackList(e.target.value)}
      />
    </>
  );

  const regexOptions = (
    <>
      <input
        className="input"
        placeholder="Base URL"
        type="text"
        onChange={(e) => setUrl(e.target.value)}
      />
      <ExtractionOptions modes={modes} setModes={setModes} />
      <textarea
        className="input"
        placeholder="Regex patterns (one per line)"
        onChange={(e) => setWhiteList(e.target.value)}
      />
      <textarea
        className="input"
        placeholder="Regex patterns to exclude (one per line)"
        onChange={(e) => setBlackList(e.target.value)}
      />
    </>
  );

  if (isSinglePage(type)) {
    return singlePageOptions;
  } else if (isList(type)) {
    return listOptions;
  } else if (isScope(type)) {
    return scopeOptions;
  } else if (isRegex(type)) {
    return regexOptions;
  }

  return null;
};

export default ScrapeOptions;
