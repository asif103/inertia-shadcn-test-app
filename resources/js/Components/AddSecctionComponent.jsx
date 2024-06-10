import { Plus } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

export const AddSecctionComponent = ({title}) => {
  return (
    <div>
        <p className='text-xl font-bold'>{title}</p>
        <div className='p-5 flex gap-2 justify-center items-center bg-muted rounded-lg m-5 border'>
            <Button className="flex gap-2" variant="outline">

            <Plus/>
            <p>Add section</p>
            </Button>
        </div>
    </div>
  )
}
