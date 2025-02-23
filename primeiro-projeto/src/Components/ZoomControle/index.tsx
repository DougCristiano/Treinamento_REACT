import { useEffect } from 'react';

const ZoomControle = () => {
  useEffect(() => {
    document.body.style.zoom = "110%";
  }, []);
  
  return null;
};

export default ZoomControle;