import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../context/UserContext";


const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState(""); 
    const navigate=useNavigate()
    const {loginUser,btnLoading, isAuth}=useUserData()

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (isAuth || token) {
            navigate("/");
        }
    }, [isAuth, navigate]);

    async function submitHandler(e:any){
        e.preventDefault();
        loginUser(email,password,navigate)
    }
  return (
    <div className="flex items-center justify-center h-screen max-h-screen">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-3xl font-semibold text-center mb-8">
               Login to Spotify 
            </h2>
            <form className="mt-8" onSubmit={submitHandler}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email or UserName</label>
                    <input type="email" placeholder="Email or UserName" className="auth-input" required value={email} onChange={e=>setEmail(e.target.value)}></input>

                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input type="password" placeholder="password" className="auth-input" required value={password} onChange={e=>setPassword(e.target.value)}></input>

                </div>
                <button disabled={btnLoading} className="auth-btn"> {btnLoading?"Please wait...":"Login"}</button>

            </form>
            <div className="text-center mt-6">
                <Link to={"/register"} className="text-sm text-gray-400 hover:text-gray-300 ">Dont't have an account</Link>
            </div>
            
            </div>
            </div>
  )
}

export default Login