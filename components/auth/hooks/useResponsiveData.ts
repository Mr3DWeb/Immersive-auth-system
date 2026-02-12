import { useState, useEffect } from 'react';

type ResponsiveValues = {
  planeArgs: { x: number; y: number };
  cameraZ: number;
  isMobile: boolean;
};

function getValues(): ResponsiveValues {
  //Server
  if (typeof window === 'undefined') {
    return {
      planeArgs: { x: 1, y: 1 },
      cameraZ: 6,
      isMobile: false,
    };
  }

  const width = window.innerWidth;

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1200;

  if (isMobile) {
    return {
      planeArgs: { x: 2.5, y: 3 },
      cameraZ: 3,
      isMobile: true,
    };
  }

  if (isTablet) {
    return {
      planeArgs: { x: 4, y: 3 },
      cameraZ: 3,
      isMobile: false,
    };
  }

  // Desktop
  return {
    planeArgs: { x: 6, y: 3.2 },
    cameraZ: 3,
    isMobile: false,
  };
}

function useResponsiveData() {
  const [data, setData] = useState<ResponsiveValues>(getValues());

  useEffect(() => {
    const handleResize = () => {
      setData(getValues());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return data;
}

export default useResponsiveData;
