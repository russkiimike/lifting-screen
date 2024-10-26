import React from 'react';

interface BackgroundUrlProps {
  imgurl: string;
}

const BackgroundPattern: React.FC<BackgroundUrlProps> = ({ imgurl }) => {
  return (
    <div className="fixed inset-0 z-0">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url(${imgurl})`,
          backgroundSize: '350px 350px',
          backgroundPosition: 'center',
          filter: 'blur(5px)',
        }}
      />
      <div className="absolute inset-0 " />
    </div>
  );
};

export default BackgroundPattern;
