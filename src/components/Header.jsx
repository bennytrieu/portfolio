import image from "../../src/assets/profile.jpg"

const Header = () => {
    return <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-3 md:gap-8" id="home">
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-nowrap tracking-tighter mb-4">Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Benny</span> 🙂
            </h1>

            <p className="max-w-[500px] text-lg md:text-xl"> I am an aspiring software developer who is born and raised on Oahu. I graduated from the University of Hawaii, class of 2023 with a Bachelor of Science in Computer Science.</p>

        </div>
        <img src={image} className="w-32 rounded-full" alt="" />
    </div>;
};

export default Header