import React from 'react'
import { useState } from "react";
import {
    Bell,
    CircleUser,
    Edit,
    Home,
    Library,
    LineChart,
    Menu,
    MessageSquare,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
  } from "lucide-react"
  
  import { Badge } from "@/Components/ui/badge"
  import { Button } from "@/Components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/Components/ui/card"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/Components/ui/dropdown-menu"
  import { Input } from "@/Components/ui/input"
  import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet"
import { UserChange } from '@/Components/UserChange';

export const DashboardLayout = ({children, title, HeaderUtils}) => {
    console.log(window.location.href)
    console.log(window.location.origin)
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <UserChange/>
            
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <a
                href="/"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${window.location.href==(window.location.origin+'/')?'bg-muted':'text-muted-foreground'} transition-all hover:text-primary bg-warning`}
              >
                <Home className="h-4 w-4" />
                Dashboards
              </a>
              <a
                href="/create"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${window.location.href.split('/')[window.location.href.split('/').length-1]==='create'?'bg-muted':'text-muted-foreground'} transition-all hover:text-primary`}
              >
                <Edit className="h-4 w-4" />
                Create
              </a>
              <a
                href="/library"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${window.location.href.split('/')[window.location.href.split('/').length-1]==='library'?'bg-muted':'text-muted-foreground'} transition-all hover:text-primary`}
              >
                <Library className="h-4 w-4" />
                Library
              </a>
              <a
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${window.location.href.split('/')[window.location.href.split('/').length-1]==='chat'?'bg-muted':'text-muted-foreground'} transition-all hover:text-primary`}
              >
                <MessageSquare className="h-4 w-4" />
                Chat
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <a
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </a>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
        {/* <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
         {HeaderUtils}
        </header> */}
{children}
      </div>
    </div>
  )
}
