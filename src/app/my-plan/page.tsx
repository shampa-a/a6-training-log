
"use client";

import Link from "next/link";
import { useState } from "react";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  // Temporary data
  // Later, replace this with data from FitLogContext
  const plannedWorkouts: any[] = [];
  const savedWorkouts: any[] = [];

  const workouts =
    activeTab === "plan" ? plannedWorkouts : savedWorkouts;

  // Calculate metrics
  const totalExercises = plannedWorkouts.length;

  const totalMinutes = plannedWorkouts.reduce(
    (total, workout) => total + (workout.duration || 0),
    0
  );

  const totalCalories = plannedWorkouts.reduce(
    (total, workout) => total + (workout.caloriesBurned || 0),
    0
  );

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <section className="mb-10">
          <p className="mb-3 text-sm font-bold tracking-[0.25em] text-lime-400">
            FITLOG
          </p>

          <h1 className="text-5xl font-black uppercase tracking-tight sm:text-6xl">
            MY PLAN
          </h1>

          <p className="mt-4 max-w-xl text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        {/* Metrics */}
        <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-800 bg-gray-950 p-6">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Exercises
            </p>

            <p className="mt-2 text-4xl font-black">
              {totalExercises}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-950 p-6">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Minutes
            </p>

            <p className="mt-2 text-4xl font-black">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-950 p-6">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Calories
            </p>

            <p className="mt-2 text-4xl font-black">
              {totalCalories}
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="mb-8 flex gap-3 border-b border-gray-800 pb-4">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase transition ${
              activeTab === "plan"
                ? "bg-lime-400 text-black"
                : "border border-gray-700 text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase transition ${
              activeTab === "saved"
                ? "bg-lime-400 text-black"
                : "border border-gray-700 text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </section>

        {/* Workout List */}
        {workouts.length === 0 ? (
          <section className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 bg-gray-950 px-6 text-center">
            <p className="mb-3 text-sm font-bold tracking-[0.25em] text-lime-400">
              NOTHING HERE YET
            </p>

            <h2 className="mb-3 text-2xl font-black uppercase">
              Your {activeTab === "plan" ? "plan" : "saved workouts"} is empty
            </h2>

            <p className="mb-7 max-w-md text-gray-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="rounded-full bg-lime-400 px-6 py-3 font-bold uppercase text-black transition hover:bg-lime-300"
            >
              Go to Workouts
            </Link>
          </section>
        ) : (
          <section className="space-y-4">
            {workouts.map((workout) => (
              <article
                key={workout.id}
                className="flex flex-col gap-5 rounded-xl border border-gray-800 bg-gray-950 p-5 md:flex-row md:items-center"
              >
                {/* Thumbnail */}
                <div className="h-40 w-full overflow-hidden rounded-lg bg-gray-900 md:h-28 md:w-40">
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Workout Info */}
                <div className="flex-1">
                  <h2 className="text-xl font-black uppercase">
                    {workout.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {workout.equipment}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
                    <span>⏱ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-full border border-gray-700 px-4 py-2 text-sm font-bold uppercase hover:border-lime-400 hover:text-lime-400"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <>
                      <button className="rounded-full bg-lime-400 px-4 py-2 text-sm font-bold uppercase text-black hover:bg-lime-300">
                        Mark as Done
                      </button>

                      <button
                        className="rounded-full border border-red-500 px-4 py-2 text-sm font-bold text-red-400 hover:bg-red-500 hover:text-white"
                        aria-label={`Remove ${workout.name}`}
                      >
                        X
                      </button>
                    </>
                  )}
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;
