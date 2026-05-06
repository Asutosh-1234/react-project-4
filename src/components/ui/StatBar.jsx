export default function StatBar({ label, value, max = 5 }) {
    return (
        <div className="flex items-center justify-between text-sm group">
            <span className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">{label}</span>
            <div className="flex gap-1.5">
                {Array.from({ length: max }).map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-2.5 w-8 rounded-full transition-all duration-500 ease-out ${
                            i < value 
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-sm' 
                                : 'bg-gray-200 dark:bg-gray-700'
                        } ${i < value && 'group-hover:scale-105'}`}
                        style={{
                            transitionDelay: `${i * 50}ms`
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
