import {useEffect, useState} from "react";

export default function useLoadData(fetchDataCallback, initialState, settings) {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //test commit
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchDataCallback({...settings, signal});
                setState(data);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => {
            controller.abort();
        };
    }, [fetchDataCallback]);

    return [state, loading, error];
}