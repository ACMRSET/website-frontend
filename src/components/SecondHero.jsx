import design from "./../assets/ndesing.png"
const SecondHero = (props) => {
    return (
        <div style={{ backgroundImage: `url(${design}) ` }}
            className="bg-cover h-[60vh] overflow-x-hidden items-center flex flex-col justify-center sticky top-[130px] z-10"
        >
            <h1 className='text-6xl text-white text-center font-semibold mx-auto text-nowrap'>{props.text}</h1>
        </div>
    )
}

export default SecondHero