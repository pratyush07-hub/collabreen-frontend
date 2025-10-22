import Groupsecond from '../../assets/Groupsecond.png'

function Whatsnew() {
    return (
        <>
            <section className="bg-[#0C0C0C] p-8 rounded-3xl shadow border-[#] overflow-hidden h-[530px] relative mb-10 mt-16">
                <img className='bg-[#0C0C0C] absolute object-cover object-left md:object-center h-full' src={Groupsecond} />
                <div className='flex flex-col md:flex-row justify-evenly items-center text-white font-roboto p-4 h-full bg-transparent max-w-screen-xl mx-auto relative'>
                    <div className='bg-transparent w-full flex flex-col justify-evenly items-center gap-8 md:gap-24'>
                        <div className='rounded-2xl w-52 p-4 bg-gradient-to-r from-stone-700 to-stone-950 opacity-70'>
                            Regular updates that keeps you informed?
                        </div>
                        <div className='rounded-2xl w-52 p-4 bg-gradient-to-r from-stone-700 to-stone-950 opacity-70'>
                            Whats really trending?
                        </div>
                    </div>
                    <div className='bg-transparent w-full flex flex-col justify-evenly items-center gap-8 md:gap-44'>
                        <div className='rounded-2xl w-52 p-4 bg-gradient-to-r from-stone-700 to-stone-950 opacity-70'>
                            Looking for something unique?
                        </div>
                        <div className='rounded-2xl w-52 p-4 bg-gradient-to-r from-stone-700 to-stone-950 opacity-70'>
                            Regular updates that keeps you informed?
                        </div>
                    </div>
                </div>
                <h1 className='text-[#93B076] text-center md:text-left text-2xl md:text-3xl xl:text-4xl relative md:left-24 bottom-6 md:bottom-10 bg-transparent'>What&apos;s New?</h1>
            </section>
        </>
    )
}

export default Whatsnew
