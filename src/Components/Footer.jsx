import React from 'react'

const Footer = () => {
    return (
        <section className='bg-orange-100 '>
            <div className='flex flex-row items-center justify-between max-w-7xl mx-auto '> 
                <div className="left">
                    <img className='max-w-60' src="https://www.10xgrowth.com/new%20main%20logo%20Grey.png" alt="" />
                </div>
                <div className="center"><h1>Center</h1> </div>
                <div className="right"><h1>Right</h1></div>
            </div>
        </section>
    )
}

export default Footer