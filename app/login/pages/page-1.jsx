export default function Page1({ name, email, phone, updateFields }) {

    const inputValidation = (e) => {
        if(e.target.name === 'name')
        if(!isNaN(e.target.value.slice(-1)) && e.target.value.slice(-1) != ' ') e.target.value = e.target.value.slice(0, e.target.value.length - 1)
        if(e.target.name === 'phone')
        if(isNaN(e.target.value.slice(-1)) && e.target.value.slice(-1) != ' ' || e.target.value.length > 11) e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    }

    return (
        <div className="max-sm:p-10 max-sm:drop-shadow-xl max-sm:bg-white max-sm:text-xl max-sm:relative max-sm:bottom-40 max-sm:w-11/12 max-sm:rounded-xl flex flex-col w-full items-start">
            <div className="flex flex-col mb-10 gap-5">
                <h1 className="max-sm:text-3xl text-4xl font-bold">Personal info</h1>
                <p className="max-sm:text-xl text-cool_gray">Please provide your name, email addess, and phone number.</p>
            </div>
            <div className="flex flex-col gap-5 w-full">
                <label className="w-full" htmlFor="name">
                    <span>Name</span>
                    <input 
                        value={name} 
                        onChange={e => {
                                inputValidation(e);
                                updateFields({ name: e.target.value });
                            }
                        }
                        required
                        autoFocus
                        type="text" 
                        name="name" 
                        placeholder="e.g. Stephen King" 
                        className="bg-transparent p-3 border-2 border-light_gray rounded-lg w-full" />
                </label>
                <label className="w-full" htmlFor="email">
                    <span>Email Address</span>
                    <input 
                        value={email} 
                        onChange={e => {
                            updateFields({ email: e.target.value })
                        }
                    }   
                    required
                    type="text"  
                    name="email" 
                    placeholder="e.g. stephenking@lorem.com " 
                    className="bg-transparent p-3 border-2 border-light_gray rounded-lg w-full" />
                </label>
                <label className="w-full" htmlFor="phone">
                    <span>Phone Number</span>
                    <input 
                        value={phone} 
                        onChange={e => {
                                inputValidation(e);
                                updateFields({ phone: e.target.value })
                            }
                        }
                        required
                        type="text" 
                        name="phone" 
                        placeholder="e.g. +1 234 567 890" 
                        className="bg-transparent p-3 border-2 border-light_gray rounded-lg w-full" />
                </label>
            </div>
        </div>
    )
}