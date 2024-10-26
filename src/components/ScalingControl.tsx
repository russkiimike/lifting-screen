import React from 'react';

interface ScalingControlProps {
  value: number;
  onChange: (value: number) => void;
}

const ScalingControl: React.FC<ScalingControlProps> = ({ value, onChange }) => {
  return (
    <div className="mt-6 bg-gray-800 p-4 rounded-xl text-white">
      <h3 className="text-lg mb-2">Scaling Factor</h3>
      <input
        type="range"
        min="0.5"
        max="1.5"
        step="0.1"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full"
      />
      <div className="text-center mt-2">{value.toFixed(1)}x</div>
    </div>
  );
};

export default ScalingControl;