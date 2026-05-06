import StatBar from "../ui/StatBar";

export default function CatStats({ cat }) {
    const stats = [
        { label: "Adaptability", value: cat.adaptability },
        { label: "Affection", value: cat.affection_level },
        { label: "Child Friendly", value: cat.child_friendly },
        { label: "Dog Friendly", value: cat.dog_friendly },
        { label: "Energy Level", value: cat.energy_level },
        { label: "Intelligence", value: cat.intelligence },
    ];

    // Filter out undefined stats just in case
    const validStats = stats.filter(stat => stat.value !== undefined);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
            {validStats.map((stat) => (
                <StatBar key={stat.label} label={stat.label} value={stat.value} />
            ))}
        </div>
    );
}
