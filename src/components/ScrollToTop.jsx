import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    isVisible && (
      <button onClick={handleScrollToTop} className="scroll-button">
        ↑
      </button>
    )
  );
};
export default ScrollToTop;
