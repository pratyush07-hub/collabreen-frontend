// import React from 'react'

function Numbers() {
    return (
        <>
            <section className="flex flex-col gap-10 md:flex-row justify-evenly items-center max-w-screen-4xl py-10 md:mt-14 mx-auto text-white">
                <div className="py-2 px-10 flex flex-col gap-2 bg-gradient-to-r from-stone-700 to-stone-900 rounded-br-3xl rounded-t-3xl">
                    <h1 className="bg-transparent max-w-4xl text-[#EFAC16] text-3xl font-normal md:text-3xl xl:text-4xl relative font-sf">200M+</h1>
                    <p className="bg-transparent text-left text-gray-300 text-lg lg:text-xl font-roboto">Creator Database</p>
                </div>
                <span className="w-4 h-4 rounded-full bg-white"></span>
                <div className="py-2 px-10 flex flex-col gap-2 bg-gradient-to-r from-stone-700 to-stone-900 rounded-bl-3xl rounded-r-3xl">
                    <h1 className="bg-transparent max-w-4xl text-[#93B076] text-3xl font-normal md:text-3xl xl:text-4xl relative font-sf">50+</h1>
                    <p className="bg-transparent text-left text-gray-300 text-lg lg:text-xl font-roboto">Creator Database</p>
                </div>
                <span className="w-4 h-4 rounded-full bg-white"></span>
                <div className="py-2 px-10 flex flex-col gap-2 bg-gradient-to-r from-stone-700 to-stone-900 rounded-bl-3xl rounded-t-3xl">
                    <h1 className="bg-transparent max-w-4xl text-[#F5ADB2] text-3xl font-normal md:text-3xl xl:text-4xl relative font-sf">10K+</h1>
                    <p className="bg-transparent text-left text-gray-300 text-lg lg:text-xl font-roboto">Creator Database</p>
                </div>
            </section>
        </>
    )
}

export default Numbers
