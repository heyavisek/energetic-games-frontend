import Image from "next/image";

const SocialLinks = () => {
    return (
        <div className={`flex justify-center items-center m-4`}>
            <a href={`https://www.youtube.com/@energeticGames`} target={`_blank`}>
                <Image src={`/image/youtubeIcon.svg`} alt={`youtube`} width={`30`} height={`30`} className={`m-3`}/>
            </a>
            <a href={`https://play.google.com/store/apps/dev?id=7918701498462053188`} target={`_blank`}>
                <Image src={`/image/playStoreIcon.svg`} alt={`playstore`} width={`25`} height={`25`} className={`m-3`}/>
            </a>
            <a href={`https://www.linkedin.com/company/energeticgames`} target={`_blank`}>
                <Image src={`/image/linkedInIcon.svg`} alt={`linkedin`} width={`30`} height={`30`} className={`m-3`}/>
            </a>
        </div>
    )
}

export default SocialLinks