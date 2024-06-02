import Image from "next/image";

const MainSection = () => {
    return (
        <section>
            <div className={`flex items-center justify-center w-full relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]`}>

                <div className={`absolute  h-full w-full`} style={{background: `rgba(0, 0, 0, 0.3)`, zIndex : 1}}></div>
                <Image src={`/image/mainBackground.webp`} alt={`main image`} fill={true} className={`relative top-0 left-0 w-full h-full object-cover`}/>
                <div className={`flex items-center flex-col z-[1]`}>
                    <Image
                        className={`h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] sm:h-[150px] sm:w-[150px]`}
                        src={`/image/logo.svg`}
                        alt={`main image`}
                        width={`1`}
                        height={`1`}
                        style={{filter: `drop-shadow(0 0 0.2rem #00000099)`}}

                    />
                    <h1
                        className={`text-white  font-bold text-[40px] sm:text-[50px] lg:text-[80px] `}
                        style={{filter: `drop-shadow(0 0 0.5rem #00000099)`}}>Energetic Games</h1>
                </div>
            </div>
        </section>
    )
}

export default MainSection