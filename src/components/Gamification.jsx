import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'
import Gmf1 from '../assets/images/gmf1.png'
import Gmf2 from '../assets/images/gmf2.png'
import Gmf3 from '../assets/images/gmf3.png'
import Gmf4 from '../assets/images/gmf4.png'
import Gmf5 from '../assets/images/gmf5.png'
const Gamification = () => {
  return (
    <>
      <Navbar />
      <div className='gamification-heading'>
        <h1 className='text-4xl lg:text-6xl my-4 mt-12 py-3 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent  text-center'>Fact or Fiction ?</h1>
        <p className='text-4xl text-purple-400 text-center font-semibold'>Play to Find Out !</p>
      </div>
      <div className='games-quizes mt-10'>
        {/*Game Feature*/}
        <div className="flex justify-center items-center flex-col md:flex-row space-y-6 md:space-y-0">

          <div className=" flex-col mx-8 p-6 rounded-lg border max-w-xl h-auto items-center align-middle justify-center flex">
            <h1 className='text-3xl text-purple-400 text-center font-semibold p-6'>Decode Truths, Unlock Levels!</h1>
            <p className='px-6'>
              Challenge yourself with fact-checking games. Test your knowledge on trending topics and uncover the truth behind viral news and Facts !
            </p>
            <button className='btn-1-hero mt-4'><a href='/games'>Play Games</a></button>
          </div>

          <div className="flex-shrink-0 mx-8 ">
            <img src={Gmf1} alt="Firefighter Illustration" className="w-96 h-96 object-contain ml-6" />
          </div>
        </div>
        {/*Quizes Features*/}
        <div className="flex justify-center items-center flex-col md:flex-row space-y-6 md:space-y-0">
          <div className="flex-shrink-0 mx-8 ">
            <img src={Gmf2} alt="Firefighter Illustration" className="w-96 h-96 object-contain ml-6" />
          </div>
          <div className=" flex-col mx-8 p-6 rounded-lg border max-w-xl h-auto items-center align-middle justify-center flex">
            <h1 className='text-2xl text-purple-400 text-center font-semibold p-6'>Test Your Knowledge, Verify the World!</h1>
            <p className='px-6'>
              Participate in daily and weekly challenges to see your name on our leaderboard. With every quiz you complete, climb up the ranks and earn your place as a verified truth-seeker!
            </p>
            <button className='btn-1-hero mt-4'><a href='/quizes'>Play Quizes</a></button>
          </div>


        </div>

        <div className='rewards-heading'>
          <h1 className='text-3xl lg:text-5xl my-4 mt-12 py-3 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent  text-center'>Earn Rewards as You Verify Facts</h1>
        </div>
        <div className='rewards-section'>
          {/* Certificate Section */}
          <div className="flex justify-center items-center flex-col md:flex-row space-y-6 md:space-y-0">

            <div className=" flex-col mx-8 p-6 rounded-lg border max-w-xl h-auto items-center align-middle justify-center flex">
              <h1 className='text-2xl text-purple-400 text-center font-semibold p-3'>Complete Challenges, Win Certificates!</h1>
              <p className='px-6 py-6'>
                Showcase your fact-checking skills with achievement certificates. Whether you're a beginner or a pro, we recognize your expertise with certificates you can share!
              </p>
              <button className='btn-1-hero mt-4'>Demo Certificate</button>
            </div>
            <div className="flex-shrink-0 mx-8 ">
              <img src={Gmf3} alt="Firefighter Illustration" className="w-96 h-96 object-contain ml-6" />
            </div>

          </div>
          {/* Coupouns Section */}
          <div className="flex justify-center items-center flex-col md:flex-row space-y-6 md:space-y-0">
            <div className="flex-shrink-0 mx-8 ">
              <img src={Gmf5} alt="Firefighter Illustration" className="w-96 h-96 object-contain ml-6" />
            </div>
            <div className=" flex-col mx-8 p-6 rounded-lg border max-w-xl h-auto items-center align-middle justify-center flex">
              <h1 className='text-2xl text-purple-400 text-center font-semibold p-3'>Score Big with Discount Coupons!</h1>
              <p className='px-6 py-6'>
              Keep playing to collect points that can be exchanged for discount coupons on popular brands. Who knew fact-checking could be so rewarding?
              </p>
         
            </div>


          </div>
          {/* Perks Section */}
          <div className="flex justify-center items-center flex-col md:flex-row space-y-6 md:space-y-0">
            
            <div className=" flex-col mx-8 p-6 rounded-lg border max-w-xl h-auto items-center align-middle justify-center flex">
              <h1 className='text-2xl text-purple-400 text-center font-semibold p-3'>Earn Rewards as You Verify Facts!!</h1>
              <p className='px-6 py-6'>
              Every time you verify a fact or ace a quiz, you earn points that can be redeemed for exclusive rewards. Play, learn, and get rewarded for your commitment to accurate information!
              </p>
             
            </div>
            <div className="flex-shrink-0 mx-8 ">
              <img src={Gmf4} alt="Firefighter Illustration" className="w-96 h-96 object-contain ml-6" />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Gamification