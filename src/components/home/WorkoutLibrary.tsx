
import WorkoutCard from "./WorkoutCard";

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

interface WorkoutLibraryProps {
  workouts: Workout[];
}

const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
  return (
    <section
      id="library"
      className="bg-black px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-lime-400">
            FITLOG LIBRARY
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
            The Library
          </h2>

          <p className="mt-3 text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Grid */}
        {workouts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-gray-800 bg-gray-950 px-6 py-16 text-center">
            <h3 className="text-2xl font-black uppercase">
              No Workouts Found
            </h3>

            <p className="mt-3 text-gray-500">
              We couldn't find any workouts in the library.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkoutLibrary;
