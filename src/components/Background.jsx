import bg from "../assets/bg.jpg";
import QuizBox from "./QuizBox";

function Background() {
    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="bg-cover bg-center h-screen"
        >
            <QuizBox/>
        </div>
    );
}

export default Background;
