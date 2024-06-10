
import { EditorComponent } from '@/Components/EditorComponent';
import { HeaderComponent } from '@/Components/HeaderComponent';
import { TimelineComponent } from '@/Components/TimelineComponent';
import { Button } from '@/Components/ui/button';
import { DashboardLayout } from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { ArrowLeft, Bell, Bookmark, Brush, File, Folder, Key, UploadCloud, X } from 'lucide-react';
import { useRef, useState } from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/Components/ui/resizable"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/Components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { SummeryComponent } from '@/Components/SummeryComponent';
import { OperationalComponent } from '@/Components/OperationalComponent';
import { AddSecctionComponent } from '@/Components/AddSecctionComponent';
import { TimelineShowComponent } from '@/Components/TimelineShowComponent';
import { ReferenceShowComponent } from '@/Components/ReferenceShowComponent';



export default function Library() {

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
          <Tabs defaultValue="pages">
            <div className='flex justify-between bg-white p-5 border-b-2'>
              <p className='text-xl'>Library</p>
              <TabsList className="grid w-full grid-cols-2 w-[200px]">
                <TabsTrigger value="pages">Pages</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
            </div>
            <div className='p-5'>
              <TabsContent value="pages">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger><span style={{ padding: 5, margin: "0 5px", backgroundColor: "#3B82F6", color: "#fff", borderRadius: 4 }}><Bookmark className="h-4 w-4" /></span> My bookmarks</AccordionTrigger>
                    <AccordionContent>
                      Bookmark accordion value
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger><span style={{ padding: 5, margin: "0 5px", backgroundColor: "#8B5CF6", color: "#fff", borderRadius: 4 }}><Key className="h-4 w-4" /></span> AML CTF</AccordionTrigger>
                    <AccordionContent>
                      AML CTF accordion value
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger><span style={{ padding: 5, margin: "0 5px", backgroundColor: "#8B5CF6", color: "#fff", borderRadius: 4 }}><Key className="h-4 w-4" /></span> ESG</AccordionTrigger>
                    <AccordionContent className="pl-5">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="subitem-1">
                          <AccordionTrigger><span style={{ padding: 5, margin: "0 5px", backgroundColor: "#09090B", color: "#fff", borderRadius: 4 }}><Folder className="h-4 w-4" /></span> Environmental</AccordionTrigger>
                          <AccordionContent>
                            Environmental accordion value
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="subitem-2">
                          <AccordionTrigger><span style={{ padding: 5, margin: "0 5px", backgroundColor: "#09090B", color: "#fff", borderRadius: 4 }}><Folder className="h-4 w-4" /></span> Social</AccordionTrigger>
                          <AccordionContent>
                            Social accordion value
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="subitem-3">
                          <AccordionTrigger><span style={{ padding: 5, margin: "0 5px", backgroundColor: "#09090B", color: "#fff", borderRadius: 4 }}><Folder className="h-4 w-4" /></span> Governance</AccordionTrigger>
                          <AccordionContent>

                            <div className='flex items-center pl-4 cursor-pointer mb-2'>
                              <p style={{ padding: 5, margin: "0 5px", backgroundColor: "#3B82F6", color: "#fff", borderRadius: 4 }}><File className="h-4 w-4" /></p>
                              <p>Energy Charter Treaty</p>
                            </div>
                            <div className='flex items-center pl-4 cursor-pointer mb-2'>
                              <p style={{ padding: 5, margin: "0 5px", backgroundColor: "#F4F4F5", borderRadius: 4 }}><File className="h-4 w-4" /></p>
                              <p>Greenwashing</p>
                            </div>
                            <div className='flex items-center pl-4 cursor-pointer mb-2'>
                              <p style={{ padding: 5, margin: "0 5px", backgroundColor: "#F4F4F5", borderRadius: 4 }}><File className="h-4 w-4" /></p>
                              <p>Climate disclosures</p>
                            </div>
                            {/* <span style={{ padding: 5, margin: "0 5px", backgroundColor: "#3B82F6", color: "#fff", borderRadius: 4 }}><File className="h-4 w-4" /></span> Greenwashing
                              
                              <span style={{ padding: 5, margin: "0 5px", backgroundColor: "#3B82F6", color: "#fff", borderRadius: 4 }}><File className="h-4 w-4" /></span> Climate disclosures */}



                          </AccordionContent>
                        </AccordionItem>


                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger><span style={{ padding: 5, margin: "0 5px", backgroundColor: "#8B5CF6", color: "#fff", borderRadius: 4 }}><Key className="h-4 w-4" /></span> Financial Services</AccordionTrigger>
                    <AccordionContent>
                      Financial Services accordion value
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="events">
                Events
              </TabsContent>
            </div>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={200}>
          <div className=''>
            <div className='flex justify-between p-5 border-b-2'>
              <p>Energy Charter Treaty</p>
              <Button className='flex items-center ml-auto' variant="outline">
                <span className='mr-2'>Feedback</span>
                <Bell className="h-4 w-4" />
              </Button>
            </div>
            <div className='p-5'>
              <>
                <HeaderComponent title={'Energy Charter Treaty '} />
                <p>Updated now</p>
              </>
              <div className='flex justify-between items-center'>
                <p className='text-xl font-bold'>At a glance</p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-muted/40"><Brush className='h-4 w-4 mr-2' /> Set colour</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-20">

                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <p className='flex gap-3 items-center'>
                          <div style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#E4E4E7" }} /> Gray
                        </p>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <p className='flex gap-3 items-center'>
                          <div style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#FFEDD5" }} /> Orange
                        </p>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <p className='flex gap-3 items-center'>
                          <div style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#FEF9C3" }} /> Yellow
                        </p>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <p className='flex gap-3 items-center'>
                          <div style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#DCFCE7" }} /> Green
                        </p>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <p className='flex gap-3 items-center'>
                          <div style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#DBEAFE" }} /> Blue
                        </p>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <p className='flex gap-3 items-center'>
                          <div style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#F3E8FF" }} /> Purple
                        </p>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <p className='flex gap-3 items-center'>
                          <div style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#FCE7F3" }} /> Pink
                        </p>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <p className='flex gap-3 items-center'>
                          <div style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: "#FEE2E2" }} /> Red
                        </p>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className='bg-muted/40 p-5 m-5'>
                <ul className='list-disc'>
                  <li>On 22 February 2024, the UK government announced its withdrawal from the Energy Charter Treaty after modernisation efforts fail.</li>
                  <li>On 1 September 2023, the UK government confirmed it will be reviewing its Energy Charter Treaty membership, and considering withdrawal if modernisation efforts fail.</li>
                  <li>On 24 June 2022, the UK government announced it had reached a landmark agreement to modernise the terms of the Energy Charter Treaty.</li>
                </ul>
              </div>


              <SummeryComponent/>
              <TimelineShowComponent/>
              <OperationalComponent/>
              <AddSecctionComponent title={"Impact"}/>
              <AddSecctionComponent title={"Background"}/>
              <ReferenceShowComponent/>
            </div>

          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      {/* </div> */}
      {/* </main> */}
    </DashboardLayout>
  );
}
