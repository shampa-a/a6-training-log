
import Hero from "@/components/home/Hero";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";

const getWorkouts = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await response.json();

  return data;
};

const HomePage = async () => {
  const workouts = await getWorkouts();

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Workout Library */}
      <WorkoutLibrary workouts={workouts} />
    </main>
  );
};

export default HomePage;
