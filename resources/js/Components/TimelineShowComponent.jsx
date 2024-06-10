import { File, SearchIcon, ShieldCheck } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export const TimelineShowComponent = () => {
  return (
    <div className='my-5'>
        <p className='text-xl font-bold'>Timeline</p>
        <div className="flex items-center relative">
          <SearchIcon className="absolute left-3 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search"
            className="w-full rounded-2xl border border-gray-300 px-10 py-2 text-sm bg-muted/40"
          />
        </div>
        <div className='flex items-center justify-between my-3'>
            <div className='flex gap-2 items-center'>
                <div className='text-white h-10 w-10 rounded shadow-lg flex justify-center items-center' style={{backgroundColor:"#EF4444", }}><ShieldCheck className='h-5 w-5'/></div>
                <p className='font-bold'>UK government expected to depart from Energy Charter Treaty</p>
            </div>
            <p>22 Feb 2025</p>
        </div>
        <div className='flex items-center justify-between my-3'>
            <div className='flex gap-2 items-center'>
                <div className='text-white h-10 w-10 rounded shadow-lg flex justify-center items-center' style={{backgroundColor:"#EAB308", }}><File className='h-5 w-5'/></div>
                <p className='font-bold'>UUK government announces departure from Energy Charter Treaty</p>
            </div>
            <p>22 Feb 2025</p>
        </div>
        <div className='flex items-center justify-between my-3'>
            <div className='flex gap-2 items-center'>
                <div className='text-white h-10 w-10 rounded shadow-lg flex justify-center items-center' style={{backgroundColor:"#3B82F6", }}><File className='h-5 w-5'/></div>
                <p className='font-bold'>UK government announces it is reviewing membership of Energy Charter Treaty</p>
            </div>
            <p>22 Feb 2025</p>
        </div>
        <div className='flex items-center justify-between my-3'>
            <div className='flex gap-2 items-center'>
                <div className='text-white h-10 w-10 rounded shadow-lg flex justify-center items-center' style={{backgroundColor:"#3B82F6", }}><File className='h-5 w-5'/></div>
                <p className='font-bold'>UK government announces it is reviewing membership of Energy Charter Treaty</p>
            </div>
            <p>22 Feb 2025</p>
        </div>
        <Button variant="outline" className="rounded-2xl bg-muted">See history</Button>
    </div>
  )
}
