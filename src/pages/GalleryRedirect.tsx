import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GalleryRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/#proizvodi", { replace: true });
    setTimeout(() => {
      const element = document.getElementById("proizvodi");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [navigate]);

  return null;
};

export default GalleryRedirect;
