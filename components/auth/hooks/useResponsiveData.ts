type ResponsiveValues = {
  planeArgs: { x: number; y: number };
  cameraZ: number;
};

function useResponsiveData(): ResponsiveValues{
  if (typeof window === 'undefined') {
    return {
      planeArgs: { x: 1, y: 1 },
      cameraZ: 6,
    };
  }
  const width = window.innerWidth;

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1200;

  if (isMobile) {
    return {
      planeArgs: { x: 2.5, y: 3 },
      cameraZ: 3,
    };
  }

  if (isTablet) {
    return {
      planeArgs: { x: 4, y: 3 },
      cameraZ: 3,
    };
  }

  //Desktop
  return {
    planeArgs: { x: 6, y: 3.2 },
    cameraZ: 3,
  };
}

export default useResponsiveData;