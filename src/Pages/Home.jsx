import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState("all-time");
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  // New states for advanced filtering
  const [salaryQuery, setSalaryQuery] = useState("");
  const [postingDateQuery, setPostingDateQuery] = useState("");
  const [experienceQuery, setExperienceQuery] = useState("");
  const [employmentTypeQuery, setEmploymentTypeQuery] = useState("");

  const itemsPerPage = 6;

  // Fetch jobs data
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

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationQuery(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalaryQuery(event.target.value);
  };

  const handlePostingDateChange = (event) => {
    setPostingDateQuery(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperienceQuery(event.target.value);
  };

  const handleEmploymentTypeChange = (event) => {
    setEmploymentTypeQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Filtering jobs based on search query and other methods
  let filteredJobs = jobs.filter((job) => {
    const matchesQuery = job.jobTitle.toLowerCase().includes(query.toLowerCase());
    const matchesLocation = selectedLocation === "all-time" || job.jobLocation.toLowerCase() === selectedLocation.toLowerCase();
    const matchesLocationQuery = locationQuery ? job.jobLocation.toLowerCase().includes(locationQuery.toLowerCase()) : true;
    const matchesSalary = salaryQuery ? parseInt(job.maxPrice) <= parseInt(salaryQuery) : true;
    const matchesPostingDate = postingDateQuery ? new Date(job.postingDate) >= new Date(postingDateQuery) : true;
    const matchesExperience = experienceQuery ? job.experienceLevel.toLowerCase() === experienceQuery.toLowerCase() : true;
    const matchesEmploymentType = employmentTypeQuery ? job.employmentType.toLowerCase() === employmentTypeQuery.toLowerCase() : true;

    return (
      matchesQuery &&
      matchesLocation &&
      matchesLocationQuery &&
      matchesSalary &&
      matchesPostingDate &&
      matchesExperience &&
      matchesEmploymentType
    );
  });

  // Pagination 
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
      <Banner
        query={query}
        locationQuery={locationQuery}
        handleInputChange={handleInputChange}
        handleLocationChange={handleLocationChange}
      />
      <div className="bg-slate-300 md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar
            handleChange={handleChange}
            handleSalaryChange={handleSalaryChange}
            handlePostingDateChange={handlePostingDateChange}
            handleExperienceChange={handleExperienceChange}
            handleEmploymentTypeChange={handleEmploymentTypeChange}
          />
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
              <button
                onClick={handlePrevPage}
                aria-label="Previous Page"
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                aria-label="Next Page"
                disabled={currentPage === totalPages}
                className="hover:underline"
              >
                Next
              </button>
            </div>
          )}
        </div>
        <div className="bg-white p-4 rounded">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
