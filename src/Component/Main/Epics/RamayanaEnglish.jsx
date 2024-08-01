import React, { useEffect, useState } from "react";
import Data from "./JsonDataa/RamayanEnglish.json";
import { useLocation, useNavigate } from "react-router-dom";

function RamayanaEnglish() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const initialKand = searchParams.get("selectedKand") || "BalaKanda";
  const initialSarg = searchParams.get("selectedSarg")
    ? parseInt(searchParams.get("selectedSarg"))
    : 1;

  const [selectedKand, setSelectedKand] = useState(initialKand);
  const [selectedSarg, setSelectedSarg] = useState(initialSarg);

  useEffect(() => {
    const kandFromUrl = searchParams.get("selectedKand");
    const sargFromUrl = searchParams.get("selectedSarg");

    if (kandFromUrl && kandFromUrl !== selectedKand) {
      setSelectedKand(kandFromUrl);
    }

    if (sargFromUrl && parseInt(sargFromUrl) !== selectedSarg) {
      setSelectedSarg(parseInt(sargFromUrl));
    }
  }, [location.search]);

  useEffect(() => {
    searchParams.set("selectedKand", selectedKand);
    searchParams.set("selectedSarg", selectedSarg);
    navigate(
      {
        pathname: location.pathname,
        search: searchParams.toString(),
      },
      { replace: true }
    );
  }, [selectedKand, selectedSarg]);

  const kands = [...new Set(Data.map((item) => item.Kand))];
  const sargs = [
    ...new Set(Data.filter((item) => item.Kand === selectedKand).map((item) => item.Sarg)),
  ];

  useEffect(() => {
    if (!searchParams.get("selectedKand")) {
      searchParams.set("selectedKand", "BalaKanda");
      navigate(
        {
          pathname: location.pathname,
          search: searchParams.toString(),
        },
        { replace: true }
      );
    }

    if (!searchParams.get("selectedSarg")) {
      const firstSarg = Data.find((item) => item.Kand === "BalaKanda").Sarg;
      searchParams.set("selectedSarg", firstSarg);
      navigate(
        {
          pathname: location.pathname,
          search: searchParams.toString(),
        },
        { replace: true }
      );
    }
  }, [navigate, location.pathname]);

  const chapterData = Data.filter(
    (item) => item.Kand === selectedKand && item.Sarg === String(selectedSarg)
  );

  const handleKandSelect = (kand) => {
    setSelectedKand(kand);
    const firstSarg = Data.find((item) => item.Kand === kand).Sarg;
    setSelectedSarg(parseInt(firstSarg));
    searchParams.set("selectedKand", kand);
    searchParams.set("selectedSarg", firstSarg);
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
    window.scrollTo(0, 0);
  };

  const handleSargSelect = (sarg) => {
    setSelectedSarg(parseInt(sarg));
    searchParams.set("selectedSarg", sarg);
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    if (selectedSarg > 1) {
      handleSargSelect(selectedSarg - 1);
    }
  };

  const handleNext = () => {
    const nextSarg = selectedSarg + 1;
    if (sargs.includes(nextSarg.toString())) {
      handleSargSelect(nextSarg);
    }
  };

  const formatDescription = (text) => {
    let formattedDescription = text?.replace(/\n/g, "<br /><br />");

    formattedDescription = formattedDescription?.replace(
      /'([^']*)'/g,
      '<b style="color: #c2410c; font-weight: bold; font-size:23px;">$1</b>'
    );

    formattedDescription = formattedDescription?.replace(
      /`([^`]*)`/g,
      '<i style="color: #6b7280; font-size:15px;">$1</i> <br /> <div style=" display:flex;"><div style=" font-size:25px; color:#c2410c; border-radius:3px;">Translation:</div></div>'
    );

    formattedDescription = formattedDescription?.replace(
      /\*([^*]+)\*/g,
      '<span style="color: red;"> <p style=" font-size:25px; color:red; border-radius:3px;">Comment -</p>$1</span>'
    );

    return formattedDescription;
  };

  return (
    <div className="bg-orange-300 min-h-screen flex flex-col items-center">
      <div className="bg-orange-100 w-full p-2.5 lg:px-5 flex  lg:flex-row items-center gap-3 lg:justify-start">
        <select
          value={selectedKand}
          onChange={(e) => handleKandSelect(e.target.value)}
          className="p-2 rounded-md bg-orange-400 w-full josefin-sans-bold  lg:w-[250px] px-4 text-lg shadow border border-orange-400"
        >
          {kands.map((kand, index) => (
            <option className="font-bold josefin-sans-bold" key={index} value={kand}>
              {kand}
            </option>
          ))}
        </select>
        <select
          value={selectedSarg}
          onChange={(e) => handleSargSelect(e.target.value)}
          className="p-2 rounded-md bg-orange-400 w-full josefin-sans-bold lg:w-[200px] text-lg border shadow border-orange-400"
        >
          {sargs.map((sarg, index) => (
            <option key={index} value={sarg}>
              Sarg - {sarg}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1 flex flex-col items-center text-start p-4 lg:px-40 pb-20">
        <div className="text-center">
          {chapterData.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-center">
                <div className="text-2xl bg-orange-400 border-orange-400 shadow-sm h-8 px-4 pt-1 rounded flex border justify-center items-center gap-1 annapurna-sil-bold font-semibold mb-2">
                  {item.Kand} - <span className=" "> Sarg - ({item.Sarg})</span>
                </div>
              </div>
              <div
                className="text-lg whitespace-pre-wrap mt-5 annapurna-sil-bold text-start"
                dangerouslySetInnerHTML={{
                  __html: formatDescription(item.Text),
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="bg-orange-100 w-full p-3 lg:px-20 flex justify-between fixed bottom-0 left-0">
          <button
            onClick={handlePrevious}
            className="bg-gray-700 w-40 p-2 font-bold text-white px-4 rounded"
            disabled={selectedSarg <= 1}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-[#8b4513] w-40 font-bold text-white p-2 rounded"
            disabled={!sargs.includes((selectedSarg + 1).toString())}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RamayanaEnglish;
