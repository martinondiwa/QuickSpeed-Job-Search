import { useEffect, useState } from "react";
import Banner from "../components/Banner"
import Card from "../components/Card";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const[jobs, setJobs] = useState ([]);

  useEffect (() => {
    fetch ("jobs.json").then(res => res.json()).then(data =>{
      //console.log(data)
      setJobs(data)
    })
  }, [])

    //console.log(jobs)
 
  //handle input change
  const [query, setQuery] = useState ("");
  const handleInputChange = (event) => {
      setQuery(event.target.value)
  }
 //filter jobs by title
 const filterItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)

 //..........Radio Filtering......
 const handleChange= (event) => {
  setSelectedCategory(event.target.value)
 }
 //.....button based filtering....
 const handleClick= (event) => {
  setSelectedCategory(event.target.value)
 }
 //main function
 const filteredData = (jobs, selected, query) => {
  let filteredJobs = jobs;

  //filtering input items
  if(query) {
    filteredJobs=filterItems;
  }

  //category filtering 
  if(selected){
    filteredJobs=filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) =>(
      jobLocation.toLowerCase()===selected.toLowerCase() ||
      parseInt(maxPrice) <= parseInt(selected)||
      salaryType.toLowerCase()===selected.toLowerCase() ||
      employmentType.toLowerCase() === selected.toLowerCase()
    ));
    console.log(filteredJobs)
  }
  return filteredJobs.map((data, i)=> <Card key={i} data={data}/>)
 }

  const result =filteredData(jobs, selectedCategory, query)

  return (
    <div className="text-blue">
      <Banner query={query} handleInputChange={handleInputChange}/>
    </div>
  )
}

export default Home
