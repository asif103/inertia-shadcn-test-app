
import { EditorComponent } from '@/Components/EditorComponent';
import { HeaderComponent } from '@/Components/HeaderComponent';
import { TimelineComponent } from '@/Components/TimelineComponent';
import { Button } from '@/Components/ui/button';
import { DashboardLayout } from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { ArrowLeft, Bell, UploadCloud, X } from 'lucide-react';
import { useRef, useState } from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/Components/ui/resizable"



export default function FreshStart() {

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
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full"
      >
        <ResizablePanel defaultSize={100}>
          <div>
            <div className='flex justify-between bg-white p-5 border-b-2'>
              <p className='text-xl'>Fresh Start</p>
              <Button className='flex items-center ml-auto' variant="outline" onClick={()=>history.back()}>
                <ArrowLeft className="h-4 w-4" />
                <span className='mr-2'>Go back</span>
              </Button>
            </div>
            <div className='p-5'>
              <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} />
              <HeaderComponent title={'Source'} />
              <Button variant="outline" className="mb-2">+ Add</Button>
              <div onClick={onButtonClick}
                className="flex flex-col flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-5 cursor-pointer bg-muted/40 text-muted-foreground"
              >
                <UploadCloud />
                <p>Add source</p>
                <p>Click to upload a file or drag and drop it here. Click ‘Add’ to</p>
                <p>add content from a link.</p>
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={100}>
          <div className=' bg-muted/40'>
            <div className='flex justify-between p-5 border-b-2'>
              <p>Untitled</p>
              <Button className='flex items-center ml-auto' variant="outline">
                <span className='mr-2'>Feedback</span>
                <Bell className="h-4 w-4" />
              </Button>
            </div>
            <div className='p-5'>
              <HeaderComponent title={'Editor'} />

              <EditorComponent title={'At a glance'} />
              <EditorComponent title={'Summary'} />
              <TimelineComponent title={'Timeline'} />
              <EditorComponent title={'Operational'} />
              <EditorComponent title={'Impact'} />
              <EditorComponent title={'Background'} />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      {/* </div> */}
      {/* </main> */}
    </DashboardLayout>
  );
}
