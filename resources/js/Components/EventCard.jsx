import React from 'react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowRight, CalendarDays, FileArchive, FlagIcon } from 'lucide-react'
import { Button } from './ui/button'

export const EventCard = ({ title }) => {
    return (
        <div className='my-5'>
            <p className='font-bold'>Today, 22 February 2024</p>
            <Card className="p-5">
            <h4 className='text-xl font-bold'>
            {title}
            </h4>
            <p>
            The UK will leave the Energy Charter Treaty (ECT) after the failure of efforts to align it with net zero, the government has announced today (Thursday 22 February). Signed in 1994, the Energy Charter Treaty was designed to promote international investment in the energy sector, historically providing protections for investors in fossil fuels.
            </p>
            <div className='flex justify-between items-center'>
            <div className='my-5 flex gap-4'>
                <Badge variant={'outline'} className={'p-2 text-gray'}>
                    consilium.europa.eu
                </Badge>
                <Badge variant={'outline'} className={'p-2 bg-muted'}>
                    <FileArchive/> Media release
                </Badge>
                <Badge variant={'outline'} className={'p-2 bg-muted'}>
                    <CalendarDays/> 22 Feb 2024
                </Badge>
                <Badge variant={'outline'} className={'p-2 bg-muted'}>
                   <FlagIcon/> European Union
                </Badge>
            </div>
            <Button>Edit <ArrowRight/></Button>
            </div>
            </Card>
        </div>
    )
}
