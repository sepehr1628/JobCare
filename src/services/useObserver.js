import { useEffect, useRef, useState } from "react";

const useObserver = (threshold) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const ref = useRef(null);
  const curRef = ref.current;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIntersecting(true);
        if (isIntersecting) observer.unobserve(entry.target);
      },
      { threshold }
    );
    if (curRef) {
      observer.observe(curRef);
    }

    return () => {
      if (curRef) {
        observer.unobserve(curRef);
      }
    };
  }, [curRef, threshold, isIntersecting]);

  return [ref, isIntersecting];
};

export default useObserver;
