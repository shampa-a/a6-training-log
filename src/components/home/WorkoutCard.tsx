import Image from "next/image";
import Link from "next/link";

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
}

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 transition duration-300 hover:-translate-y-1 hover:border-lime-400"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups?.map((group) => (
            <span
              key={group}
              className="rounded-full border border-lime-400/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-400"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h2 className="text-xl font-black uppercase leading-tight transition group-hover:text-lime-400">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-sm text-gray-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-800 pt-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <span aria-hidden="true">◷</span>
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <span aria-hidden="true">🔥</span>
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <span aria-hidden="true">★</span>
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
