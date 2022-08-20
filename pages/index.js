import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBookmarkAltPlus, BiTrendingUp } from 'react-icons/bi'
import { TbHeartHandshake, TbDiamond } from 'react-icons/tb'
import Slider from '../components/slider'

export default function Home() {
  const [user, setUser] = useState({
    userName: '0x9***384', myTicket: 0, balance: 350
  })

  const [plans, setPlans] = useState([
    { id: 1, percentage: 10, da: 3000 },
    { id: 2, percentage: 11, da: 6000 },
    { id: 3, percentage: 12, da: 10000 },
    { id: 4, percentage: 13, da: 30000 },
    { id: 5, percentage: 14, da: 60000 },
    { id: 6, percentage: 15, da: 150000 },
    { id: 7, percentage: 17, da: 500000 },
    { id: 8, percentage: 20, da: 1000000 }
  ])
  const router = useRouter()

  
 
  // useEffect(() => {
  // }, [])

  return (
    <div className="relative h-screen">
      <Head>
        <title>Smart Earners</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      </Head>

      <nav className="flex justify-between border-b border-[#ccc] bg-black text-white py-5 px-8 md:px-36">
        <div className="bg-[#fff] text-black font-['Poppins'] font-bold px-3 h-[35px] flex items-center ">SMART EARNERS</div>

        <div className="flex items-center gap-5 text-[.8rem] ">
          <div className="flex flex-col items-center">Ticket <strong>{user?.myTicket}</strong></div>
          <div className="flex flex-col items-center">Balance <strong className="">N<span>{user?.balance}</span></strong></div>
        </div>
      </nav>

      <header className="text-center bg-[#ffd78d] mb-5 w-full overflow-hidden ">
        <Slider />
      </header>        

      <main className="">
        <section className="flex items-center justify-between md:justify-evenly gap-5 px-6 my-5">
          <div className="flex flex-col items-center">
            <div className="rounded-[15px] w-[40px] h-[40px] bg-[#ffd78d] text-white flex justify-center items-center ">
              <img src="/images/icons8-naira-48.png" alt="" width="20px" className="" />
            </div>
            <div className="text-[.8rem] font-bold font-['Poppins'] ">Withdraw</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded-[15px] w-[40px] h-[40px] bg-[#ffd78d] text-white flex justify-center items-center ">
              <img src="/images/icons8-share-50.png" alt="" width="20px" className="" />
            </div>
            <div className="text-[.8rem] font-bold font-['Poppins'] ">Referral</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded-[15px] w-[40px] h-[40px] bg-[#ffd78d] text-white flex justify-center items-center ">
              <img src="/images/icons8-comments-50.png" alt="" width="20px" className="" />
            </div>
            <div className="text-[.8rem] font-bold font-['Poppins'] ">Support</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded-[15px] w-[40px] h-[40px] bg-[#ffd78d] text-black flex justify-center items-center "><BiTrendingUp size="20px" /></div>
            <div className="text-[.8rem] font-bold font-['Poppins'] ">Invest Now</div>
          </div>
        </section>

        <section className="text-center bg-[#ffd78d] py-3 mt-16 mb-6">
          <div className="text-2xl font-semibold font-['Poppins'] ">Our Investment Plans</div>
        </section>

        <section className="my-5 px-5 flex flex-col md:flex-row flex-wrap justify-center items-center md:gap-10">
          {plans?.map(plan => {
            return <PlanCard user={user} id={plan?.id} percentage={plan?.percentage} da={plan?.da} />
          })}
        </section>
      </main>

      <div className="h-[90px]"></div>

      <footer className="fixed bottom-0 left-0 z-50 w-full h-[80px] flex justify-between items-center px-10 md:px-16 lg:px-20 bg-[#333] text-white rounded-t-[20px] ">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => { router.push('/') }}>
          <div className={`${router.pathname == '/' && 'text-[#ffa500]'} hover:text-[#e6ad44]`}><AiOutlineHome size="25px" /></div>
          <div className="text-[.8rem]">Home</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => { router.push('/orders') }}>
          <div className={`${router.pathname == '/team' && 'text-[#ffa500]'} hover:text-[#e6ad44]`}><BiBookmarkAltPlus size="25px" /></div>
          <div className="text-[.8rem]">Orders</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => { router.push('/deposit') }}>
          <div className={`${router.pathname == '/deposit' && 'text-[#ffa500]'} hover:text-[#e6ad44] bg-[#d19421] text-black w-[35px] h-[35px] rounded-full grid place-items-center`}><TbDiamond size="20px" /></div>
          <div className="text-[.8rem]">Deposit</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => { router.push('/team') }}>
          <div className={`${router.pathname == '/team' && 'text-[#ffa500]'} hover:text-[#e6ad44]`}><TbHeartHandshake size="25px" /></div>
          <div className="text-[.8rem]">Team</div>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => { router.push('/profile') }}>
          <div className={`${router.pathname == '/profile' && 'text-[#ffa500]'} hover:text-[#e6ad44]`}><AiOutlineUser size="25px" /></div>
          <div className="text-[.8rem]">Me</div>
        </div>
      </footer>
    </div>
  )
}


const PlanCard = ({ user, id, percentage, da }) => {
  const returnPeriod = 60
  const dailyReturn = (percentage / 100) * da
  const totalReturn = ((percentage / 100) * da) * returnPeriod
  const totalReturnPercentage = percentage * returnPeriod;
  const returnTiming = '22:55-23:25'

  const showModal = () => {
    const modal = document.querySelector(`#selector${id}`)
    modal.classList.remove('hidden')
  }

  const hideModal = () => {
    const modal = document.querySelector(`#selector${id}`)
    modal.classList.add('hidden')
  }

  return (<>
    <div className="mb-8 w-full md:w-fit" onClick={() => { showModal() }}>
      <div className="h-[60px] px-4 flex justify-between md:gap-16 items-center bg-[#ffa500] text-white rounded-t-[10px]">
        <div className="font-bold font-[poppins] ">SMART <br /> EARNERS</div>
        <div className="flex items-center md:gap-2 gap-1 font-bold text-sm md:text-base ">
          <div>PC-{id}</div> <div className="text-[#eee]">|</div> <div>Total {totalReturnPercentage}%</div>
        </div>
      </div>

      <div className="px-4 py-4 shadow-lg rounded-b-[10px] text-[.9rem]">
        <div className="flex justify-between ">
          <div className="">
            <div className="text-gray-500">Deposit Amount</div>
            <div className="font-bold ">{da}</div>
          </div>

          <div className="text-end">
            <div className="text-gray-500">Daily Return</div>
            <div className="flex items-center gap-2 font-bold">
              <div>N{dailyReturn}</div> <div className="text-[#eee]">|</div> <div>{percentage}%</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div className="">
            <div className="text-gray-500">Return Period</div>
            <div className="font-bold ">{returnPeriod} Days</div>
          </div>

          <div className="text-end">
            <div className="text-gray-500">Total Return</div>
            <div className="flex items-center gap-2 font-bold">
              <div>N{totalReturn}</div> <div className="text-[#eee]">|</div> <div>{percentage * returnPeriod}%</div>
            </div>
          </div>
        </div>

        <div className="bg-[#ffa500] text-white h-[35px] w-full flex justify-center items-center mt-8 text-lg font-bold">{da}</div>
      </div>

    </div>

    {/* modal */}
    <div id={`selector${id}`} className="hidden fixed">
      <div onClick={() => { hideModal() }} className="z-[4] cursor-pointer fixed top-0 left-0 w-screen h-screen grid place-items-center bg-[rgba(0,0,0,.1)] text-white font-['Poppins']" title="close">
      </div>

      <div className="z-[5] fixed lg:bottom-[140px] md:bottom-[120px] bottom-[95px] left-[1px] md:left-[30%] lg:left-[40%] ">

        <div className="h-[70px] px-4 flex justify-between items-center md:gap-10 gap-7 bg-[#ffa500] text-white rounded-t-[10px]">
          <div className="font-bold font-[poppins] ">SMART <br /> EARNERS</div>
          <div className="text-end">
            <div className="text-black font-semibold">PLEASE</div>
            <div className="text-2xl font-bold">CONFIRM</div>
          </div>
        </div>

        <div className="px-4 py-4 text-center shadow-lg rounded-b-[10px] text-[.9rem] bg-[#fff] text-black">
          <div className="">
            <p className="mb-2">Item : <span className="text-[#ffa500] font-[600]">Daily {percentage}% investment Plus</span></p>
            <p className="mb-2">Deposit Amount : <span className="text-[#ffa500] font-[600]">{da}</span></p>
            <p className="mb-2">Daily Return : <span className="text-[#ffa500] font-[600]">{dailyReturn}</span></p>
            <p className="mb-2">Total Return : <span className="text-[#ffa500] font-[600]">{totalReturn}</span></p>
            <p className="mb-2">Return Period : <span className="text-[#ffa500] font-[600]">{returnPeriod} Days</span></p>
            <p className="mb-2">Return Timing : <span className="text-[#ffa500] font-[600]">{returnTiming}</span></p>
            <p className="text-[#ffa500] font-[600]">( Review first daily return 24h after deposit )</p>
          </div>

          <div className="bg-[#ffa500] text-white h-[35px] w-full flex justify-center items-center mt-8 text-lg font-bold cursor-pointer">Invest Now</div>

          <p className="mt-2">( My Ticket <span>{user?.myTicket}</span> )</p>
        </div>
      </div>
    </div>
  </>)
}