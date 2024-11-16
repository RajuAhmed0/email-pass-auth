import { useContext } from "react";
import { Context } from "../Provider/AuthContext";


const Home = () => {
    const info = useContext(Context)
    console.log(info);
    return (

        <div>
            This is home
        </div>
    );
};

export default Home;