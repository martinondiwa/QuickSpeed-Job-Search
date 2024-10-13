import { useState } from "react";
import Banner from "../components/Banner"

const Home = () => {

  const [query, setQuery] = useState ("");
  const handleInputChange = (event) => {
      setQuery(event.target.value)

  }
  return (
    <div className="text-blue">
      <Banner/>
    </div>
  )
}

export default Home
