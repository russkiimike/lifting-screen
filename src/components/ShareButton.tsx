import React from 'react';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ className }) => {
  return (
    <button 
      className={`
        w-full bg-blue-600 hover:bg-blue-700 
        text-white font-medium
        px-6 py-4 sm:py-5 lg:py-6
        rounded-2xl lg:rounded-3xl
        flex items-center justify-center 
        gap-3 transition-colors
        text-lg sm:text-xl lg:text-2xl
        ${className}
      `}
    >
      <Share2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
      Share Achievement
    </button>
  );
};

export default ShareButton;