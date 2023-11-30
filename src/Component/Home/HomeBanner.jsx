import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "@mui/material";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import { useForm } from "react-hook-form";
import useAddedContest from "../../Hooks/useAddedContest";
import { useState } from "react";
import SearchCard from "./SearchCard";

const HomeBanner = () => {
  const { addedContest, isLoading } = useAddedContest();
  console.log(addedContest);
  const [search, setSearch] = useState("");
  console.log(search);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const searchData = data.searchText;
    const searchDataText = searchData;
    console.log(searchDataText);
    setSearch(searchDataText);
  };

  const addedFilterContest = addedContest.filter(
    (item) => item.status === "approved"
  );
  const FilterData = addedFilterContest.filter(
    (item) => item.tags.toLowerCase() === search.toLowerCase()
  );
  console.log(FilterData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  if (isLoading) {
    return (
      <div>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="container px-6 py-16  mx-auto">
        <div className="items-center lg:flex ">
          <div className="w-full lg:w-1/2 ">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Unleash Creativity Where
                <br /> Ideas Come to{" "}
                <span className="text-red-500 ">Life!</span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Welcome to Contest Hub, the ultimate destination for creators
                and innovators! Transform your imagination into reality by
                participating in exciting contests, connecting with fellow
                creatives, and showcasing your talents to the world.{" "}
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    id="email"
                    type="text"
                    name="searchText"
                    {...register("searchText")}
                    className="px-4 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
                    placeholder="Search contest tags. "
                  />

                  <Button onClick={openModal}
                    type="submit"
                    variant="contained"
                    sx={{ margin: 2, padding: 1, borderRadius: 3 }}
                    color="error"
                    endIcon={<CenterFocusWeakIcon />}
                  >
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6  lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://i.ibb.co/FbLJSS0/Catalogue-pana-copy.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex  items-start justify-start ">
            <div className="max-w-4xl bg-red-100 p-8 shadow-lg rounded-md">
              <div className="flex justify-end">
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  X
                </button>
              </div>
              <div className="mt-4">
              {FilterData?.map((items) => (
    <SearchCard key={items} items={items}></SearchCard>
  ))}
              </div>
            </div>
          </div>
        </div>
      )}



    </div>
  );
};

export default HomeBanner;
