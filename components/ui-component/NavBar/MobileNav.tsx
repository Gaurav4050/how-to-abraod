'use client'
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const mobileItems = ['Home', 'Search Course', 'Login','Portal'];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
const router = useRouter()
  const handleClicked = (item: string) => {
    if(item === 'Home'){
        router.push('/')
    }else if(item === 'Search Course'){
        router.push('/search-course')
    }else if(item === 'Login'){
        router.push('/login')
    }else if(item === 'Portal'){
        router.push('/portal')
    }

    setOpen(false);
}

  return (
    <Sheet open={open} onOpenChange={setOpen}>

      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left"> 
        <div className="flex flex-col items-start">
          {mobileItems.map((item, index) => (
            <Button
              key={index}
              variant="link"
              onClick={()=>{
                handleClicked(item)
            }}
            >
              {item}
            </Button>
          ))}
        </div>
      </SheetContent>

    </Sheet>
  );
}