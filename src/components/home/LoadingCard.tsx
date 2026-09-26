
const LoadingCard = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-950">
      {/* Image Skeleton */}
      <div className="aspect-[4/3] w-full animate-pulse bg-gray-800" />

      {/* Content Skeleton */}
      <div className="p-5">

        {/* Category Tags */}
        <div className="mb-4 flex gap-2">
          <div className="h-6 w-16 animate-pulse rounded-full bg-gray-800" />
          <div className="h-6 w-16 animate-pulse rounded-full bg-gray-800" />
        </div>

        {/* Workout Name */}
        <div className="space-y-2">
          <div className="h-6 w-4/5 animate-pulse rounded bg-gray-800" />
          <div className="h-6 w-2/5 animate-pulse rounded bg-gray-800" />
        </div>

        {/* Equipment */}
        <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-gray-800" />

        {/* Stats */}
        <div className="mt-5 flex gap-4 border-t border-gray-800 pt-4">
          <div className="h-4 w-16 animate-pulse rounded bg-gray-800" />
          <div className="h-4 w-20 animate-pulse rounded bg-gray-800" />
          <div className="h-4 w-12 animate-pulse rounded bg-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
