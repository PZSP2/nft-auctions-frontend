import { useState } from "react";
import SchoolImage from "../../assets/images/schoolImage.jpg";

const SCHOOLS_MOCK = [
  { id: 1, name: "Warsaw University of Technology" },
  { id: 2, name: "Warsaw University of Technology" },
  { id: 3, name: "Warsaw University of Technology" },
  { id: 4, name: "Warsaw University of Technology" },
  { id: 5, name: "Warsaw University of Technology" },
  { id: 6, name: "Warsaw University of Technology" },
  { id: 7, name: "Warsaw University of Technology" },
];

const BrowsePage = () => {
  const [schools, setSchools] = useState(SCHOOLS_MOCK);

  return (
    <main className="py-32 px-20 flex items-start flex-col justify-center">
      <header>
        <h3 className="text-3xl font-bold">Discover available schools</h3>
        <h4 className="text-xl mt-3">Explore new trending universities</h4>
      </header>
      <section className="flex gap-10 mt-24 flex-wrap justify-center">
        {schools.map(({ id, name }) => (
          <div className="max-w-xs cursor-pointer" key={id}>
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
