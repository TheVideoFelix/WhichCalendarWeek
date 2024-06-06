import WeekCard from "@/components/WeekCard"

export default function Home() {
    return (
        <main className="h-screen flex flex-col">
            <div className="h-full flex flex-col items-center justify-center">
                <WeekCard/>
            </div>

            <a className="text-center text-lg text-primary-text hover:underline m-2"
               href="https://github.com/TheVideoFelix">
                TheVideoFelix
            </a>

        </main>
    )
}

