import { useState } from "react";

export default function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");

    useEffect(() => {
        async function fetchData() {
            const url = 'https://api.freeapi.app/api/v1/public/cats/cat/random';
            const options = { method: 'GET', headers: { accept: 'application/json' } };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
    }, [query, page]);



    return (
        <div>
        </div>
    );
}
