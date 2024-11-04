import React, { useState } from 'react';
import WorkoutCard from './components/WorkoutCard';
import WorkoutTweet from './components/WorkoutTweet';
import BackgroundPattern from './components/BackgroundPattern';
import ShareButton from './components/ShareButton';
import LinkShare from './components/InstagramShare';

const gif_array = [
  '42OwvY1yJ43oZqpPwE',
  'WFDSuW3kg4dKMX4nYJ',
  'MVbhUJvmiZgzTXeWXY',
  'oRs9L5y198p9oCw8JW',
  'PgzSQB84aSzmvwWTmk',
  'ibAUdHQyIF8t5237uJ',
  'cKtrGGMCsmm3jfpq0l',
  'QTglP1Qq11Phd9ohPc',
  'PiqANNggX4tuAzu9gg'

  
];

{/* const caption_array = [
  "Impressive weight, but let’s hope you don’t start suing anyone who out-lifts you",
  "Lifting heavy, huh? Just don’t start taking other people's gym routines and calling them ‘collabs.’",
  "Cool, now try doing it without taking the credit for someone else’s PRs.",
  "Big lift! Just don’t be surprised if people start asking where their results went",
];

const caption_array = [
  "Nice lift, bro! Think you're gonna laugh it off if someone calls you out on that form?",
  "Lifting heavy, huh? Watch out, or you'll be dodging leg day questions next!",
  "Strong reps! Next thing, you'll be claiming it's historical!",
  "Big lift—bet you'll laugh it off if anyone asks the real weight, right?",
  "Impressive weight! But are those squats actually hitting depth, or what?",
  "Lifting hard today? Just don't disappear when it's time to spot someone, okay?",
  "Nice reps! Soon you'll be making speeches about how you *always* planned that weight.",
  "Solid weight! Let's see if you can keep it up or if that was a one-time flex.",
  "Big lifts—bet you'll say it's all part of a secret workout plan, huh?",
  "Crushing it! But let's see if that form holds up when no one's watching.",
]; */}

const caption_array= [
  "Nice lift! But let me guess, when it’s time to do leg day, you'll be… mysteriously unavailable.",
  "Strong reps, but careful—pretty soon, you’ll be giving speeches on why this was the most meaningful set.",
  "Big lift today! Just don’t break into that famous laugh if someone catches you skipping reps.",
  "Impressive weight! But watch out, or you’ll be dodging gym questions faster than a press conference.",
  "Solid PR—next thing, you’ll be telling us it’s historic lifting that weight.",
  "Crushing that lift! But let’s see if you actually hold that form when it’s not for the crowd.",
  "Big weights? Just don’t laugh it off if someone calls you out for missing depth.",
  "Great lift, but let’s be real—are we actually gonna see you doing squats again next week?",
  "Nice PR! But careful, soon you’ll be explaining why the plan was always to lift exactly that.",
  "Going big today! Just don’t expect anyone to forget if you skip leg day next.",
];



const gif = Math.floor(Math.random() * gif_array.length);
const caption = Math.floor(Math.random() * caption_array.length);

function App() {
  const [selectedBackground] = useState('blue');
  const gify = `https://i.giphy.com/media/${gif_array[gif]}/giphy.gif`;
  const weights = Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000;
  const bodyweights = 83;

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
            equivalentItem="Kamala Harrises"
            duration="1h 11m"
            exercises={4}
            records={3}
            backgroundColor={selectedBackground}
            opacity={90}
            imgurl={gify}
            caption={caption_array[caption]}
          />
        </div>

        {/* Share button with improved scaling */}
        <div className="w-full mb-8">
        <LinkShare url='https://lifting-temp.netlify.app/'  title={`GymStreak - ${weights}kg Workout Achievement!`} text="loool"/>
        </div>
      </div>
    </div>
  );
}

export default App;
