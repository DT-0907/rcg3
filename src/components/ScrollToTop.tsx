import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    if (navigationType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, navigationType]);

  return null;
};

export default ScrollToTop;
