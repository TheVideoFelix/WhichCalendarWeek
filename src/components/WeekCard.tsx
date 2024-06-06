'use client'
import {getWeek} from "@/lib/utils"
import {useEffect, useState} from "react"
import WeekPeriod from "@/components/WeekPeriod"

const WeekCard = () => {
    const [date, setDate] = useState<Date>(() => new Date())

    useEffect(() => {
        // Update the date every second
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(timer)

    }, [])

    return (
        <div
            className="relative flex flex-col rounded-[50px] justify-end items-center w-[450px] h-80 shadow-lg bg-accent">
            <h1 className="absolute bottom-20 text-[300px] font-bold p-0 m-0 text-center text-primary-text z-20 drop-shadow-md hover:scale-105 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none">
                {getWeek(date)}
            </h1>

            <WeekPeriod date={date}/>
        </div>
    )
}

export default WeekCard