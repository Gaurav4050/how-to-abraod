
'use client'
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slash } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';


type Course = {
  id: number;
  name: string;
  category: string;
  language: string;
  country: string;
  description: string;
  about: string;
};

const courses:Course[] = [
  {
    id: 1,
    name: "Web Development Bootcamp",
    category: "Technology",
    language: "English",
    country: "USA",
    description: "Comprehensive bootcamp covering HTML, CSS, JavaScript, React, and Node.js.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mi quis nulla commodo posuere.",
  },
  {
    id: 2,
    name: "Digital Marketing Fundamentals",
    category: "Business",
    language: "English",
    country: "UK",
    description: "Learn SEO, social media marketing, email marketing, and PPC advertising basics.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mi quis nulla commodo posuere.",
  },
  {
    id: 3,
    name: "Graphic Design Mastery",
    category: "Singing",
    language: "English",
    country: "Australia",
    description: "Master typography, color theory, layout, and composition in graphic design.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mi quis nulla commodo posuere.",
  },
  {
    id: 4,
    name: "Machine Learning Foundations",
    category: "Technology",
    language: "English",
    country: "USA",
    description: "Explore machine learning algorithms, data preprocessing, and model evaluation.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mi quis nulla commodo posuere.",
  },
  {
    id: 5,
    name: "Entrepreneurship Essentials",
    category: "Development",
    language: "English",
    country: "UK",
    description: "Gain skills in business planning, market research, financial management, and leadership.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mi quis nulla commodo posuere.",
  },
  {
    id: 6,
    name: "User Experience Design",
    category: "Design",
    language: "English",
    country: "Canada",
    description: "Design intuitive and user-friendly interfaces for digital products and services.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mi quis nulla commodo posuere.",
  },
  {
    id: 7,
    name: "Data Science Bootcamp",
    category: "Technology",
    language: "English",
    country: "USA",
    description: "Become proficient in data analysis, machine learning, and data visualization.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mi quis nulla commodo posuere.",
  },
  {
    id: 8,
    name: "Finance Fundamentals",
    category: "Business",
    language: "English",
    country: "UK",
    description: "Understand financial statements, valuation techniques, and investment strategies.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mi quis nulla commodo posuere.",
  },
  {
    id: 9,
    name: "UI/UX Design",
    category: "Design",
    language: "Hindi",
    country: "INDIA",
    description: "Create engaging and user-centric interfaces for digital products.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mi quis nulla commodo posuere.",
  },
  {
    id: 10,
    name: "Cybersecurity Essentials",
    category: "Technology",
    language: "English",
    country: "UK",
    description: "Explore network security, encryption, threat detection, and incident response.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mi quis nulla commodo posuere.",
  },
];


const uniqueCategories: string[] = Array.from(new Set(courses.map(course => course.category)));
const uniqueLanguages: string[] = Array.from(new Set(courses.map(course => course.language)));
const uniqueCountries: string[] = Array.from(new Set(courses.map(course => course.country)));


const SearchCourse = () => {

  const [courseList,setCourseList] = React.useState(courses)
  const [config,setConfig] = React.useState({
    category: '',
    language: '',
    country: '',
    name: ''
  })

  const handleChange = (value:any, name:string) => {
    setConfig({
      ...config,
      [name]: value
    })
  }

  const handleChangeInput = (e:any) => {
    setConfig({
      ...config,
      name: e.target.value
    })
  }

  const handlePress = () => {

    console.log(config)

    const filteredCourses = courses.filter(course => {
      if(config.category && course.category !== config.category) return false
      if(config.language && course.language !== config.language) return false
      if(config.country && course.country !== config.country) return false
      if(config.name && course.name.toLowerCase().indexOf(config.name.toLowerCase()) === -1) return false
      return true
    })
    setCourseList(filteredCourses)
  }

  const handleReset = () => {
    setCourseList(courses)
    setConfig({
      category: '',
      language: '',
      country: '',
      name: ''
    })
  }

  return (
    <div className="container mx-auto mt-3  px-4">
      <Breadcrumb className='mb-3'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/search-course">Search Courser</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col lg:flex-row">
        {/* Filter Section */}
        <Card className="w-full lg:w-1/3 mr-5 mb-8 lg:mb-0 ">


          <div >
            <h2 className="text-2xl font-semibold mb-1 pt-5 pl-4 ">Filter Courses</h2>
            <div className="rounded p-4 mb-4 h-full md:h-[70vh] ">
              {/* Filters content goes here */}
              {/* Example: */}
              <div className="mb-2 w-full mt-0">
                <h3 className="font-semibold mb-2">Category</h3>
                {/* Category filters */}
                <Select 
                onValueChange={(value)=>{
                  console.log(value)
                  handleChange(value,'category')
                }}

                value={config.category}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Search Based on Category" />
                  </SelectTrigger>
                  <SelectContent>
                  {uniqueCategories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>


              <div className="mb-2 w-full mt-5">
                <h3 className="font-semibold mb-2">University Name</h3>
                {/* Category filters */}
                <Input
                  className="w-full mt-2"
                  placeholder='Search Based on University Name'
                  onChange={handleChangeInput}
                  value={config.name}
                />
              </div>


              <div className="mb-2 w-full mt-5">
                <h3 className="font-semibold mb-2">Language</h3>
                {/* Category filters */}
                <Select

                  onValueChange={(value)=>{
                    console.log(value)
                    handleChange(value,'language')
                  }}
                  value={config.language}

                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="
                    Search Based on Language
                    " />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      uniqueLanguages.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </div>


              <div className="mb-2 w-full mt-5">
                <h3 className="font-semibold mb-2">Country</h3>
                {/* Category filters */}
                <Select
                
                onValueChange={(value)=>{
                  console.log(value)
                  handleChange(value,'country')
                }}

              value={config.country}


                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="
                    Search Based on Country
                    " />
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueCountries.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>


              <Button
                className='w-full mt-8'
                onClick={handlePress}
              >Find Out</Button>

<Button
                className='w-full mt-8'
                onClick={handleReset}
                variant='outline'
              >Reset Filter</Button>

              {/* Add more filters here */}
            </div>
          </div>
        </Card>




        {/* Course Listings */}
        <div className="w-full lg:w-2/3 mt-10 md:mt-0 md:h-[80vh] md:overflow-scroll search-course">
          <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {courseList.map(course => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt--2">
                  <div className="mb-2 mt--2 flex gap-2 items-center">
                    <Badge variant="outline">{course.category}</Badge>
                    <Badge variant="outline">{course.country}</Badge>
                    <Badge variant="outline">{course.language}</Badge>
                  </div>
                  About Course {course.name} {course.description}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Apply</Button>
                  <Button>View Course</Button>
                </CardFooter>
              </Card>
            ))}


            
          </div>

          {
              courseList.length === 0 && <h2 className="text-2xl font-semibold mb-4 text-center w-full mt-10">No Course Found !!</h2>
            }
        </div>
      </div>
    </div>
  );
}

export default SearchCourse;
