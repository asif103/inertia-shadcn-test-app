import React from 'react'
import { useState } from 'react';

import { Button } from './ui/button';
import { CalendarDays, Plus, PlusCircle, X } from 'lucide-react';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
const ChildComponent = ({ date, setDate }) => {
    
    return (
    <div>
        <div className='flex gap-2 items-center my-2'>
        <Button variant="outline" className="p-4"><PlusCircle/></Button>
        <Input placeholder="Event description"/>
        </div>
        <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} className='text-gray-400 cursor-pointer rounded-2xl'><CalendarDays className='h-4 w-4' /> Pick a date</Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
    </div>
    );
};


export const TimelineComponent = ({ title }) => {
    const [date, setDate] = useState(new Date())
    const [shown, setShown] = useState(true)
    const [timelineComponents, setTimelineComponents] = useState([{}]);

    const addComponent = () => {
        setTimelineComponents([...timelineComponents, {}]);
    };

    const removeComponent = (index) => {
        setTimelineComponents(timelineComponents.filter((_, i) => i !== index));
    };


    function onChange(e) {
        setValue(e.target.value);
    }
    return (<>
        {
            shown ?
                <div className='p-5 bg-white rounded-lg border border-solid m-3'>

                    <div className='flex justify-between mb-2'>
                        <h2 className='text-md font-bold'>{title}</h2>
                        <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => setShown(false)}><X /></Button>
                    </div>
                    <div>
                        {timelineComponents.map((_, index) => (
                            <div key={index} style={{display:"grid", gridTemplateColumns:"11fr 1fr", alignItems:"start", gridGap:5}}>
                                <ChildComponent date={date} setDate={setDate} />
                                {timelineComponents.length > 1 && (
                                    <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => removeComponent(index)}><X /></Button>
                                )}
                            </div>
                        ))}
                        <Button variant="outline" className="rounded-2xl my-2" onClick={addComponent}><Plus /> Add</Button>
                    </div>

                </div>
                : ""}

    </>
    )
}
