import React from "react";
import DetailsHeader from "../../components/detailsHeader/DetailsHeader";
import Tabbar from "../../components/tabbar/Tabbar";
import PageTree from "../../components/pageTree/PageTree";
import Card from "../../components/card/Card";
import SuggestionCard from "../../components/suggestionCard/SuggestionCard";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const cards = [
    {
      bestChoice: true,
      imageLabel: "Builder 1",
      descriptionLabel: "WixPro 72-Inch Responsive Website Builder-",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      mainHighlight:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.8",
      review: "Exceptional",
    },
    {
      bestChoice: true,
      imageLabel: "Builder",
      descriptionLabel: "SiteCraft 68-Inch Ultimate Web Design Studio- ",
      description:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      mainHighlight:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: "9.5",
      review: "Exceptional",
    },
    {
      bestChoice: false,
      imageLabel: "Builder 1",
      descriptionLabel: "WixPro 72-Inch Responsive Website Builder-",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      mainHighlight:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.3",
      review: "Excellent",
    },
    {
      bestChoice: false,
      imageLabel: "CDK",
      descriptionLabel: "CDK Resposive Builder:",
      description:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      mainHighlightPoints: [
        { value: "9.9", key: "Building Responsive" },
        { value: "8.9", key: "Cool" },
        { value: "8.9", key: "Docs" },
      ],
      additionalPoints: ["Documentation", "Easy Use", "Out of box"],
      discount: "26% Off",
      rating: "9.1",
      review: "Very Good",
    },
  ];

  const suggestionCards = [1, 2, 3];
  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#FBFCFD]">
      <div className="max-w-[1024px] w-full my-6 px-4">
        <h1 className="text-[24px] sm:text-[36px]">
          Best Website builders in the US
        </h1>
        <DetailsHeader
          lastUpdate="February 22, 2020"
          info="Advertising Disclosure"
        />
        <Tabbar />
        <PageTree />
        {cards.map((cardData, index) => (
          <Card key={index} cardData={cardData} index={index} />
        ))}
        <h1 className="text-[24px] sm:text-[36px]">
          Related deals you might like for
        </h1>
        <div className="flex flex-wrap justify-evenly items-center gap-3 w-full my-2">
          {suggestionCards.map((cardData, index) => (
            <SuggestionCard key={index} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center md:justify-between items-center w-full">
          <h1 className="text-[24px] sm:text-[36px] max-w-[404px]">
            Sign up and get exclusive special deals
          </h1>
          <div className="flex justify-between items-center gap-2 max-w-[420px] w-full rounded-xl overflow-hidden border-2">
            <input type="text" className="w-full border-none outline-none " />
            <div className="flex justify-center items-center min-w-24 px-4 py-2 cursor-pointer bg-[#1B88F4] hover:bg-blue-600 duration-300 text-white">
              Sign Up
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
