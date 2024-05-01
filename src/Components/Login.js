import Header from "./Header";

const Login = () => {
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt= "bgImg"/>
            </div>
            <form className="w-4/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white">
                <h1 className="font-bold text-3xl">Sign In</h1>
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-900 border-[0.1px] border-x-gray-500 rounded-md" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900 border-[0.1px] border-x-gray-500 rounded-md" />
                <button className="p-4 my-4 bg-red-500 w-full font-bold rounded-md">Sign In</button>

            </form>
        </div>
    );
};

export default Login;