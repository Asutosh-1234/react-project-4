import CatImage from "./CatImage";
import CatHeader from "./CatHeader";
import CatStats from "./CatStats";
import CatLinks from "./CatLinks";
import Badge from "../ui/Badge";

export default function CatCard({ cat }) {
    const temperaments = cat.temperament ? cat.temperament.split(', ') : [];

    return (
        <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700/50">
            {/* Left Column: Image */}
            <div className="w-full md:w-2/5 h- md:h-auto">
                <CatImage src={cat.image} alt={cat.name} origin={cat.origin} />
            </div>

            {/* Right Column: Content */}
            <div className="w-full md:w-5/6 p-6 md:p-4 flex flex-col gap-4 relative">
                <CatHeader 
                    name={cat.name} 
                    altNames={cat.alt_names} 
                    lifeSpan={cat.life_span} 
                    weight={cat.weight?.metric} 
                />

                <div className="flex flex-wrap gap-2">
                    {temperaments.map((temp) => (
                        <Badge key={temp}>{temp}</Badge>
                    ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base text-justify">
                    {cat.description}
                </p>

                <div className="flex-grow">
                    <CatStats cat={cat} />
                </div>

                <div className="pt-6 mt-2 border-t border-gray-100 dark:border-gray-700">
                    <CatLinks 
                        wikipedia={cat.wikipedia_url} 
                        cfa={cat.cfa_url} 
                        vetstreet={cat.vetstreet_url} 
                        vca={cat.vcahospitals_url} 
                    />
                </div>
            </div>
        </div>
    );
}
