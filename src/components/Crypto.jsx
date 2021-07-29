import React, {Fragment} from 'react'

const Crypto = ({name, symbol, image, price, volume, price_change, marketcap}) => {
    return (
        <Fragment>
            <div className="grid grid-cols-6 p-4 hover:bg-gray-700">
                <div className="flex">
                    <img src={image} className="w-10" alt="crypto" />
                    <p className="mx-3 mt-2">{name}</p>
                </div>
                <p className="uppercase">{symbol}</p>
                <p>${price}</p>
                <p>${volume.toLocaleString()}</p>
                <p className={price_change < 0 ? 'text-red-500' : 'text-green-500'}>{price_change.toFixed(2)}%</p>
                <p>${marketcap.toLocaleString()}</p>
            </div>
            <hr />
        </Fragment>
    )
}

export default Crypto
