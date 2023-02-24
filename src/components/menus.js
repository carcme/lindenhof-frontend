import React from "react";

const Menus = ({ title, cost }) => {
    return (
        <div className=" m-2 grid grid-cols-8 py-2 tracking-widest hover:font-medium ">
            <p className="col-span-7 w-[500px] max-sm:w-[220px]">{title}</p>
            <p className="col-span-1 text-end">{cost} </p>
        </div>
    );
};

export default Menus;