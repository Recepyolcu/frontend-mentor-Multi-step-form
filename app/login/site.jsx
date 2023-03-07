'use client'
import Sidebar from "./sidebar";
import Page1 from "./pages/page-1";
import Page2 from "./pages/page-2";
import Page3 from "./pages/page-3";
import Page4 from "./pages/page-4";
import PageThanks from "./pages/Page-thanks";
import { useState } from "react";
import { useMultistepForm } from "./useMultistepForm";

const INITIAL_DATA = {
    name: "",
    email: "",
    phone: "",
    yearOrMonth: false,
    selectedPlan: "",
    addOns: [false, false, false],
    total: 0,
}

const subData = {
    addOnsPrices: {
        headers: ['Online service', 'Larger storage', 'Customizable profile'],
        yearly: ['10/yr', '20/yr', '20/yr'],
        monthly: ['1/mo', '2/mo', '2/mo']
    },
    planPrices: {
        yearly: ['90/yr', '120/yr', '150/yr'],
        monthly: ['9/mo', '12/mo', '15/mo']
    }
}

export default function Site(){
    const [ data, setData ] = useState(INITIAL_DATA);
    const { step, back, next, goTo, currentStepIndex, isFirstStep, isLastStep } = useMultistepForm([
        <Page1 {...data} updateFields={updateFields}/>,
        <Page2 {...data} subData={subData} updateFields={updateFields}/>,
        <Page3 {...data} subData={subData} updateFields={updateFields}/>,
        <Page4 {...data} subData={subData} updateFields={updateFields}/>,
        <PageThanks />,
    ]);

    function updateFields(fields) {
        setData(prev => {
            return {...prev, ...fields}
        })
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        next();
    }

    const btnWrapperClass = !isFirstStep ? "max-sm:bg-white max-sm:w-full max-sm:p-5 flex flex-row justify-between w-full" : "max-sm:bg-white max-sm:w-full max-sm:p-5  flex flex-row justify-end w-full";
    
    
    return (
        <div className="card max-sm:h-full max-sm:flex-col max-sm:w-full max-sm:p-0 max-sm:bg-magnolia bg-white p-5 h-3/5 flex flex-row items-center gap-20 rounded-lg">
            <Sidebar page={currentStepIndex}/>
            <div className="text-marine_blue max-sm:h-full flex flex-col justify-between h-full pt-10 w-full lg:pr-16 items-start">
                <form onSubmit={handleSubmit} className="max-sm:items-center flex flex-col h-full justify-between items-start w-full gap-8">
                    {step}
                    {!isLastStep ? 
                    <div className={btnWrapperClass}>
                        {!isFirstStep ? <button className="text-cool_gray font-semibold" type="button" onClick={back}>Go Back</button> : <div></div>}
                        <button className={!(currentStepIndex == 3) ? "max-sm:rounded-md px-7 py-3 text-white bg-marine_blue font-semibold rounded-lg" : "max-sm:rounded-md px-7 py-3 text-white bg-purplish_blue font-semibold rounded-lg hover:opacity-60 duration-300"} type="submit">{(currentStepIndex == 3) ? "Confirm" : "Next Step"}</button>
                    </div>
                    : ''
                    }
                </form>
            </div>
        </div>
    )
}
