import Image from "next/image";
import Link from "next/link";

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
};

const Library = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="bg-[#171717] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-gray-400">
            Explore workouts for every major muscle group.
          </p>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {workouts.map((workout) => (
            <Link
              key={workout.id}
              href={`/workouts/${workout.id}`}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#202020] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50"
            >

              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#252525]">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">

                {/* Muscle Groups */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {workout.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full border border-[#ccff00]/40 px-3 py-1 text-xs font-semibold uppercase text-[#ccff00]"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Workout Name */}
                <h3 className="text-lg font-bold uppercase">
                  {workout.name}
                </h3>

                {/* Difficulty */}
                <p className="mt-2 text-sm font-medium text-[#ccff00]">
                  {workout.difficulty}
                </p>

                {/* Equipment */}
                <p className="mt-2 text-sm text-gray-400">
                  {workout.equipment}
                </p>

                {/* Description */}
                <p className="mt-3 line-clamp-2 text-sm text-gray-400">
                  {workout.description}
                </p>

                {/* Workout Stats */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-xs text-gray-400">

                  <span>
                    ⏱️ {workout.duration} min
                  </span>

                  <span>
                    🔥 {workout.caloriesBurned} kcal
                  </span>

                  <span>
                    🏋️ {workout.sets} sets
                  </span>

                  <span>
                    🔁 {workout.reps} reps
                  </span>

                </div>

                {/* Rating */}
                <div className="mt-4 border-t border-white/10 pt-4">
                  <span className="text-sm">
                    ⭐ {workout.rating}
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Library;
