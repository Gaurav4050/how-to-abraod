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
  
const SearchCourse = () => {
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
        <div className="w-full lg:w-1/3 pr-8 mb-8 lg:mb-0 ">
          <h2 className="text-2xl font-semibold mb-4">Filter Courses</h2>
          <div className="bg-cyan-100 rounded p-4 mb-4  h-[75vh] ">
            {/* Filters content goes here */}
            {/* Example: */}
            <div className="mb-2 w-full mt-5">
  <h3 className="font-semibold mb-2">Category</h3>
  {/* Category filters */}
  <Select >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
</div>


<div className="mb-2 w-full mt-8">
  <h3 className="font-semibold mb-2">University Name</h3>
  {/* Category filters */}
  <Input 
  className="w-full mt-2"
  />
</div>


<div className="mb-2 w-full mt-8">
  <h3 className="font-semibold mb-2">Language</h3>
  {/* Category filters */}
  <Select >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
</div>


<div className="mb-2 w-full mt-8">
  <h3 className="font-semibold mb-2">Country</h3>
  {/* Category filters */}
  <Select >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
</div>


<Button
className='w-full mt-8'
>Find Out</Button>

            {/* Add more filters here */}
          </div>
        </div>


        
        {/* Course Listings */}
        <div className="w-full lg:w-2/3  h-[80vh] overflow-scroll search-course">
          <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4
         
          ">
          <Card>
  <CardHeader>
    <CardTitle>Courser Name</CardTitle>
    <CardDescription>Courser description goes here ....</CardDescription>
   
  </CardHeader>
  <CardContent
  className='mt--2'
  >
  <div
    className="mb-2 mt--2"
    >
    <Badge variant="outline">Technical</Badge>
    </div>
    About Curese Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat itaque ratione iste laboriosam ullam nostrum perferendis reprehenderit, voluptatum modi praesentium ducimus quibusdam nisi eveniet provident natus fugiat accusantium deleniti omnis. Doloribus qui libero dolores dolore temporibus. Amet, tempora temporibus eius, fugiat esse itaque distinctio sequi quia porro numquam aliquam.
  </CardContent>
  <CardFooter className="flex justify-between">
        <Button variant="outline">Apply</Button>
        <Button>View Course</Button>
      </CardFooter>
</Card><Card>
  <CardHeader>
    <CardTitle>Courser Name</CardTitle>
    <CardDescription>Courser description goes here ....</CardDescription>
   
  </CardHeader>
  <CardContent
  className='mt--2'
  >
  <div
    className="mb-2 mt--2"
    >
    <Badge variant="outline">Technical</Badge>
    </div>
    About Curese Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat itaque ratione iste laboriosam ullam nostrum perferendis reprehenderit, voluptatum modi praesentium ducimus quibusdam nisi eveniet provident natus fugiat accusantium deleniti omnis. Doloribus qui libero dolores dolore temporibus. Amet, tempora temporibus eius, fugiat esse itaque distinctio sequi quia porro numquam aliquam.
  </CardContent>
  <CardFooter className="flex justify-between">
        <Button variant="outline">Apply</Button>
        <Button>View Course</Button>
      </CardFooter>
</Card><Card>
  <CardHeader>
    <CardTitle>Courser Name</CardTitle>
    <CardDescription>Courser description goes here ....</CardDescription>
   
  </CardHeader>
  <CardContent
  className='mt--2'
  >
  <div
    className="mb-2 mt--2"
    >
    <Badge variant="outline">Technical</Badge>
    </div>
    About Curese Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat itaque ratione iste laboriosam ullam nostrum perferendis reprehenderit, voluptatum modi praesentium ducimus quibusdam nisi eveniet provident natus fugiat accusantium deleniti omnis. Doloribus qui libero dolores dolore temporibus. Amet, tempora temporibus eius, fugiat esse itaque distinctio sequi quia porro numquam aliquam.
  </CardContent>
  <CardFooter className="flex justify-between">
        <Button variant="outline">Apply</Button>
        <Button>View Course</Button>
      </CardFooter>
</Card><Card>
  <CardHeader>
    <CardTitle>Courser Name</CardTitle>
    <CardDescription>Courser description goes here ....</CardDescription>
   
  </CardHeader>
  <CardContent
  className='mt--2'
  >
  <div
    className="mb-2 mt--2"
    >
    <Badge variant="outline">Technical</Badge>
    </div>
    About Curese Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat itaque ratione iste laboriosam ullam nostrum perferendis reprehenderit, voluptatum modi praesentium ducimus quibusdam nisi eveniet provident natus fugiat accusantium deleniti omnis. Doloribus qui libero dolores dolore temporibus. Amet, tempora temporibus eius, fugiat esse itaque distinctio sequi quia porro numquam aliquam.
  </CardContent>
  <CardFooter className="flex justify-between">
        <Button variant="outline">Apply</Button>
        <Button>View Course</Button>
      </CardFooter>
</Card><Card>
  <CardHeader>
    <CardTitle>Courser Name</CardTitle>
    <CardDescription>Courser description goes here ....</CardDescription>
   
  </CardHeader>
  <CardContent
  className='mt--2'
  >
  <div
    className="mb-2 mt--2"
    >
    <Badge variant="outline">Technical</Badge>
    </div>
    About Curese Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat itaque ratione iste laboriosam ullam nostrum perferendis reprehenderit, voluptatum modi praesentium ducimus quibusdam nisi eveniet provident natus fugiat accusantium deleniti omnis. Doloribus qui libero dolores dolore temporibus. Amet, tempora temporibus eius, fugiat esse itaque distinctio sequi quia porro numquam aliquam.
  </CardContent>
  <CardFooter className="flex justify-between">
        <Button variant="outline">Apply</Button>
        <Button>View Course</Button>
      </CardFooter>
</Card><Card>
  <CardHeader>
    <CardTitle>Courser Name</CardTitle>
    <CardDescription>Courser description goes here ....</CardDescription>
   
  </CardHeader>
  <CardContent
  className='mt--2'
  >
  <div
    className="mb-2 mt--2"
    >
    <Badge variant="outline">Technical</Badge>
    </div>
    About Curese Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat itaque ratione iste laboriosam ullam nostrum perferendis reprehenderit, voluptatum modi praesentium ducimus quibusdam nisi eveniet provident natus fugiat accusantium deleniti omnis. Doloribus qui libero dolores dolore temporibus. Amet, tempora temporibus eius, fugiat esse itaque distinctio sequi quia porro numquam aliquam.
  </CardContent>
  <CardFooter className="flex justify-between">
        <Button variant="outline">Apply</Button>
        <Button>View Course</Button>
      </CardFooter>
</Card><Card>
  <CardHeader>
    <CardTitle>Courser Name</CardTitle>
    <CardDescription>Courser description goes here ....</CardDescription>
   
  </CardHeader>
  <CardContent
  className='mt--2'
  >
  <div
    className="mb-2 mt--2"
    >
    <Badge variant="outline">Technical</Badge>
    </div>
    About Curese Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat itaque ratione iste laboriosam ullam nostrum perferendis reprehenderit, voluptatum modi praesentium ducimus quibusdam nisi eveniet provident natus fugiat accusantium deleniti omnis. Doloribus qui libero dolores dolore temporibus. Amet, tempora temporibus eius, fugiat esse itaque distinctio sequi quia porro numquam aliquam.
  </CardContent>
  <CardFooter className="flex justify-between">
        <Button variant="outline">Apply</Button>
        <Button>View Course</Button>
      </CardFooter>
</Card><Card>
  <CardHeader>
    <CardTitle>Courser Name</CardTitle>
    <CardDescription>Courser description goes here ....</CardDescription>
   
  </CardHeader>
  <CardContent
  className='mt--2'
  >
  <div
    className="mb-2 mt--2"
    >
    <Badge variant="outline">Technical</Badge>
    </div>
    About Curese Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat itaque ratione iste laboriosam ullam nostrum perferendis reprehenderit, voluptatum modi praesentium ducimus quibusdam nisi eveniet provident natus fugiat accusantium deleniti omnis. Doloribus qui libero dolores dolore temporibus. Amet, tempora temporibus eius, fugiat esse itaque distinctio sequi quia porro numquam aliquam.
  </CardContent>
  <CardFooter className="flex justify-between">
        <Button variant="outline">Apply</Button>
        <Button>View Course</Button>
      </CardFooter>
</Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCourse;
