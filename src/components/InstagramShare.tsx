import React from 'react';
import { Share2 } from 'lucide-react';

interface InstagramShareProps {
  imageUrl: string;
  title: string;
  className?: string;
}

const InstagramShare: React.FC<InstagramShareProps> = ({ imageUrl, title, className }) => {
  const shareToInstagram = async () => {
    try {
      // Fetch the image and convert to blob
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Create a File object from the blob
      const filesArray = [
        new File([blob], `${title}.png`, {
          type: 'image/png',
          lastModified: new Date().getTime(),
        }),
      ];

      const shareData = {
        title: title,
        files: filesArray,
      };

      // Check if sharing is supported
      if (navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        console.log('Sharing not supported on this platform');
        // Fallback for desktop or unsupported browsers
        window.open(imageUrl, '_blank');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <button 
      onClick={shareToInstagram}
      className={`
        w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700
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
      Share to Instagram
    </button>
  );
};

export default InstagramShare;