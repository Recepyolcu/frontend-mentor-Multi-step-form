import { useState } from "react";



export default function Page4({selectedPlan, yearOrMonth, addOns, total, subData }) {
    let plan = selectedPlan;
    plan = plan.charAt(0).toUpperCase() + plan.slice(1);
    return (
        <div className="max-sm:p-10 max-sm:drop-shadow-xl max-sm:bg-white max-sm:text-xl max-sm:relative max-sm:bottom-40 max-sm:w-11/12 max-sm:rounded-xl flex flex-col gap-8">
            <div className="flex flex-col gap-5">
                <h1 className="text-marine_blue text-4xl font-bold">Finishing up</h1>
                <p className="text-cool_gray">Double-check everything looks OK before confirming.</p>
            </div>
            <div className="flex flex-col gap-5 p-5 rounded-lg">
                <div className="">
                    <div className="bg-slate-50 p-4 flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-marine_blue text-xl font-semibold">{plan} {yearOrMonth ? '(Yearly)' : '(Monthly)'}</h2>
                                <button className="text-cool_gray underline hover:text-purplish_blue">Change</button>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">${(selectedPlan == 'arcade' && yearOrMonth) ? subData.planPrices.yearly[0] : (selectedPlan == 'advanced' && yearOrMonth) ? subData.planPrices.yearly[1] : (selectedPlan == 'pro' && yearOrMonth) ? subData.planPrices.yearly[2] : (selectedPlan == 'arcade' && !yearOrMonth) ? subData.planPrices.monthly[0] : (selectedPlan == 'advanced' && !yearOrMonth) ? subData.planPrices.monthly[1] : (selectedPlan == 'pro' && !yearOrMonth) ? subData.planPrices.monthly[2] : '-'}</p>
                            </div>
                        </div>
                        <div className="h-0.5 bg-light_gray"/>
                        <div className="flex flex-col gap-3 text-cool_gray">
                            {addOns[0] ? <div className="flex flex-row justify-between"><p>{subData.addOnsPrices.headers[0]}</p> <p className="add-price text-marine_blue">+${yearOrMonth ? subData.addOnsPrices.yearly[0] : subData.addOnsPrices.monthly[0]}</p></div> : ''}
                            {addOns[1] ? <div className="flex flex-row justify-between"><p>{subData.addOnsPrices.headers[1]}</p> <p className="add-price text-marine_blue">+${yearOrMonth ? subData.addOnsPrices.yearly[1] : subData.addOnsPrices.monthly[1]}</p></div> : ''}
                            {addOns[2] ? <div className="flex flex-row justify-between"><p>{subData.addOnsPrices.headers[2]}</p> <p className="add-price text-marine_blue">+${yearOrMonth ? subData.addOnsPrices.yearly[2] : subData.addOnsPrices.monthly[2]}</p></div> : ''}
                        </div>
                    </div>
                </div>
                <div className="p-4 flex justify-between">
                    <p className="text-cool_gray">Total {yearOrMonth ? '(per year)' : '(per month)'}</p>
                    <p className="text-2xl font-semibold text-purplish_blue">+${ total + (yearOrMonth ? '/yr': '/mo')}</p>
                </div>
            </div>
        </div>
    )
}