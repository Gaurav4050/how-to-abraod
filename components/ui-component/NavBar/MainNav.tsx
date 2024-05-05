'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


const mainNavItems = ['Home', 'Search Course', 'Login','Portal'];

export default function MainNav() {

    const router = useRouter()

    const handleClicked = (item: string) => {
        if(item === 'Home'){
            router.push('/')
        }else if(item === 'Search Course'){
            router.push('/search')
        }else if(item === 'Login'){
            router.push('/login')
        }else if(item === 'Portal'){
            router.push('/portal')
        }
    }

  return (
    <div className="mr-4 hidden gap-2 md:flex">
      {mainNavItems.map((item, index) => (
        <Button key={index} variant="link"
        onClick={()=>{
            handleClicked(item)
        }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}