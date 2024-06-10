import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setUser } from "../Redux/userSlice";
import axiosInstance from "../utils/axiosInstance";
import { apiEndPoint } from "../utils/apiEndpoint";




const useUpdateUser = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateUser = useCallback(async ()=>{
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.get(`${apiEndPoint}user/profile`);
            dispatch(setUser(response.data.data.user));
        } catch (error) {
            setError(error);
            
        }
        finally{
            setLoading(false);
        }

    },[dispatch]);

    return {updateUser,loading,error};

}

export default useUpdateUser;