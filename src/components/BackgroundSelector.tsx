import React from 'react';

const colorClasses = {
  blue: 'bg-blue-700',
  pink: 'bg-pink-700',
  green: 'bg-green-700',
  yellow: 'bg-yellow-700',
  purple: 'bg-purple-700',
};

interface BackgroundSelectorProps {
  selectedBackground: string;
  onSelectBackground: (color: string) => void;
  className?: string;
}

const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({
  selectedBackground,
  onSelectBackground,
  className,
}) => {
  const colors = ['blue', 'pink', 'green', 'yellow', 'purple'];

  return (
    <div className={`mt-6 sm:mt-8 bg-gray-800 p-3 sm:p-4 rounded-xl ${className}`}>
      <h3 className="text-white mb-3 sm:mb-4 text-lg sm:text-xl">Background</h3>
      <div className="flex justify-between">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full ${colorClasses[color]} ${
              selectedBackground === color ? 'ring-4 ring-white' : ''
            }`}
            onClick={() => onSelectBackground(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSelector;