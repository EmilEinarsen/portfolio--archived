import { RefObject, useEffect, useState } from 'react';

export const useHoverDirty = (ref: RefObject<Element>, enabled: boolean = true) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const onMouseOver = () => setValue(true);
    const onMouseOut = () => setValue(false);
		const { current } = ref

    if (enabled && current) {
      current.addEventListener('mouseover', onMouseOver);
      current.addEventListener('mouseout', onMouseOut);
    }

    return () => {
      if (enabled && current) {
        current.addEventListener('mouseover', onMouseOver);
        current.addEventListener('mouseout', onMouseOut);
      }
    };
  }, [enabled, ref]);

  return value;
};
