import { useEffect, useState } from "react";

const sm = 640;

function handleResize() {
    if (window.innerWidth > sm) setIsResized(true);
    else setIsResized(false);
}

export default function Sidebar(props) {
    const [ isResized, setIsResized ] = useState(false);
    const classes = {
        active:   "bg-light_blue text-black flex items-center justify-center w-8 h-8 max-sm:w-10 max-sm:h-10 rounded-full",
        deactive: "border-light_blue border-2 flex items-center justify-center w-8 h-8 max-sm:w-10 max-sm:h-10 rounded-full"
    }

    useEffect(() => {
        addEventListener('resize', handleResize);
    });
        

    return (
        <div className="max-sm:w-full max-sm:flex-row max-sm:justify-center max-sm:rounded-none max-sm:h-64 max-sm:bg-bottom max-sm:gap-4 bg-purplish_blue bg-sideBackground bg-cover bg-bottom w-[355px] h-full p-7 rounded-lg text-white flex flex-col gap-8 items-start">
            <div className="flex gap-4 items-center">
                <span className={props.page == 0 ? classes.active : classes.deactive}>1</span>
                    {(isResized) ? 
                    <div className="flex flex-col">
                        <span className="text-cool_gray text-xs">STEP 1</span>
                        <span className="text-sm text-white">YOUR INFO</span>
                    </div>
                        : ''    
                    }
            </div>
            <div className="flex gap-4 items-center">
                <span className={props.page == 1 ? classes.active : classes.deactive}>2</span>
                {(window.innerWidth > sm || isResized) ? 
                <div className="flex flex-col">
                    <span className="text-cool_gray text-xs">STEP 2</span>
                    <span className="text-sm ">SELECT PLAN</span>
                </div>
                    : ''
                }
            </div>
            <div className="flex gap-4 items-center">
                <span className={props.page == 2 ? classes.active : classes.deactive}>3</span>
                {(window.innerWidth > sm || isResized) ? 
                <div className="flex flex-col">
                    <span className="text-cool_gray text-xs">STEP 3</span>
                    <span className="text-sm ">ADD-ONS</span>
                </div>
                    : ''
                }
            </div>
            <div className="flex gap-4 items-center">
                <span className={(props.page == 3 || props.page == 4) ? classes.active : classes.deactive}>4</span>
                {window.innerWidth > sm ? 
                <div className="flex flex-col">
                    <span className="text-cool_gray text-xs">STEP 4</span>
                    <span className="text-sm">SUMMARY</span>
                </div>
                    : ''
                }
            </div>
        </div>
    )
}