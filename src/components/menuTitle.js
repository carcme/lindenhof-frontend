import React from 'react'

const MenuTitle = ({ main, sub }) => {
    return (
        <h4 className="mt-[5rem] text-center text-3xl font-bold text-neutral-700">
            {main}
            <p className="mb-2 text-xl text-neutral-500">
                {sub}
            </p>
        </h4>
    )
}

export default MenuTitle
