import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState (1);
    const itemsParPage = 6;

    useEffect(() => {
        setIsLoading (true);
        fetch("jobs.json")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                setIsLoading(false);
            });
    }, []);

    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filterItems = jobs.filter(
        (job) => job.jobTitle.toLowerCase().includes(query.toLowerCase())
    );

    const handleChange = (event) => {
        setSelectedLocation(event.target.value);
    };
     // calculate the index range
      const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsParPage;
        const endIndex = startIndex + itemsParPage;
        return {startIndex, endIndex};
      }
      //function for the next page
      const nextPage = () => {
       if (currentPage < Math.ceil(filterItems.length / itemsParPage)){
        setCurrentPage(currentPage + 1);
       }
      }
      //function for previous page
      const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
      }
      // main function 
    const filteredData = () => {
        let filteredJobs = jobs;

        if (query) {
            filteredJobs = filterItems;
        }

        if (selectedLocation) {
            filteredJobs = filteredJobs.filter(
                (job) => job.jobLocation.toLowerCase() === selectedLocation.toLowerCase()
            );
        }
         // slice the data based on current page
         const {startIndex, endIndex} = calculatePageRange();
         filteredJobs = filteredJobs.slice(startIndex, endIndex)
        return filteredJobs.map((data, i) => <Card key={i} data={data} />);
    };

    const result = filteredData();

    return (
        <div className="text-blue">
            <Banner query={query} handleInputChange={handleInputChange} />
            <div className="bg-slate-300 md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
                <div className="bg-white p-4 rounded"><Sidebar handleChange={handleChange} /></div>
                <div className="col-span-2 bg-slate-200 p-4 rounded-md">
                  {
                    isLoading ? (<p className="font-medium">Loading.....</p>) :  result.length > 0 ?  (<Jobs result={result} />) : <>
                     <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
                     <p>No data found</p>
                    </>
                  }
                    {/* pagination element */}
                    {
                    result.length > 0 ? (
                    <div className=" flex justify-center mt-4 space-x-8">
                     <button onClick={prevPage}>Previous</button>
                     <span> Page {currentPage} of {Math.ceil(filteredItems.length/itemsParPage)}</span>
                     <button>Next</button>
                    </div>
                    )
                    }
                </div>
                <div className="bg-white p-4 rounded">Right</div>
            </div>
        </div>
    );
};

export default Home;
