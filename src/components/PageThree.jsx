import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const PageThree = () => {

  const [hoveredCard, setHoveredCard] = useState()
  const [isDesktop, setIsDesktop] = useState(window.matchMedia('(min-width: 600px)').matches)
  const isNotDesktop = window.matchMedia('(max-width: 600px)').matches


  let cards = [
    {
      img: 'https://portfoliotalhaarshad.netlify.app/assets/Trd-BWtFTDeC.png',
      heading: 'Trading Website',
      paragraph: 'Modern property listing platform with search filters.platform with search filters',
      id: 1
    },
    {
      img: 'https://portfoliotalhaarshad.netlify.app/assets/Ecm-EV5hnba0.png',
      heading: 'Ecommerce Store',
      paragraph: 'Online shopping store with cart and payments.platform with search filters',
      id: 2
    },
    {
      img: 'https://portfoliotalhaarshad.netlify.app/assets/Res-real-B_XtDe_l.png',
      heading: 'Delivery Company',
      paragraph: 'Manage daily tasks with clean UI and fast performance.',
      id: 3
    },
    {
      img: 'https://portfoliotalhaarshad.netlify.app/assets/fb-yyG19xOy.png',
      heading: 'FaceBook HomePage',
      paragraph: 'Manage daily tasks with clean UI and fast performance.',
      id: 4
    },
    {
      img: 'https://portfoliotalhaarshad.netlify.app/assets/eg-BauCjmW4.png',
      heading: 'Egator Website',
      paragraph: 'Manage daily tasks with clean UI and fast performance.',
      id: 5
    },
    {
      img: 'https://portfoliotalhaarshad.netlify.app/assets/Ecm2-DVqshdQs.png',
      heading: 'Electronic Shop',
      paragraph: 'Manage daily tasks with clean UI and fast performance.',
      id: 6
    }
  ]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 600px)')
    const handleResize = (event) => {
      setIsDesktop(event.matches)
      if (!event.matches) {
        setHoveredCard(null)
      }
    }

    mediaQuery.addEventListener('change', handleResize)

    return () => {
      mediaQuery.removeEventListener('change', handleResize)
    }
  }, [])

  const handleMouseEnter = (id) => {
    if (isDesktop) {
      setHoveredCard(id)
    }
  }

  const handleMouseLeave = () => {
    if (isDesktop) {
      setHoveredCard(null)
    }
  }

  return (
    <div id='project' className='w-full h-screen flex justify-center items-center'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://coruscating-dragon-416ef5.netlify.app/" target='_blank' className='cursor-grab' >
            <div className='card w-full overflow-auto h-full' onMouseEnter={() => {
              if (isDesktop) {
                setHoveredCard(1)
              }
            }}
              onMouseLeave={() => {
                if (isDesktop) {
                  setHoveredCard(null)
                }
              }}>
              {navigator.maxTouchPoints > 0 ? <img src={cards[0].img} alt='First Project SS' className='w-full h-[50%] select-none' /> : <img src={cards[0].img} alt='First Project SS' className='w-full h-full select-none' />}
              {hoveredCard === 1 && (
                <div className='w-60 bg-white opacity-60 text-black p-4 rounded-2xl flex flex-col top-15 left-3 absolute items-center justify-center'>
                  <h4>{cards[0].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[0].paragraph}</p>
                </div>
              )}
              {isNotDesktop && (
                <div className='w-full h-[50%] bg-black text-white p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[0].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[0].paragraph}</p>
                </div>
              )}
              {navigator.maxTouchPoints > 0 && isDesktop && (
                <div className='w-full h-[50%] bg-black text-white p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[0].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[0].paragraph}</p>
                </div>
              )}
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://699959431eae9c8ad00057be--myreactshop123.netlify.app/" target='_blank' className='cursor-grab' >
            <div className='card w-full h-full' onMouseEnter={() => {
              if (isDesktop) {
                setHoveredCard(2)
              }
            }}
              onMouseLeave={() => {
                if (isDesktop) {
                  setHoveredCard(null)
                }
              }}>
              {navigator.maxTouchPoints > 0 ? <img src={cards[1].img} alt='Second Project SS' className='w-full h-[50%] select-none' /> : <img src={cards[1].img} alt='Second Project SS' className='w-full h-full select-none' />}
              {hoveredCard === 2 && (
                <div className='card-text w-60 bg-black opacity-60 text-white p-4 rounded-2xl flex flex-col absolute bottom-5 left-70 items-center justify-center'>
                  <h4>{cards[1].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[1].paragraph}</p>
                </div>
              )}
              {isNotDesktop && (
                <div className='w-full h-[50%] bg-white text-black p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[1].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[1].paragraph}</p>
                </div>
              )}
              {navigator.maxTouchPoints > 0 && isDesktop && (
                <div className='w-full h-[50%] bg-white text-black p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[1].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[1].paragraph}</p>
                </div>
              )}
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://roaring-stroopwafel-2226bf.netlify.app/#app" target='_blank' className='cursor-grab' >
            <div className='card w-full h-full' onMouseEnter={() => {
              if (isDesktop) {
                setHoveredCard(3)
              }
            }}
              onMouseLeave={() => {
                if (isDesktop) {
                  setHoveredCard(null)
                }
              }}>
              {navigator.maxTouchPoints > 0 ? <img src={cards[2].img} alt='Third Project SS' className='w-full h-[50%] select-none' /> : <img src={cards[2].img} alt='Third Project SS' className='w-full h-full select-none' />}
              {hoveredCard === 3 && (
                <div className='card-text w-60 bg-white opacity-60 text-black p-4 rounded-2xl flex flex-col absolute top-20 right-10 items-center justify-center'>
                  <h4>{cards[2].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[2].paragraph}</p>
                </div>
              )}
              {isNotDesktop && (
                <div className='w-full h-[50%] bg-[#0A0A0A] text-white p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[2].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[2].paragraph}</p>
                </div>
              )}
              {navigator.maxTouchPoints > 0 && isDesktop && (
                <div className='w-full h-[50%] bg-black text-white p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[2].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[2].paragraph}</p>
                </div>
              )}
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shiny-torte-28a200.netlify.app/" target='_blank' className='cursor-grab' >
            <div className='card w-full h-full' onMouseEnter={() => {
              if (isDesktop) {
                setHoveredCard(4)
              }
            }}
              onMouseLeave={() => {
                if (isDesktop) {
                  setHoveredCard(null)
                }
              }}>
              {navigator.maxTouchPoints > 0 ? <img src={cards[3].img} alt='Forth Project SS' className='w-full h-[50%] select-none' /> : <img src={cards[3].img} alt='Forth Project SS' className='w-full h-full select-none' />}
              {hoveredCard === 4 && (
                <div className='card-text w-60 bg-black opacity-65 text-white p-4 rounded-2xl flex flex-col absolute bottom-5 right-5 items-center justify-center'>
                  <h4>{cards[3].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[3].paragraph}</p>
                </div>
              )}
              {isNotDesktop && (
                <div className='w-full h-[50%] bg-[#ECECEC] text-black p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[3].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[3].paragraph}</p>
                </div>
              )}
              {navigator.maxTouchPoints > 0 && isDesktop && (
                <div className='w-full h-[50%] bg-[#ECECEC] text-black p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[3].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[3].paragraph}</p>
                </div>
              )}
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://sunny-pudding-09a490.netlify.app/home" target='_blank' className='cursor-grab' >
            <div className='card w-full h-full' onMouseEnter={() => {
              if (isDesktop) {
                setHoveredCard(5)
              }
            }}
              onMouseLeave={() => {
                if (isDesktop) {
                  setHoveredCard(null)
                }
              }}>
              {navigator.maxTouchPoints > 0 ? <img src={cards[4].img} alt='Fifth Project SS' className='w-full h-[50%] select-none' /> : <img src={cards[4].img} alt='Fifth Project SS' className='w-full h-full select-none' />}
              {hoveredCard === 5 && (
                <div className='card-text w-60 bg-white opacity-60 text-black p-4 rounded-2xl flex flex-col absolute top-12 left-5 items-center justify-center'>
                  <h4>{cards[4].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[4].paragraph}</p>
                </div>
              )}
              {isNotDesktop && (
                <div className='w-full h-[50%] bg-[#012233] text-white p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[4].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[4].paragraph}</p>
                </div>
              )}
              {navigator.maxTouchPoints > 0 && isDesktop && (
                <div className='w-full h-[50%] bg-[#012233] text-white p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[4].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[4].paragraph}</p>
                </div>
              )}
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://transcendent-trifle-35b8a1.netlify.app/" target='_blank' className='cursor-grab' >
            <div className='card w-full h-full' onMouseEnter={() => {
              if (isDesktop) {
                setHoveredCard(6)
              }
            }}
              onMouseLeave={() => {
                if (isDesktop) {
                  setHoveredCard(null)
                }
              }}>
              {navigator.maxTouchPoints > 0 ? <img src={cards[5].img} alt='Sixth Project SS' className='w-full h-[50%] select-none' /> : <img src={cards[5].img} alt='Sixth Project SS' className='w-full h-full select-none' />}
              {hoveredCard === 6 && (
                <div className='card-text w-60 bg-black opacity-60 text-white p-4 rounded-2xl flex flex-col absolute top-20 left-80 items-center justify-center'>
                  <h4>{cards[5].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[5].paragraph}</p>
                </div>
              )}
              {isNotDesktop && (
                <div className='w-full h-[50%] bg-white text-black p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[5].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[5].paragraph}</p>
                </div>
              )}
              {navigator.maxTouchPoints > 0 && isDesktop && (
                <div className='w-full h-[50%] bg-white text-black p-4 rounded-b-2xl flex flex-col items-center justify-center'>
                  <h4>{cards[5].heading}</h4>
                  <p className='text-xl text-center font-normal pt-4'>{cards[5].paragraph}</p>
                </div>
              )}
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PageThree