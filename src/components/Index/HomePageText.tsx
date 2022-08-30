import { useState, useEffect } from "react";

const HomePageText = () => {
    const [text, setText] = useState("");
    const [animePipe, setAnimePipe] = useState(false);

    useEffect(() => {
        const tabTexte = [
            "Student",
            "Developer",
            "Futur Engineer",
            "21 Years Old",
        ];
        let indexLecture = 0;
        let teteDeLecture = 0;
        let boolEcriture = true;
        let timerInterval = 0;
        const interval = window.setInterval(() => {
            if (boolEcriture) {
                if (teteDeLecture === tabTexte[indexLecture].length - 1) {
                    boolEcriture = false;
                }

                setText((text) => {
                    return (
                        text + tabTexte[indexLecture].charAt(teteDeLecture++)
                    );
                });
            } else {
                if (timerInterval < 30) {
                    timerInterval++;
                    setAnimePipe(true);
                } else if (teteDeLecture !== 0) {
                    teteDeLecture--;
                    setAnimePipe(false);
                    setText((text) => text.slice(0, teteDeLecture));
                } else {
                    boolEcriture = true;
                    timerInterval = 0;
                    indexLecture = (indexLecture + 1) % tabTexte.length;
                }
            }
        }, 100);
        return () => {
            window.clearInterval(interval);
        };
    }, []);

    return (
        <p className="text-xl lg:text-2xl 2xl:text-3xl font-semibold tracking-widest">
            <span>I'm </span>
            <span className="border-b-2 pb-1 border-bleu-clair">{text}</span>
            <span className={"border-b-2 pb-1 border-bleu-clair " + (animePipe && "animate-pulse")}>|</span>
        </p>
    );
};

export default HomePageText;
