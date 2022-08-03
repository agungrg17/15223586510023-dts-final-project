import { useEffect, useState } from "react";
import recipesApi from "../apis/RecipesApi";

const useHooks = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {
        try {
            const result = await recipesApi.get(params);
            setResponse(result.data);
        }   catch (error){
            setError(error);
        }   finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);
    
    return {
        response,
        error,
        loading,
        fetchData,
    };
}

export default useHooks;