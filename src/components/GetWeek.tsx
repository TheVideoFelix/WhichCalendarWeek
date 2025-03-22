import React, {useEffect, useState} from 'react';
import {getWeek} from "@/lib/utils";

interface IGetWeek {
    date: Date,
}


const GetWeek = ({date}: IGetWeek) => {
    return (
        <h1 className="absolute bottom-16 sm:bottom-20 text-[230px] sm:text-[300px] font-bold p-0 m-0 text-center text-primary-text z-20 drop-shadow-md hover:scale-105 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none">
            {getWeek(date).toString()}
        </h1>
    );
};

export default GetWeek;