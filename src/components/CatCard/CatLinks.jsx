export default function CatLinks({ wikipedia, cfa, vetstreet, vca }) {
    const links = [
        { name: "Wikipedia", url: wikipedia },
        { name: "CFA", url: cfa },
        { name: "Vetstreet", url: vetstreet },
        { name: "VCA Hospitals", url: vca },
    ].filter(link => link.url); // only show if URL exists

    if (links.length === 0) return null;

    return (
        <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Learn more:</span>
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors group"
                >
                    {link.name}
                    <svg 
                        className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            ))}
        </div>
    );
}
