import Hamburger from "hamburger-react";
import { useState } from "react";
import {
    FaBars,
    FaEnvelope,
    FaFacebook,
    FaFile,
    FaFileAlt,
    FaFileInvoice,
    FaHome,
    FaInstagram,
    FaLaptopCode,
    FaLinkedin,
    FaUser,
} from "react-icons/fa";

const NavBar = () => {
    const [isMenu, setIsMenu] = useState(false);
    return (
        <>
            <button className="fixed right-2 z-10 text-white bg-bleu-clair rounded-full top-4">
                <Hamburger size={20} toggled={isMenu} toggle={setIsMenu}/>
            </button>
            <nav className={"fixed w-[300px] h-screen bg-noir-menu top-0 transition-all duration-500 text-white z-10 " + (isMenu ? "left-0" : "-left-[300px]")}>
                <div className="flex flex-col justify-center items-center gap-y-4 pt-6">
                    <img
                        src="/assets/pdp.jpg"
                        alt="bitmoji"
                        className="w-28 h-28 rounded-full border-[#fff2] border-4"
                    />
                    <h2 className="font-3 text-2xl">Billy Ronico</h2>
                    <ul className="flex gap-x-2">
                        <li>
                            <a
                                href="https://www.facebook.com/billy.jonconors"
                                className="bg-[#fff2] w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#fff4] transition-colors"
                            >
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/billyronico/?hl=fr"
                                className="bg-[#fff2] w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#fff4] transition-colors"
                            >
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href="./cv.pdf"
                                className="bg-[#fff2] w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#fff4] transition-colors"
                            >
                                <FaFileAlt />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ronico-billy-58bb4520b/"
                                className="bg-[#fff2] w-9 h-9 flex justify-center items-center rounded-full hover:bg-[#fff4] transition-colors"
                            >
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>

                <ul className="mt-12 ml-8 flex flex-col gap-y-8 text-[#fffa] font-medium">
                    <li>
                        <a href="#" className="flex items-center group">
                            <FaHome className="transform -translate-y-0.5 group-hover:text-bleu-clair transition-colors" />
                            <span className="ml-6 text-xl group-hover:text-white transition-colors">
                                Accueil
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#a-propos" className="flex items-center group">
                            <FaUser className="transform -translate-y-0.5 group-hover:text-bleu-clair transition-colors" />
                            <span className="ml-6 text-xl group-hover:text-white transition-colors">
                                A propos
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#competences"
                            className="flex items-center group"
                        >
                            <FaLaptopCode className="transform -translate-y-0.5 group-hover:text-bleu-clair transition-colors" />
                            <span className="ml-6 text-xl group-hover:text-white transition-colors">
                                Compétences
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portfolio"
                            className="flex items-center group"
                        >
                            <FaFileInvoice className="transform -translate-y-0.5 group-hover:text-bleu-clair transition-colors" />
                            <span className="ml-6 text-xl group-hover:text-white transition-colors">
                                Portfolio
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="flex items-center group">
                            <FaEnvelope className="transform -translate-y-0.5 group-hover:text-bleu-clair transition-colors" />
                            <span className="ml-6 text-xl group-hover:text-white transition-colors">
                                Contact
                            </span>
                        </a>
                    </li>
                </ul>

                <img
                    src="/assets/logo-ut3.png"
                    alt="logo-ut3"
                    className="w-40 absolute bottom-4 left-1/2 transform -translate-x-1/2"
                ></img>
            </nav>
        </>
    );
};

export default NavBar;
