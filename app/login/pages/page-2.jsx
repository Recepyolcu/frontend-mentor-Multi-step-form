
import Image from 'next/image';
import IconArcade from '/public/images/icon-arcade.svg';
import IconAdvanced from '/public/images/icon-advanced.svg';
import IconPro from '/public/images/icon-pro.svg';
import { useEffect, useState } from 'react';

const classes = {
    boxActive:    "box max-sm:h-fit max-sm:flex-row max-sm:w-full flex flex-col gap-8 p-5 duration-300 w-10/12 ease-out border-2 border-purplish_blue bg-magnolia bg-opacity-70 rounded-lg",
    boxDeactive:  "box max-sm:h-fit max-sm:flex-row max-sm:w-full flex flex-col gap-8 p-5 duration-300 w-10/12 ease-out border-2 border-light_gray bg-opacity-70 rounded-lg",
    textActive:   "",
    textDeactive: "",
    p:            "text-cool_gray pointer-events-none",
    h2:           "pointer-events-none font-bold",
    image:        "pointer-events-none", 
}


export default function Page2({ selectedPlan, yearOrMonth, subData, updateFields }) {
    const [ plan, setPlan ] = useState(selectedPlan);

    const selectPlan = (e) => {
        setPlan(e);
    }
    
    useEffect(() => {
        updateFields({selectedPlan: plan});
    }, [plan]); 
    
    function change() {
        updateFields({yearOrMonth: !yearOrMonth});
    }
    
    return (
        <div className="max-sm:p-10 max-sm:drop-shadow-xl max-sm:bg-white max-sm:text-xl max-sm:relative max-sm:bottom-40 max-sm:w-11/12 max-sm:rounded-xl flex flex-col items-center gap-10 w-full">
            <div className='w-full flex flex-col gap-10'>
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-bold">Select your plan</h1>
                    <p className="text-cool_gray">You have the option of monthly or yearly billing.</p>
                </div>
                <div className="max-sm:flex-col max-sm:items-center flex gap-3 w-full justify-center">
                    <div id='arcade' className={selectedPlan === 'arcade' ? classes.boxActive : classes.boxDeactive} onClick={e => selectPlan(e.target.id)}>
                        <Image className={classes.image} src={IconArcade}></Image>
                        <div className='pointer-events-none flex flex-col gap-1'>
                            <h2 className={classes.h2}>Arcade</h2>
                            <p className={classes.p}><span>$</span><span>{yearOrMonth ? subData.planPrices.yearly[0] : subData.planPrices.monthly[0]}</span></p>
                            <p className='text-marine_blue h-5'>{yearOrMonth ? '2 months free' : ''}</p>
                        </div>
                    </div>
                    <div id='advanced' className={selectedPlan === 'advanced' ? classes.boxActive : classes.boxDeactive} onClick={e => selectPlan(e.target.id)}>
                        <Image className={classes.image} src={IconAdvanced}></Image>
                        <div className='pointer-events-none flex flex-col gap-1'>
                            <h2 className={classes.h2}>Advanced</h2>
                            <p className={classes.p}><span>$</span><span>{yearOrMonth ? subData.planPrices.yearly[1] : subData.planPrices.monthly[1]}</span></p>
                            <p className='text-marine_blue h-5'>{yearOrMonth ? '2 months free' : ''}</p>
                        </div>
                    </div>
                    <div id='pro' className={selectedPlan === 'pro' ? classes.boxActive : classes.boxDeactive} onClick={e => selectPlan(e.target.id)}>
                        <Image className={classes.image} src={IconPro}></Image>
                        <div className='pointer-events-none flex flex-col gap-1'>
                            <h2 className={classes.h2}>Pro</h2>
                            <p className={classes.p}><span>$</span><span>{yearOrMonth ? subData.planPrices.yearly[2] : subData.planPrices.monthly[2]}</span></p>
                            <p className='text-marine_blue h-5'>{yearOrMonth ? '2 months free' : ''}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-6">
                <p className={yearOrMonth ? 'text-cool_gray font-semibold' : 'text-marine_blue font-semibold'}>Monthly</p>
                <label class="switch">
                    <input onChange={change} type="checkbox" className='bg-marine_blue' />
                    <span className={yearOrMonth ? "slider round before:left-7" : "slider round before:left-1"}></span>
                </label>
                <p className={yearOrMonth ? 'text-marine_blue font-semibold' : 'text-cool_gray font-semibold'}>Yearly</p>
            </div>
        </div>
    )
}