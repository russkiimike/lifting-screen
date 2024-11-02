import React from 'react';
import {
  Trophy,
  Clock,
  CheckSquare,
  Heart,
  MessageCircle,
  Share2,
} from 'lucide-react';

interface WorkoutCardProps {
  weight: number;
  equivalent: number;
  equivalentItem: string;
  duration: string;
  exercises: number;
  records: number;
  backgroundColor: string;
  opacity: number;
  imgurl: string;
  caption: string;
}

const WorkoutTweet: React.FC<WorkoutCardProps> = ({
  weight,
  equivalent,
  equivalentItem,
  duration,
  exercises,
  records,
  imgurl,
}) => {
  return (
    <div className="bg-white text-gray-900 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-start p-4">
        <img
          className="w-12 h-12 rounded-full mr-3"
          src="https://res.cloudinary.com/gymstreak/image/fetch/c_fit,q_auto,f_auto,dpr_auto/https://blog.gymstreak.com/content/images/2023/08/gymstreaklogo-2.svg"
          alt="GymStreak"
        />
        <div className="flex-1">
          <div className="flex items-center">
            <h2 className="font-bold mr-2">GymStreak</h2>
            <span className="text-blue-500">@gymstreak</span>
            <span className="mx-2 text-gray-500">·</span>
            <span className="text-gray-500">Just now</span>
          </div>

          {/* Main content */}
          <div className="mt-2 space-y-3">
            <p className="font-semibold text-xl">
              🏋️‍♂️ New Workout Achievement! 💪
            </p>
            <p>
              Just crushed a workout lifting {weight.toFixed(1)}kg - that's like
              lifting {equivalent} {equivalentItem}! Time to level up! 🚀
            </p>

            {/* Stats badges */}
            <div className="flex gap-3 flex-wrap">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                <Clock className="inline w-4 h-4 mr-1" /> {duration}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                <CheckSquare className="inline w-4 h-4 mr-1" /> {exercises}{' '}
                Exercises
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                <Trophy className="inline w-4 h-4 mr-1" /> {records} Records
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Workout Image */}
      <div className="px-4">
        <div className="rounded-xl overflow-hidden">
          <img
            src={imgurl}
            alt="Workout Achievement"
            className="w-full aspect-video object-cover"
          />
        </div>
      </div>

      {/* Engagement stats */}
      <div className="p-4 border-t border-gray-200 mt-3">
        <div className="flex justify-between text-gray-500">
          <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
            <span>2.4K</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>242</span>
          </button>
          <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>1.2K</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTweet;
