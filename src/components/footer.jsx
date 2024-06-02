import {React} from "react";

const authorText = `Made by Energetic Games`

const Footer = ()=>{
    return(
        <footer className={`footer w-full align-bottom text-white p-4`}>
            <div className={`flex justify-center`}>
                <div className={`flex flex-col items-center`}>
                    <p className={`text-lg`}>{authorText}</p>
                    <p className={`flex flex-wrap text-base sm:text-xs lg:text-[15px] text-gray-400`}>
                        Copyright &copy; 2024 <b className={` text-white`}>&nbsp; Energetic Games &nbsp;</b> All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer