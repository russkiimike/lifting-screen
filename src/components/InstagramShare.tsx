import React from 'react';
import { Share2 } from 'lucide-react';

interface ShareProps {
  url: string;
  title: string;
  text: string;
  className?: string;
}

const LinkShare: React.FC<ShareProps> = ({ url, title, text, className }) => {
  const shareData = {
    title: title,
    text: text,
    url: url,
  };

  const shareLink = async () => {
    try {
      // Attempt to share content
      await navigator.share(shareData);
      console.log('Content shared successfully');
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (
    <button 
      onClick={shareLink}
      className={`
        w-full bg-blue-600
        text-white font-medium
        px-6 py-4 sm:py-5 lg:py-6
        rounded-2xl lg:rounded-3xl
        flex items-center justify-center 
        gap-3 transition-all duration-300
        text-lg sm:text-xl lg:text-2xl
        shadow-lg hover:shadow-xl
        transform hover:scale-[1.02]
        ${className}
      `}
    >
      <Share2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
      Share Achievement
    </button>
  );
};

export default LinkShare;
