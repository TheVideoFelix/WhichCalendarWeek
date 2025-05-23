'use client'
import {useEffect, useState} from "react"
import {formatDate, getWeekStartEnd} from "@/lib/utils"

interface IWeekPeriod {
    date: Date
}

interface IDate {
    startOfWeek: Date,
    endOfWeek: Date
}

const WeekPeriod = ({date}: IWeekPeriod) => {
    const [weekPeriod, setWeekPeriod] = useState<IDate>({
        startOfWeek: new Date(),
        endOfWeek: new Date()
    })

    useEffect(() => {
        const {start, end} = getWeekStartEnd(date);

        setWeekPeriod({
            startOfWeek: start,
            endOfWeek: end
        });
    }, [date]); // Re-run the effect when the date changes

    return (
        <div className="text-center text-secondary-text text-2xl sm:text-3xl m-9">
            <h2>{formatDate(weekPeriod.startOfWeek)}</h2>
            <h2>-</h2>
            <h2>{formatDate(weekPeriod.endOfWeek)}</h2>
        </div>
    )
}

export default WeekPeriod