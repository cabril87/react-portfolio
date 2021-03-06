import { useLayoutEffect, useState } from 'react';

 const useWindowPosition = (id, height, elements = 1)  => {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    const updatePosition = () => {
      try {
        const offetSetHeight = window.document.getElementById(id).offsetHeight;
        if (window.pageYOffset > offetSetHeight * elements * height) {
          setAnimation(true);
        }
      } catch (err) {
        setAnimation(false);
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id, height, elements]);
  return animation;
}

export default useWindowPosition;