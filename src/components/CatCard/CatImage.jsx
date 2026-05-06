export default function CatImage({ src, alt, origin }) {
    return (
        <div className="relative w-full h-full group overflow-hidden">
            <img 
                src={src || "https://placekitten.com/600/800"} 
                alt={alt || "Cat image"} 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80"></div>
            
            {/* Origin Badge over image */}
            {origin && (
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-start">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center shadow-lg">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {origin}
                    </div>
                </div>
            )}
        </div>
    );
}
