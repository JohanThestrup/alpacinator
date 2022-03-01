import { useEffect, useState, useRef } from "react";
import { api } from "../utils";

export default function useFetch(url, initialState) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(initialState);
    const [error, setError] = useState("");
    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;
        const getData = async () => {
            try {
                const res = await fetch(`${api}/${url}`);
                const json = await res.json();
                if (mounted.current) {
                    setData(json);
                    setLoading(false);
                }
            } catch (error) {
                if (mounted.current) {
                    setError(error);
                    setLoading(false);
                }
            }
        };
        getData();
        return () => (mounted.current = false);
    }, [url]);

    return { loading, data, error };
}
