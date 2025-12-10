export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Skeleton for Header */}
        <div className="h-10 w-64 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>
        
        {/* Skeleton for Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[400px]">
              <div className="h-64 bg-gray-200 animate-pulse"></div>
              <div className="p-5 space-y-3">
                <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}