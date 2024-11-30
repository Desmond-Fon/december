import x from '../../assets/x.png'
import tg from '../../assets/tg.png'
import dex from '../../assets/dex.png'
import cal from '../../assets/cal.png'
import img from '../../assets/img.png'
import copy from '../../assets/copy.png'
import Slider from '../../components/Slider'

const Landing = () => {
    return (
        <div className='min-h-[100vh] hero'>
            <header className="relative">
                <div className="flex justify-between items-center pt-[3%] px-[5%]">
                    <button className="border-[2px] border-black rounded-[5px] py-[6px] lg:py-[10px] px-[20px] lg:px-[50px] font-sigmar text-black bg-secondary transform transition-transform duration-300 ease-in-out scale-100 hover:scale-110 text-[20px]">Buy Now</button>

                    <div className='flex justify-end items-center gap-1 lg:gap-4'>
                        <img src={tg} alt="" className='w-[30px] h-[30px] lg:w-auto lg:h-auto' />
                        <img src={x} alt="" className='w-[30px] h-[30px] lg:w-auto lg:h-auto' />
                        <img src={dex} alt="" className='w-[30px] h-[30px] lg:w-auto lg:h-auto' />
                    </div>
                </div>
                <div className='flex justify-center w-full flex-col lg:flex-row items-start mt-16 lg:mt-10 gap-[10vh] lg:gap-0'>
                    <div className='w-full lg:w-1/2 px-[4%] lg:px-0 lg:pl-[8%] pt-[8%]'>
                        <h1 className='text-[40px] lg:text-[58px] tracking-wider'>DESTROY <br />DICK DECEMBER</h1>

                        <div className='h-[60px] w-full lg:w-fit px-2 lg:px-8 border-[2px] border-r-[7px] border-b-[7px] border-black rounded-[4px] mt-[40px] lg:mt-[80px] flex justify-center items-center gap-3 text-[15px] lg:text-[26px]'><p>CA: D63ET7yusuwygywgyjffas6yugswiw7</p> <img src={copy} alt="" /></div>
                    </div>
                    <div className='w-full lg:w-1/2 flex justify-end items-end flex-col'>
                        <div className='flex justify-center pr-[15%] items-center w-full'>
                            <img src={cal} alt="" className='w-[60%] lg:w-[45%]' />
                        </div>
                        <img src={img} alt="" className='w-[89%]' />
                    </div>
                </div>
            </header>
            <Slider />
        </div>
    );
}

export default Landing;