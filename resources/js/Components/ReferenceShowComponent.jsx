import { File, SearchIcon, ShieldCheck } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export const ReferenceShowComponent = () => {
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
                <div className='h-10 w-10 rounded shadow-lg flex justify-center items-center border' style={{backgroundColor:"#FAFAFA", }}><File className='h-5 w-5'/></div>
                <p className='font-bold'>UK departs Energy Charter Treaty</p>
            </div>
            <p>22 Feb 2025</p>
        </div>
        <div className='flex items-center justify-between my-3'>
            <div className='flex gap-2 items-center'>
                <div className='h-10 w-10 rounded shadow-lg flex justify-center items-center border' style={{backgroundColor:"#FAFAFA", }}><File className='h-5 w-5'/></div>
                <p className='font-bold'>UK reviewing membership of energy treaty</p>
            </div>
            <p>22 Feb 2025</p>
        </div>
        <div className='flex items-center justify-between my-3'>
            <div className='flex gap-2 items-center'>
                <div className='h-10 w-10 rounded shadow-lg flex justify-center items-center border' style={{backgroundColor:"#FAFAFA", }}><File className='h-5 w-5'/></div>
                <p className='font-bold'>UK strengthens protections for taxpayers in energy treaty negotiations</p>
            </div>
            <p>22 Feb 2025</p>
        </div>
        <div className='flex items-center justify-between my-3'>
            <div className='flex gap-2 items-center'>
                <div className='h-10 w-10 rounded shadow-lg flex justify-center items-center border' style={{backgroundColor:"#FAFAFA", }}><File className='h-5 w-5'/></div>
                <p className='font-bold'>Energy Charter Treaty</p>
            </div>
            <p>22 Feb 2025</p>
        </div>
        <Button variant="outline" className="rounded-2xl bg-muted">See history</Button>
    </div>
  )
}
