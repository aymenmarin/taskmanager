import axios from'axios';
const API=axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true,
})
//automatically attach token to all requests 
API.interceptors.request.use((req)=>{
    const token=localStorage.getItem("token");
    if(token) req.Headers.Authorization=`Bearer ${token}`
    return req;
}
);
export const registerUser=(userData)=>API.post("/auth/register",userData)
export const loginUser=(userData)=>API.post("/auth/login",userData)
export const fetchTasks=()=>API.get("/tasks");
export const addTask=(taskData)=>API.post("/tasks",taskData)
export const updateTask=(id,taskData)=>API.put(`/tasks/${id}`,taskData)
export const deleteTask=(id)=>API.delete(`/tasks/${id}`)