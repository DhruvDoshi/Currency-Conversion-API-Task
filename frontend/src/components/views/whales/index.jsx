import React from 'react';

import Button from "../../common/buttons/clipButton.jsx";
import Networks from "./networks/list";

function WhalesConfig() {

    return (<div className="hero" id="hero">
        <div className="nyxContainer bg-no-repeat bg-top">
            <div>
                <div className="mt-0 md:mt-[2px]">
                    <div className="xl:relative xl:border-[0.5px] border-[#747474aa]">
                        <div className="grid grid-cols-1 xl:grid-cols-2 z-[1]">
                            <div className="text-white pt-[32px] ps-[6px] sm:ps-[16px]" style={{zIndex: '1'}}>
                                <p className="font-[Moboto Mono] font-regular bg-gradient-to-r from-[#01FFC2] to-[#5AB0FF] inline-block text-transparent bg-clip-text text-left xl:text-[24px] lg:text-[24px] md:text-[21px] sm:text-[19px] text-[16px]">
                                    Nyx Cipher
                                </p>

                                <div
                                    className="mt-[10px] xl:text-[55px] lg:text-[55px] md:text-[40px] sm:text-[30px] text-[26px] leading-9 sm:leading-loose md:leading-relaxed lg:leading-normal font-[VioletSans]">
                                    <p>Your Fully Autonomous</p>
                                    <p className="flex justify-start items-center">
                                        <span>AI</span>
                                        <span className="py-0 cornered text-center ml-4">
                        Research Agent
                      </span>
                                    </p>
                                </div>

                                <p className="font-light text-[#EEEEEE] my-[11px] sm:my-[15px] md:my-[20px] lg:my-[26px] font-[RobotoMonoLight] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[14px] leading-tight tracking-widest pe-[6px]">
                                    Experience Nyx Cipher's power: detect scams,
                                    access real-time project data, and navigate the
                                    crypto landscape with knowledge and precision.
                                </p>
                            </div>

                            <div
                                className="bg-[url('../assets/images/bg_images/responsive/nyxbg.png')] bg-no-repeat bg-top bg-[length:100%] xl:bg-none row-span-2 text-white pt-[90px] xl:pt-0 relative flex"
                                style={{zIndex: '1'}}>
                                <div className="w-full h-full nyxBorderX xl:border-0">
                                    <div className="h-full">

                                        <div
                                            className="w-full flex flex-col justify-between border-[#747474aa] xl:border-s-[0.5px] text-white"
                                            style={{height: 'calc(100%)'}}>
                                            <Networks/>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute right-[-2px] top-[88px] xl:hidden z-[2]">
                                    <img src="../assets/images/bg_images/chatBox/responsive/top_right.png" alt=""/>
                                </div>
                                <div className="absolute bottom-[-2px] left-[-3px] xl:hidden">
                                    <img src="../assets/images/bg_images/chatBox/responsive/bottom_left.png"
                                         alt=""/>
                                </div>
                                <div className="absolute bottom-[-2px] left-[-3px] xl:hidden">
                                    <img src="../assets/images/bg_images/chatBox/responsive/bottom.png" alt=""/>
                                </div>
                                <div className="absolute px-[3px] xl:hidden"
                                     style={{zIndex: '-1', height: 'calc(100% - 90px)', width: 'calc(100% - 1px)'}}>
                                    <div className="backdrop-blur-md bg-opacity-60 w-full h-full bg-[black]"
                                         style={{}}>
                                    </div>
                                </div>
                            </div>

                            <div className="text-white px-[10px] pb-[5px]" style={{zIndex: '1'}}>
                                <div className="flex justify-center lg:justify-start gap-[24px] pt-[24px] xl:pt-0">
                                    <Button
                                        detail={{value: "Whitepaper", icon: true}}
                                    />
                                    <Button detail={{value: "Buy $NYX"}}/>
                                </div>
                                <p className="pt-[14px] xl:pt-[85px] pb-[46px] leading-tight tracking-widest text-[#EEEEEE] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-light font-[RobotoMonoLight]">
                                    Let Nyx be your guide, deciphering community
                                    insights to lead your crypto journey with clarity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full xl:bg-[url('../assets/images/bg_images/bottom.png')] bg-no-repeat bg-bottom">
                    <div className="nyxNo border-b-0 pt-[8px] sm:pt-[11px] md:pt-[15px] lg:pt-[15px]">
                        <svg
                            className="ms-[15%] lg:ms-[17%] xl:ms-[19%] w-[70%] h-[70%] lg:w-[66px] lg:h-[48px]"
                            viewBox="0 0 66 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28.2188 27.9375C28.2188 30.1667 27.9792 32.4062 27.5 34.6562C27.0208 36.9062 26.25 38.9688 25.1875 40.8438C24.125 42.6562 22.7083 44.1562 20.9375 45.3438C19.1667 46.5312 16.9688 47.125 14.3438 47.125C12.6146 47.125 11.0625 46.8646 9.6875 46.3438C8.3125 45.8021 7.125 45.0521 6.125 44.0938C4.02083 42.1146 2.53125 39.6667 1.65625 36.75C0.802083 33.8333 0.375 30.8958 0.375 27.9375V19.5625C0.375 17.3542 0.625 15.0833 1.125 12.75C1.625 10.3958 2.42708 8.30208 3.53125 6.46875C4.63542 4.63542 6.0625 3.15625 7.8125 2.03125C9.5625 0.90625 11.7188 0.34375 14.2812 0.34375C16.0312 0.34375 17.6146 0.635417 19.0312 1.21875C20.4479 1.78125 21.6458 2.52083 22.625 3.4375C24.6042 5.29167 26.0208 7.70833 26.875 10.6875C27.7292 13.6667 28.1771 16.625 28.2188 19.5625V27.9375ZM2.8125 34.5L25.4688 11.6562C25.0938 10.3438 24.5938 9.10417 23.9688 7.9375C23.3438 6.77083 22.5833 5.75 21.6875 4.875C20.7708 4 19.6979 3.3125 18.4688 2.8125C17.2604 2.29167 15.8646 2.03125 14.2812 2.03125C11.9271 2.03125 10.0104 2.53125 8.53125 3.53125C7.07292 4.53125 5.8125 5.89583 4.75 7.625C3.8125 9.14583 3.125 11.0208 2.6875 13.25C2.27083 15.4792 2.0625 17.5833 2.0625 19.5625V27.875C2.0625 28.9583 2.11458 30.0625 2.21875 31.1875C2.34375 32.2917 2.54167 33.3958 2.8125 34.5ZM26.5312 27.875V19.5625C26.5104 18.5625 26.4479 17.5521 26.3438 16.5312C26.2604 15.4896 26.1146 14.4583 25.9062 13.4375L3.28125 36.25C3.67708 37.5 4.1875 38.6875 4.8125 39.8125C5.4375 40.9167 6.19792 41.8854 7.09375 42.7188C7.98958 43.5521 9.03125 44.2188 10.2188 44.7188C11.4271 45.1979 12.8021 45.4375 14.3438 45.4375C16.6979 45.4375 18.6667 44.8854 20.25 43.7812C21.8542 42.6771 23.0938 41.2604 23.9688 39.5312C24.9062 37.8438 25.5625 35.9688 25.9375 33.9062C26.3125 31.8229 26.5104 29.8125 26.5312 27.875ZM56.2962 46.5H54.5775V3.1875L41.265 9.40625V7.53125L55.7025 1H56.2962V46.5Z"
                                fill="#747474aa"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default WhalesConfig;