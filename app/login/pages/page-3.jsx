import { useState, useEffect } from "react";

const cboxData = {
    p: ['Access to multiplayer games', 'Extra 1TB cloud save', 'Custom theme on your profile'],
}

const classes = {
    boxActive:  "w-full flex justify-between items-center border-2 p-5 rounded-lg bg-magnolia border-purplish_blue",
    boxDeative: "w-full flex justify-between items-center border-2 p-5 rounded-lg border-light_gray",
}

let sum = 0;
function Checkbox({ yearOrMonth, selectedPlan, addOns, subData, updateFields }) {
    const [ checkd, setChecked ] = useState(addOns);
    
    const check = () => {
        const checkedItems = []; 
        document.querySelectorAll('.cbox').forEach(item => checkedItems.push(item.checked));
        setChecked(checkedItems);
        
        sum = 0;
        if(yearOrMonth) {
            if(selectedPlan == 'arcade') sum += 90; 
            if(selectedPlan == 'advanced') sum += 120; 
            if(selectedPlan == 'pro') sum += 150; 
            checkedItems.filter((value, index) => {
                if(value == true) {
                    sum += Number(subData.addOnsPrices.yearly[index].split('/')[0]);
                }
            });
        } else {
            if(selectedPlan == 'arcade') sum += 9; 
            if(selectedPlan == 'advanced') sum += 12; 
            if(selectedPlan == 'pro') sum += 15; 
            checkedItems.filter((value, index) => {
                if(value == true) {
                    sum += Number(subData.addOnsPrices.monthly[index].split('/')[0]);
                }
            });
        }
    };
    
    useEffect(() => {
        updateFields({addOns: checkd});
        updateFields({total: sum})
    }, [checkd]);
    
    const cboxes = [];
    
    for(let i = 0; i < 3; i++){
        cboxes.push(
            <label className={addOns[i] ?  classes.boxActive : classes.boxDeative}>
                <div className="flex gap-6">
                    <input onChange={() => check()} checked={addOns[i] ? true : false}  className="cbox w-6 border-light_gray border-2 outline-none" type="checkbox" />
                    <div>
                        <h1 className="max-sm:text-xl text-marine_blue font-bold pointer-events-none">{subData.addOnsPrices.headers[i]}</h1>
                        <p className="max-sm:text-lg text-cool_gray pointer-events-none">{cboxData.p[i]}</p>
                    </div>
                </div>
                <p className="max-sm:text-lg text-purplish_blue"><span>+$</span>{yearOrMonth ? subData.addOnsPrices.yearly[i] : subData.addOnsPrices.monthly[i]}</p>
            </label> 
        )
    }
    return cboxes;
}

export default function Page3({ yearOrMonth, selectedPlan, addOns, subData, updateFields }) {

    return (
        <div className="max-sm:p-10 max-sm:drop-shadow-xl max-sm:bg-white max-sm:text-xl max-sm:relative max-sm:bottom-40 max-sm:w-11/12 max-sm:rounded-xl w-full flex flex-col gap-7">
            <div className="flex flex-col gap-5">
                <h1 className="max-sm:text-3xl text-marine_blue text-4xl font-bold">Pick add-ons</h1>
                <p className="text-cool_gray">Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="flex flex-col gap-5">
                <Checkbox yearOrMonth={yearOrMonth} selectedPlan={selectedPlan} addOns={addOns} subData={subData} updateFields={updateFields}/>
            </div>
        </div>
        
    )
}