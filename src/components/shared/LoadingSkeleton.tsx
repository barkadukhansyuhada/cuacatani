export function LoadingSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-xl border border-gray-100 bg-white p-4"
        >
          <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
          <div className="mb-2 h-3 w-1/2 rounded bg-gray-100" />
          <div className="flex gap-2">
            <div className="h-5 w-16 rounded-full bg-gray-100" />
            <div className="h-5 w-16 rounded-full bg-gray-100" />
          </div>
        </div>
      ))}
    </div>
  );
}
