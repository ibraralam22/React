import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({placeholderSrc, placeholderStyle, placeholderClassName, className, src}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState("");
  const placeholderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setView(src);
        observer.unobserve(placeholderRef.current);
      }
    });

    if (placeholderRef && placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }
  });

  return (
    <>
      {isLoading && (
        <img
          src={placeholderSrc}
          alt=""
          style={placeholderStyle}
          className={placeholderClassName}
          ref={placeholderRef}
        />
      )}
      <img
        src={view}
        className={isLoading ? 'hidden' : className}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export default LazyImage;
