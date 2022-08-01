import Logo from "/images/logo.svg";
import {
    AiOutlineClose,
    AiOutlineContacts,
    AiOutlineHome,
    AiOutlineMenuFold,
    AiOutlineTeam,
} from "react-icons/ai";
import { MdOutlineCleaningServices } from "react-icons/md";
import { IconContext } from "react-icons";
import { useState } from "react";
import DarkModeToggle from "../buttons/DarkModeToggle";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    const [showNav, setShowNav] = useState(false);

    return (
        <nav className="sticky top-0 z-50 flex h-14 items-center justify-between bg-white px-2 transition duration-500 dark:bg-dark dark:text-white lg:h-32 lg:items-center lg:bg-white lg:transition lg:duration-500 lg:dark:bg-dark">
            <div className="w-1/12">
                <NavLink to="/">
                    <img
                        src={Logo}
                        alt="logo"
                        className="h-auto w-auto md:w-1/2 lg:w-auto"
                    />
                </NavLink>
            </div>
            <div
                className={
                    (showNav
                        ? "left-0 z-10"
                        : "-left-full transition-left lg:left-0 lg:top-0 lg:-z-10 ") +
                    "  lg:justify-cente fixed top-0 left-0 flex h-screen w-10/12  flex-col items-center justify-center gap-8  bg-white text-xl  text-dark duration-500 dark:bg-dark dark:text-white lg:h-32 lg:w-full lg:flex-row lg:items-center lg:gap-6 lg:bg-white lg:bg-white lg:text-sm lg:text-[16px] lg:sticky lg:font-semibold lg:text-dark lg:transition lg:duration-500 lg:dark:bg-dark lg:dark:text-white"
                }
            >
                <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
                    <IconContext.Provider value={{ className: "lg:hidden" }}>
                        <AiOutlineHome />
                    </IconContext.Provider>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? "text-black transition duration-500 dark:text-white"
                                : "text-gray"
                        }
                        to="/"
                    >
                        Home
                    </NavLink>{" "}
                </div>
                <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
                    <IconContext.Provider value={{ className: "lg:hidden" }}>
                        <AiOutlineTeam />
                    </IconContext.Provider>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? "text-black transition duration-500 dark:text-white"
                                : "text-gray"
                        }
                        to="/whoarewe"
                    >
                        Who Are We?
                    </NavLink>
                </div>
                <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
                    <IconContext.Provider value={{ className: "lg:hidden" }}>
                        <MdOutlineCleaningServices />
                    </IconContext.Provider>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? "text-black transition duration-500 dark:text-white"
                                : "text-gray"
                        }
                        to="/ourservices"
                    >
                        Our Services
                    </NavLink>
                </div>
                <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
                    <IconContext.Provider value={{ className: "lg:hidden" }}>
                        <MdOutlineCleaningServices />
                    </IconContext.Provider>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? "text-black transition duration-500 dark:text-white"
                                : "text-gray"
                        }
                        to="/ourprojects"
                    >
                        Our projects
                    </NavLink>
                </div>
                <div className="flex w-40 items-center gap-3 lg:w-fit lg:gap-0">
                    <IconContext.Provider value={{ className: "lg:hidden" }}>
                        <AiOutlineContacts />
                    </IconContext.Provider>
                    <NavLink
                        className={(navData) =>
                            navData.isActive
                                ? "text-black transition duration-500 dark:text-white"
                                : "text-gray"
                        }
                        to="/contactus"
                    >
                        Contact Us
                    </NavLink>
                </div>
                <div className="lg:hidden">
                    <DarkModeToggle />
                </div>
            </div>
            <div className="z-50 hidden gap-5 lg:flex">
                <DarkModeToggle />
                <button className="py-3 font-bold text-xs w-[7rem] rounded-md bg-primary">
                    Get a quote
                </button>
            </div>
            <button className="lg:hidden">
                {showNav ? (
                    <IconContext.Provider value={{ className: "text-2xl" }}>
                        <AiOutlineClose onClick={() => setShowNav(!showNav)} />
                    </IconContext.Provider>
                ) : (
                    <IconContext.Provider value={{ className: "text-2xl" }}>
                        <AiOutlineMenuFold onClick={() => setShowNav(!showNav)} />
                    </IconContext.Provider>
                )}
            </button>
        </nav>
    );
};

export default Navbar;
