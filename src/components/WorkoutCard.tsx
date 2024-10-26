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
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  weight,
  equivalent,
  equivalentItem,
  duration,
  exercises,
  records,
  backgroundColor,
  opacity,
  imgurl,
}) => {
  return (
    <div className="bg-gray-900 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 w-full text-white shadow-lg bg-opacity-80 mt-20">
      <div className="flex justify-between items-end mb-6">
        <img
          className="h-9"
          src="https://res.cloudinary.com/gymstreak/image/fetch/c_fit,q_auto,f_auto,dpr_auto/https://blog.gymstreak.com/content/images/2023/08/gymstreaklogo-2.svg"
          alt="GymStreak"
        />
        <span className="bg-blue-600 text-sm sm:text-base lg:text-lg py-2 px-2 rounded-full font-medium">
          Workout Completed
        </span>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {weight.toFixed(1)} kg Lifted!
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-2">
          That is the equivalent of lifting:
        </p>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          {equivalent.toLocaleString()} {equivalentItem}
        </p>
      </div>

      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-sm lg:max-w-md overflow-hidden rounded-2xl">
          <img
            src={imgurl}
            alt="Achievement"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
      <div className="text-center mb-8">
        <p className="text-lg font-bold sm:text-xl lg:text-2xl text-gray-300 mb-2">
          "Careful—lift that much and you might start feeling entitled to take
          credit for other people's gains!"
        </p>
      </div>
    </div>
  );
};

export default WorkoutCard;
