import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Register() {
    return (
        <>
            <Header />
            <div className="w-full h-screen flex bg-slate-200">
                <div className="w-1/3 h-3/5 bg-white m-auto px-12 py-8 shadow-lg rounded-lg">
                    <div className="text-3xl text-center font-semibold mx-6 my-6 ">Sign up</div>
                    <div className="mx-8 mt-12 flex justify-center">
                        <input
                            className="px-2 py-2 text-lg rounded-lg border-solid border-2 border-slate-300 w-full focus:outline-slate-400"
                            placeholder="Username..."
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className="mx-8 mt-8 flex justify-center">
                        <input
                            type="password"
                            className="px-2 py-2 text-lg rounded-lg border-solid border-2 border-slate-300 w-full focus:outline-slate-400"
                            placeholder="Password..."
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className="mx-8 mt-8 flex justify-center">
                        <input
                            type="password"
                            className="px-2 py-2 text-lg rounded-lg border-solid border-2 border-slate-300 w-full focus:outline-slate-400"
                            placeholder="Password again..."
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>

                    {/* {errLogin && 
                    <div className='mx-8 mt-2 text-sm text-red-600'>
                        Login failed!
                    </div>} */}

                    <div className="mx-4 mt-8 flex justify-center">
                        <button
                            className=" bg-cyan-300 px-3 py-2 rounded w-36"
                            // onClick={handleSignIn}
                        >
                            Sign up
                        </button>
                    </div>
                    {/* <div className="flex justify-center">
                        <Link to="/" className="text-sm text-cyan-600  mt-4">
                            Back to Home
                        </Link>
                    </div> */}
                    <div className="text-sm text-cyan-600 flex justify-center mt-4">
                        <span className="text-black mr-1">Don’t have an account? </span>
                        <Link to="/login">Sign in</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
