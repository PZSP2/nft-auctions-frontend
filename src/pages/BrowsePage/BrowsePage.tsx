import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SchoolImage from "../../assets/images/schoolImage.jpg";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchIcon.svg";

const SCHOOLS_MOCK = [
  { id: 1, name: "Warsaw University of Technology" },
  { id: 2, name: "Warsaw University of Technology" },
  { id: 3, name: "Warsaw University of Technology" },
  { id: 4, name: "Warsaw University of Technology" },
  { id: 5, name: "Warsaw University of Technology" },
  { id: 6, name: "Warsaw University of Technology" },
];

const BrowsePage = () => {
  const [schools, setSchools] = useState(SCHOOLS_MOCK);
  const navigate = useNavigate();

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
        {schools.map(({ id, name }) => (
          <div
            className="max-w-xs cursor-pointer"
            key={id}
            onClick={() => handleSchoolClick(id)}
          >
            <img src={SchoolImage} alt="school" className="rounded-t-xl" />
            <div className="bg-primary p-5 rounded-b-xl text-center hover:bg-primaryHoverFocus">
              <span className="font-medium text-xl">{name}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default BrowsePage;
