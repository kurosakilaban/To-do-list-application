import { useState , useEffect } from "react";
import axios from "axios";

const useFetch = (URL) => {
    const [data, setData] = useState(null);

    useEffect(
        () => {
            axios.get(URL)
            .then(res=>{
                setData(res.data)
            })
            .catch(err => console.log(err))
},[URL])

return{data}

}

export default useFetch;