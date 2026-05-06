import { useState, useEffect } from "react";
import CatCard from "./components/CatCard";

export default function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const url = 'https://api.freeapi.app/api/v1/public/cats/cat/random';
            const options = { method: 'GET', headers: { accept: 'application/json' } };

            try {
                setLoading(true);
                const response = await fetch(url, options);
                const result = await response.json();
                if (result.success) {
                    setData(result.data);
                } else {
                    setError("Failed to fetch cat data");
                }
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [reload]);

    return (
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center p-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg" onClick={() => setReload(!reload)}>
                Load New Cat
            </button>
            {loading ? (
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-300 animate-pulse">Loading amazing cat...</div>
            ) : error ? (
                <div className="text-red-500 font-medium bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">Error: {error}</div>
            ) : data ? (
                <CatCard cat={data} />
            ) : null}
        </div>
    );
}
