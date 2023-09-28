import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full gap-4 flex items-center md:flex-row flex-col justify-center px-32 bg-darkDarker md:justify-start py-8">
            <h1 className="text-2xl flex items-center text-white font-bold shadow shadow-primary bg-transparent">
                Yefee-<span className="text-primary">UI</span>
            </h1>

            <div className="md:ml-16 flex items-center justify-center flex-wrap gap-8">
                <Link href="/components">
                    <h2 className="text-base font-medium text-white hover:text-primary duration-200">
                        Components
                    </h2>
                </Link>

                <Link href="https://github.com/Yefee8/yefee-ui">
                    <h2 className="text-base font-medium text-white hover:text-primary duration-200">
                        Github
                    </h2>
                </Link>

                <Link href="https://www.npmjs.com/package/yefee-ui">
                    <h2 className="text-base font-medium text-white hover:text-primary duration-200">
                        Npm
                    </h2>
                </Link>
            </div>
        </div>
    )
}