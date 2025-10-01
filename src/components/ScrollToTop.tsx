import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash in the URL, scroll to that element
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 100;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }, 100);
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
