export default function CatHeader({ name, altNames, lifeSpan, weight }) {
    return (
        <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {name}
            </h2>
            {altNames && (
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 italic">
                    Also known as: {altNames}
                </p>
            )}
            
            <div className="flex flex-wrap gap-4 mt-3">
                {lifeSpan && (
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-medium">
                        <svg className="w-5 h-5 mr-1.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {lifeSpan} years
                    </div>
                )}
                {weight && (
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-medium">
                        <svg className="w-5 h-5 mr-1.5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        {weight} kg
                    </div>
                )}
            </div>
        </div>
    );
}
