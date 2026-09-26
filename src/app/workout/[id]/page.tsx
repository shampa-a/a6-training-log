
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  difficulty?: string;
  sets?: number;
  reps?: string;
  description?: string;
  instructions?: string[];
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async (id: string): Promise<Workout> => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  // Some APIs return the workout directly,
  // while others return it inside a data property.
  return data.data || data;
};

const WorkoutDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase text-gray-400 transition hover:text-lime-400"
        >
          ← Back to Library
        </Link>

        {/* Main Content */}
        <section className="grid gap-8 lg:grid-cols-2">

          {/* Left Side - Image */}
          <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-950">
            <div className="relative min-h-[400px] w-full lg:min-h-[650px]">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center">

            {/* Category Tags */}
            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups?.map((group) => (
                <span
                  key={group}
                  className="rounded-full border border-lime-400 px-3 py-1 text-xs font-bold uppercase text-lime-400"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-5 leading-7 text-gray-400">
              {workout.description ||
                "A focused workout designed to help you build strength, improve performance, and train with intent."}
            </p>

            {/* Key Specs */}
            <div className="mt-8 rounded-xl border border-gray-800 bg-gray-950">
              <h2 className="border-b border-gray-800 px-5 py-4 text-sm font-bold tracking-[0.2em] text-lime-400">
                KEY SPECS
              </h2>

              <div className="divide-y divide-gray-800">
                <div className="flex justify-between px-5 py-4">
                  <span className="text-gray-500">EQUIPMENT</span>
                  <span className="text-right font-medium">
                    {workout.equipment}
                  </span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-gray-500">DIFFICULTY</span>
                  <span>{workout.difficulty || "Intermediate"}</span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-gray-500">SETS</span>
                  <span>{workout.sets || 4}</span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-gray-500">REPS</span>
                  <span>{workout.reps || "6-8"}</span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-gray-500">DURATION</span>
                  <span>{workout.duration} min</span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-gray-500">CALORIES</span>
                  <span>{workout.caloriesBurned} kcal</span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-gray-500">RATING</span>
                  <span>★ {workout.rating}</span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8">
              <h2 className="mb-4 text-sm font-bold tracking-[0.2em] text-lime-400">
                INSTRUCTIONS
              </h2>

              <ol className="space-y-4">
                {(workout.instructions || [
                  "Set up the required equipment and get into the starting position.",
                  "Perform the movement with controlled and steady form.",
                  "Keep your core engaged throughout the exercise.",
                  "Return to the starting position and repeat for the required reps.",
                ]).map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-4 text-gray-400"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400 text-sm font-black text-black">
                      {index + 1}
                    </span>

                    <span className="leading-7">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="flex-1 rounded-full bg-lime-400 px-6 py-3 font-bold uppercase text-black transition hover:bg-lime-300"
              >
                + Add to today's plan
              </button>

              <button
                type="button"
                className="flex-1 rounded-full border border-gray-700 px-6 py-3 font-bold uppercase transition hover:border-lime-400 hover:text-lime-400"
              >
                ♡ Save for later
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;