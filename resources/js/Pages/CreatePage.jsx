
import { EditorComponent } from '@/Components/EditorComponent';
import { HeaderComponent } from '@/Components/HeaderComponent';
import { TimelineComponent } from '@/Components/TimelineComponent';
import { Button } from '@/Components/ui/button';
import { DashboardLayout } from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { ArrowLeft, Bell, CalendarDays, ChevronDownIcon, Clipboard, Globe, PenIcon, PlusCircle, SearchIcon, UploadCloud, X } from 'lucide-react';
import { useRef, useState } from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/Components/ui/resizable"
import { Card } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Badge } from '@/Components/ui/badge';
import {
  Popover, PopoverContent,
  PopoverTrigger,
} from '@/Components/ui/popover';
import { Calendar } from '@/Components/ui/calendar';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/Components/ui/command';
import Checkbox from '@/Components/Checkbox';
import { CommandList } from 'cmdk';
import { EventCard } from '@/Components/EventCard';



export default function CreatePage() {
  const [date, setDate] = useState(new Date())

  const inputFile = useRef(null)
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  return (
    <DashboardLayout title={'Fresh start'}>
      <Head title="Dashboard" />

      {/* <main className="flex flex-1 flex-col"> */}
      {/* <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Sources</h1>
        </div> */}
      {/* <div className='md:flex w-[100%]'> */}
      <div className='flex justify-between bg-white p-5 border-b-2'>
        <p className='text-xl'>Create</p>
        <Button className='flex items-center ml-auto' variant="outline">
          <span className='mr-2'>Feedback</span>
          <Bell className="h-4 w-4" />
        </Button>
      </div>
      <div className='p-5'>
        <HeaderComponent title={'How would you like to start?'} />
        <div className='grid grid-cols-4 gap-5'>


          <a href="/fresh">
            <Card className="p-5" style={{ backgroundImage: "linear-gradient(to right, #FEE2E2, #FFFFFF)" }}>
              <PenIcon className='mb-2' />
              <p className='font-bold'>Fresh start</p>
            </Card>
          </a>
          <a href="/fresh">
            <Card className="p-5" style={{ backgroundImage: "linear-gradient(to right, #FEF9C3, #FFFFFF)" }}>
              <Globe className='mb-2' />
              <p className='font-bold'>Online article</p>
            </Card>
          </a>
          <a href="/fresh">
            <Card className="p-5" style={{ backgroundImage: "linear-gradient(to right, #DBEAFE, #FFFFFF)" }}>
              <Clipboard className='mb-2' />
              <p className='font-bold'>Custom text</p>
            </Card>
          </a>
          <a href="/fresh">
            <Card className="p-5" style={{ backgroundImage: "linear-gradient(to right, #F3E8FF, #FFFFFF)" }}>
              <UploadCloud className='mb-2' />
              <p className='font-bold'>Add document</p>
            </Card>
          </a>

        </div>
        <h4 className='flex gap-2 items-center font-bold py-5'><ChevronDownIcon /> New events</h4>




        {/* Search Input */}

        <div className="flex items-center relative">
          <SearchIcon className="absolute left-3 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search"
            className="w-full rounded-2xl border border-gray-300 px-10 py-2 text-sm bg-muted/40"
          />
        </div>

        <div className='flex gap-2 my-5 justify-center flex-wrap'>
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
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} className='text-gray-400 cursor-pointer rounded-2xl'>
                <PlusCircle className='h-4 w-4' />
                Source
              </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0">
              <Command>
                <CommandInput placeholder="Search options..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No options found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 1
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 2
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 3
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 4
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 5
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} className='text-gray-400 cursor-pointer rounded-2xl'>
                <PlusCircle className='h-4 w-4' />
                Document
              </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0">
              <Command>
                <CommandInput placeholder="Search options..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No options found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 1
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 2
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 3
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 4
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 5
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} className='text-gray-400 cursor-pointer rounded-2xl'>
                <PlusCircle className='h-4 w-4' />
                Jurisdiction
              </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0">
              <Command>
                <CommandInput placeholder="Search options..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No options found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 1
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 2
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 3
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 4
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 5
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} className='text-gray-400 cursor-pointer rounded-2xl'>
                <PlusCircle className='h-4 w-4' />
                Region
              </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0">
              <Command>
                <CommandInput placeholder="Search options..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No options found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 1
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 2
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 3
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 4
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 5
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} className='text-gray-400 cursor-pointer rounded-2xl'>
                <PlusCircle className='h-4 w-4' />
                Subregion
              </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0">
              <Command>
                <CommandInput placeholder="Search options..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No options found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 1
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 2
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 3
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 4
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 5
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} className='text-gray-400 cursor-pointer rounded-2xl'>
                <PlusCircle className='h-4 w-4' />
                Assignee
              </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0">
              <Command>
                <CommandInput placeholder="Search options..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No options found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 1
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 2
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 3
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 4
                    </CommandItem>
                    <CommandItem>
                      <Checkbox className="mr-2" />
                      Option 5
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Button variant={'contain'} className='text-gray-400 cursor-pointer rounded-2xl bg-muted/40'>Reset</Button>
        </div>
        <EventCard title={'UK departs Energy Charter Treaty'} />
        <EventCard title={'Final approval for the directive to empower consumers for the green transition'} />

      </div>

      {/* </div> */}
      {/* </main> */}
    </DashboardLayout>
  );
}
