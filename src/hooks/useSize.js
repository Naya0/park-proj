import { useState, useEffect } from "react";

const useSize = () => {
    const [windowSize, setWindowSize] = useState( window.innerWidth);
  
    useEffect(() => {
      const windowSizeHandler = () => {
        setWindowSize(window.innerWidth);
      };
      window.addEventListener("resize", windowSizeHandler);
  
      return () => {
        window.removeEventListener("resize", windowSizeHandler);
      };
    }, []);
  
    return windowSize;
  };
  
  export default useSize;