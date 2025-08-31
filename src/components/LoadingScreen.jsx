import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {

    const [typewriterText, setTypewriterText] = useState("");           // keep track of the text that is printed on screen
    const fullText = "<Hello World />";

    // to print above text in form of typewriter on screen
    useEffect(() => {
        sessionStorage.setItem('hasVisitedLandingPage', 'true');
        let index = 0;
        const intervalId = setInterval(() => {
            setTypewriterText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(intervalId);

                // after 1 sec of completion call method from props to mark loaded as completed
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [onComplete]);       // dependency is onComplete function, if onComplete changes in any way 


    return (
        <div className="fixed inset-0 bg-black z-50 text-gray-100 flex flex-col justify-center items-center">
            <div className="mb-4 text-4xl font-bold font-mono">
                {typewriterText} <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 animate-loading-bar"></div>
            </div>
        </div>
    )
}