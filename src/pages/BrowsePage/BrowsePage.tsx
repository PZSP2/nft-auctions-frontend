import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SchoolImage from "../../assets/images/schoolImage.jpg";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchIcon.svg";
import { API_KEYS } from "../../api/API_KEYS";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const BrowsePage = () => {
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();
  const { data: schoolsResponse, isLoading } = useQuery(
    [API_KEYS.GET_NFTS],
    () => axios.get("/api/school").then((response) => response),
    { onSuccess: (response) => setSchools(response.data) }
  );

  const handleSchoolClick = (schoolId: number) =>
    navigate(`/browse/${schoolId}`);

  return (
    <main className="py-32 px-20 flex items-start flex-col justify-center">
      <div className="flex justify-around w-full">
        <span>
          <h3 className="text-3xl font-bold">Discover available schools</h3>
          <h4 className="text-xl mt-3">Explore new trending universities</h4>
        </span>
        <span className="relative">
          <input
            type="text"
            placeholder="Search school..."
            className="input input-bordered w-full max-w-xs bg-transparent border-primary pr-12"
          />
          <SearchIcon className="absolute top-3 right-3 cursor-pointer" />
        </span>
      </div>
      <section className="flex gap-10 mt-24 flex-wrap justify-center w-full">
        {isLoading ? (
          <progress className="progress w-56"></progress>
        ) : (
          schools.map(({ schoolId, name, address }) => (
            <div
              className="max-w-xs cursor-pointer"
              key={schoolId}
              onClick={() => handleSchoolClick(schoolId)}
            >
              <img src={SchoolImage} alt="school" className="rounded-t-xl" />
              <div className="bg-primary p-5 rounded-b-xl text-center hover:bg-primaryHoverFocus flex flex-col gap-2 min-h-xl">
                <span className="font-medium text-xl">{name}</span>
                <span className="">{address}</span>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default BrowsePage;
