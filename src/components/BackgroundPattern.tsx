import React, { useEffect, useRef, useState } from 'react';

interface BackgroundUrlProps {
  imgurl: string;
}

const BackgroundPattern: React.FC<BackgroundUrlProps> = ({ imgurl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url(${imgurl})`,
          backgroundSize: `${containerWidth}px auto`, // Adjust height as needed
          backgroundPosition: 'center',
          filter: 'blur(10px)',
        }}
      />
      <div className="absolute inset-0 " />
    </div>
  );
};

export default BackgroundPattern;
