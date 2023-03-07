import Image from "next/image";
import thankYouIcon from '/public/images/icon-thank-you.svg';


export default function PageThanks() {
    return (
        <div className="max-sm:p-10 max-sm:drop-shadow-xl max-sm:bg-white max-sm:text-xl max-sm:relative max-sm:bottom-40 max-sm:w-11/12 max-sm:rounded-xl max-sm:max-h-[500px] flex flex-col items-center justify-center h-full gap-4 p-4">
            <Image src={thankYouIcon} width={70} height={70}></Image>
            <h1 className="text-4xl font-bold">Thank you!</h1>
            <p className="text-cool_gray text-center">Thanks for confirming your subscription! We hope you have
            fun using our platform. İf you ever need support, please feel
            free to email us at support@loremgaming.com.</p>
        </div>
    )
}