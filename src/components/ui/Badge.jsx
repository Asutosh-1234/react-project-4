export default function Badge({ children }) {
    return (
        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-indigo-100 dark:hover:bg-indigo-800/60 shadow-sm cursor-default">
            {children}
        </span>
    );
}
