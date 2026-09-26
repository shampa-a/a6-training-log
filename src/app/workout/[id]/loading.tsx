
const Loading = () => {
  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back Button Skeleton */}
        <div className="mb-8 h-5 w-36 animate-pulse rounded bg-gray-800" />

        {/* Main Content */}
        <section className="grid gap-8 lg:grid-cols-2">

          {/* Image Skeleton */}
          <div className="h-[400px] animate-pulse rounded-2xl bg-gray-800 lg:h-[650px]" />

          {/* Content Skeleton */}
          <div className="flex flex-col justify-center">

            {/* Tags */}
            <div className="mb-5 flex gap-2">
              <div className="h-7 w-20 animate-pulse rounded-full bg-gray-800" />
              <div className="h-7 w-20 animate-pulse rounded-full bg-gray-800" />
            </div>

            {/* Title */}
            <div className="space-y-3">
              <div className="h-12 w-full animate-pulse rounded bg-gray-800" />
              <div className="h-12 w-4/5 animate-pulse rounded bg-gray-800" />
            </div>

            {/* Description */}
            <div className="mt-6 space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-gray-800" />
              <div className="h-4 w-11/12 animate-pulse rounded bg-gray-800" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-800" />
            </div>

            {/* Specs */}
            <div className="mt-8 overflow-hidden rounded-xl border border-gray-800">
              <div className="h-14 animate-pulse bg-gray-900" />

              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between border-t border-gray-800 px-5 py-4"
                >
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-800" />
                  <div className="h-4 w-28 animate-pulse rounded bg-gray-800" />
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="mt-8">
              <div className="mb-5 h-5 w-32 animate-pulse rounded bg-gray-800" />

              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-7 w-7 shrink-0 animate-pulse rounded-full bg-gray-800" />
                    <div className="h-5 flex-1 animate-pulse rounded bg-gray-800" />
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="h-12 flex-1 animate-pulse rounded-full bg-gray-800" />
              <div className="h-12 flex-1 animate-pulse rounded-full bg-gray-800" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Loading;
