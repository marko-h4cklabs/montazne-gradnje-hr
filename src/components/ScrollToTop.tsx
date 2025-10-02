import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Special case for #kontakt - scroll to the very bottom
      if (hash === "#kontakt") {
        setTimeout(() => {
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }, 100);
      } else if (hash === "#posalji-upit") {
        // Special case for #posalji-upit - center it in viewport
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - window.innerHeight / 3;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }, 100);
        }
      } else {
        // For other hashes, scroll to that element with offset
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 100;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }, 100);
        }
      }
    } else {
      // Otherwise, reset scroll to top on route change
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
