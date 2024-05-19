import { useEffect, useState } from "react";

// This is a custom hook
const useAppwrite = (fn) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // You cannot use async code directly within a useEffect hook. You must call it inside.
    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fn();

            setData(response);
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => fetchData();

    return { data, isLoading, refetch }
}

export default useAppwrite;