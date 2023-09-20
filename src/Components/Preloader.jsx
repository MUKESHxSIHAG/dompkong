import React, { useEffect, useState } from "react";
import MainKong from "../Assets/images/png/MainKong.png"

const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-black top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="flex justify-center items-center flex-col text-center">
                        <div>
                            <span>
                                <img className="animate-bounce " src={MainKong} alt="Preloader" />
                            </span>
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Preloader
