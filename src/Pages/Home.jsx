import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setJobs(data);
      });
  }, []);

  //console.log(jobs)

  //handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  //filter jobs by title
  const filterItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //..........Radio Filtering......
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  //.....button based filtering....
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  //main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filtering input items
    if (query) {
      filteredJobs = filterItems;
    }

    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className="text-blue">
      <Banner query={query} handleInputChange={handleInputChange} />
             {/**Main content */}
      <div className="bg-slate-300 md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/**left Side */}
        <div className="bg-white p-4 rounded"><Sidebar handleChange={handleChange} handleClick={handleClick}/></div>
        <div className="col-span-2 bg-slate-200 p-4 rounded-md">
        {/**job cards */}
          <Jobs result={result} />
        </div>
        {/**Right side */}
        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Home;
