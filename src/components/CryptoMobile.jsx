import React from 'react'

const CryptoMobile = ({name, symbol, image, price, volume, price_change, marketcap}) => {
    return (
        <div className={window.innerWidth < 640 ? "text-black bg-gray-200 my-8 mx-3 rounded-md p-5" : "hidden" }>
            <div className="flex flex-col items-center justify-center border-b border-gray-900 pb-2">
                <img src={image} className="w-16" alt="logo" />
                <p className="text-lg font-bold">
                    {name} <span className="uppercase">({symbol})</span>
                </p>
            </div>          
            <div className="grid grid-cols text-left">
                <div className="text-left font-semibold mt-2">
                    Detail of <span className="font-mono">{name}:</span>
                    <p>Price : ${price}</p>
                    <p>Volume : ${volume}</p>
                    <p>Price change : <span className={price_change < 0 ? "text-red-500" : "text-green-500"}>{price_change}%</span></p>
                    <p>Market cap : ${marketcap}</p>
                </div>
            </div>
        </div>
    )
}

export default CryptoMobile
