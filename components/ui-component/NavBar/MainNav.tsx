'use client'
import { ModeToggle } from "@/components/mode-changer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";


const mainNavItems = ['Home', 'Search Course', 'Login','Portal'];

export default function MainNav() {

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
    }

  return (
    <div className="mr-4 hidden gap-2 md:flex w-full ">

        <div
        className="flex items-center justify-between w-full"
        >
            <div
            className="flex cursor-pointer"
            onClick={()=>{router.push('/')}}
            >
                <Image src="https://howtoabroad.com/wp-content/uploads/2021/09/cropped-HTA-logo_No-BG.png" alt="logo" width={150} height={100} />
            </div>
            <div
            className="flex gap-4 items-center"
            >
            {mainNavItems.map((item, index) => (
        <Button key={index} variant="link"
        onClick={()=>{
            handleClicked(item)
        }}
        >
          {item}
        </Button>
      ))}

      <ModeToggle/>
            </div>
        </div>

      
    </div>
  );
}