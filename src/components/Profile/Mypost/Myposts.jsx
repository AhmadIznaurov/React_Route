import React from "react";
import P from "./Profile.module.css";


const Myposts = () => {
    return (
            <div>
                My posts
                <div >
                    New post
                </div>
                <div className={P.item}>
                    <div className={P.item}>
                        post 1
                    </div>
                    <div className={P.item}>
                        post 2
                    </div>
                </div>
            </div>
    );
}

export  default Myposts;