import React, { useState } from 'react';
import WorkoutCard from './components/WorkoutCard';
import WorkoutTweet from './components/WorkoutTweet';
import BackgroundPattern from './components/BackgroundPattern';
import ShareButton from './components/ShareButton';
import InstagramShare from './components/InstagramShare';

const gif_array = [
  'tFqd8tETnLISBqJ7an',
  '8dr5eSrrKB7Ou4dBxK',
  'pb38y9dUMDC71Pbmzj',
  'oU44XTUcy9hhQvrAct',
];

const gif = Math.floor(Math.random() * gif_array.length);

function App() {
  const [selectedBackground] = useState('blue');
  const gify = `https://i.giphy.com/media/${gif_array[gif]}/giphy.gif`;
  const weights = Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000;
  const bodyweights = 90;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start p-4 sm:p-6 lg:p-8 overflow-hidden relative">
      <BackgroundPattern imgurl={gify} />

      {/* Main content container with improved scaling */}
      <div className="w-full max-w-xl 2xl:max-w-xl flex flex-col gap-8 mt-6 sm:mt-8 lg:mt-12 relative z-10">
        {/* Logo section */}

        {/* Workout card with improved scaling */}
        <div className="w-full">
          <WorkoutCard
            weight={weights}
            equivalent={Math.round(weights / bodyweights)}
            equivalentItem="Diddys"
            duration="1h 11m"
            exercises={4}
            records={3}
            backgroundColor={selectedBackground}
            opacity={90}
            imgurl={gify}
          />
        </div>

        {/* Share button with improved scaling */}
        <div className="w-full mb-8">
        <InstagramShare 
            imageUrl={gify}
            title={`GymStreak - ${weights}kg Workout Achievement!`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
