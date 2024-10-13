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

    useEffect(() => {
        fetch("jobs.json")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
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

        return filteredJobs.map((data, i) => <Card key={i} data={data} />);
    };

    const result = filteredData();

    return (
        <div className="text-blue">
            <Banner query={query} handleInputChange={handleInputChange} />
            <div className="bg-slate-300 md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
                <div className="bg-white p-4 rounded"><Sidebar handleChange={handleChange} /></div>
                <div className="col-span-2 bg-slate-200 p-4 rounded-md">
                    <Jobs result={result} />
                </div>
                <div className="bg-white p-4 rounded">Right</div>
            </div>
        </div>
    );
};

export default Home;
