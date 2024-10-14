import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("jobs.json");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const filteredJobs = jobs
    .filter((job) => job.jobTitle.toLowerCase().includes(query.toLowerCase()))
    .filter((job) =>
      selectedLocation
        ? job.jobLocation.toLowerCase() === selectedLocation.toLowerCase()
        : true
    );

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="text-blue">
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-slate-300 md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} />
        </div>
        <div className="col-span-2 bg-slate-200 p-4 rounded-md">
          {isLoading ? (
            <p className="font-medium">Loading.....</p>
          ) : currentJobs.length > 0 ? (
            <Jobs
              result={currentJobs.map((data) => (
                <Card key={data.id} data={data} />
              ))}
            />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">
                {filteredJobs.length} Jobs
              </h3>
              <p>No data found</p>
            </>
          )}
          {currentJobs.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={handlePrevPage} aria-label="Previous Page">
                Previous
              </button>
              <span>
                {" "}
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                aria-label="Next Page"
                disabled={currentPage === totalPages} className="hover:underline"
                
              >
                Next
              </button>
            </div>
          )}
        </div>
        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Home;
