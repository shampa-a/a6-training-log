
const Loading = () => {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Hero Skeleton */}
        <section className="mb-16 grid min-h-[400px] items-center gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <div className="h-5 w-40 animate-pulse rounded bg-gray-800" />

            <div className="space-y-3">
              <div className="h-12 w-full animate-pulse rounded bg-gray-800" />
              <div className="h-12 w-4/5 animate-pulse rounded bg-gray-800" />
            </div>

            <div className="h-5 w-full max-w-xl animate-pulse rounded bg-gray-800" />
            <div className="h-12 w-48 animate-pulse rounded bg-gray-800" />
          </div>

          <div className="h-72 w-full animate-pulse rounded-2xl bg-gray-800 md:h-96" />
        </section>

        {/* Library Heading */}
        <section>
          <div className="mb-8 space-y-3">
            <div className="h-10 w-56 animate-pulse rounded bg-gray-800" />
            <div className="h-5 w-80 animate-pulse rounded bg-gray-800" />
          </div>

          {/* Workout Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-800 bg-gray-950"
              >
                {/* Image */}
                <div className="h-52 w-full animate-pulse bg-gray-800" />

                {/* Content */}
                <div className="space-y-4 p-5">
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-800" />

                  <div className="h-6 w-3/4 animate-pulse rounded bg-gray-800" />

                  <div className="h-4 w-1/2 animate-pulse rounded bg-gray-800" />

                  <div className="flex gap-3">
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-800" />
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-800" />
                    <div className="h-4 w-12 animate-pulse rounded bg-gray-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Loading;
