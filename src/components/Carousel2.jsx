import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
    const containerStyle = 'p-5 bg-gradient-r from-black via-orange-950 to-black flex justify-center items-center m-2'; // Tailwind CSS classes for the container
    const imgStyle = 'p-1 rounded-xl transition-all duration-75 hover:scale-[1.03] w-fit'; // Tailwind CSS classes for the image

    // Calculate percentage values for container and image based on screen size
    const containerHeightPercentage = '80vh'; // 80% of the viewport height
    const imgHeightPercentage = '50vh'; // 50% of the viewport height

    return (
        <div id="glimpse-section"
        className="flex flex-col"
        style={{
            backgroundImage: `url("../src/assets/glow-lines.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        <div className="flex text-center font-Titillium justify-center items-center py-8 my-2 text-2xl md:text-7xl text-white">Glimpse at Ciencia 2k22</div>
        <Marquee  className="overflow-hidden h-[600px]" pauseOnHover={true} speed={250}>
            {/* Images */}
            <div className={containerStyle} style={{ height: containerHeightPercentage }}>
                <img className={imgStyle} src="https://i.ibb.co/Xj29dhx/image-6.jpg" alt="image-6" style={{ height: imgHeightPercentage }} />
            </div>
            {/* Add other images similarly */}
        </Marquee>
        </div>
    )
}
