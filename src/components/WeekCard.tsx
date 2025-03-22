'use client'
import {useEffect, useState} from "react";
import WeekPeriod from "@/components/WeekPeriod";
import GetWeek from "@/components/GetWeek";

const WeekCard = () => {
    const [date, setDate] = useState<Date| null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setDate(new Date());
            // Update the date every second
            const timer = setInterval(() => {
                setDate(new Date());
            }, 1000);

            return () => clearInterval(timer);
        }
    }, []);

    return (
        <div
            className="relative flex flex-col rounded-[50px] justify-end items-center w-[310px] sm:w-[450px] h-60 sm:h-80 shadow-lg bg-accent">
            {date && <GetWeek date={date} />}
            {date && <WeekPeriod date={date} />}
        </div>
    );
}

export default WeekCard;