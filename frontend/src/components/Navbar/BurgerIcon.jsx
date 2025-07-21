import React from 'react'

const BurgerIcon = () => {
    return (
        <label className="swap swap-rotate">
            <input type="checkbox" />

            <img src="/burger.svg" alt="" className="swap-off fill-current"></img>
           
            <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512">
                <polygon
                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
        </label>
    )
}

export default BurgerIcon