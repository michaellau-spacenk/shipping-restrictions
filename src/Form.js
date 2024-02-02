import React from "react";
import { useState, useMemo } from "react";
import { data, regionData } from "./utils/config";
import CountryCheckbox from "./CountryCheckbox";
import CodeBlock from "./CodeBlock";

function Form() {
    const [countries, setCountries] = useState([]);
    const [isCopied, setIsCopied] = useState(false);

    function handleCountryCheckbox(isChecked, displayValue, value) {
        if (isChecked) {
            let updatedCountries = [...countries, {displayValue, value}];
            setCountries(updatedCountries);
        } else {
            let updatedCountries = countries.filter((country) => country.displayValue !== displayValue);
            setCountries(updatedCountries);
        }
    }

    function handleSelectAll() {
        setCountries(data);
    }

    function handleDeselectAll() {
        setCountries([]);
    }

    function handleSelectRegion(e) {
        setCountries([...countries, ...regionData[e.target.dataset.region]]);
    }

	const code = useMemo(() => {
        setIsCopied(false); 
        return {
            "data": countries
        }
    }, [countries]) 

    const checkboxes = () => {
        let checkboxes = data.map((item) => {
            let isCountryChecked = countries.find(e => e.displayValue === item.displayValue);
            return (
                <CountryCheckbox key={item.value} displayValue={item.displayValue} value={item.value} onCheck={handleCountryCheckbox} checked={isCountryChecked} />
            );
        });
        return checkboxes;
    };

    return (
        <div className="container flex flex-col md:flex-row mx-auto gap-12">
			<div className="flex-col flex-1 gap-2 ">
                {/* Select/Deselect All */}
                <div className="flex flex-wrap gap-3">
                    <div className="flex gap-3">
                        <button className="bg-lime-400 text-black p-3 rounded-md" onClick={handleSelectAll}>Select All</button>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-red-300 text-black p-3 rounded-md" onClick={handleDeselectAll}>Deselect All</button>
                    </div>
                </div>

                <hr className="py-3" />

                {/* Regions */}
                <div className="flex flex-wrap gap-3">
                    <div className="flex gap-3">
                        <button className="bg-cyan-300 text-black p-3 rounded-md" data-region="Asia" onClick={handleSelectRegion}>Asia</button>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-cyan-300 text-black p-3 rounded-md" data-region="Africa" onClick={handleSelectRegion}>Africa</button>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-cyan-300 text-black p-3 rounded-md" data-region="Europe" onClick={handleSelectRegion}>Europe</button>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-cyan-300 text-black p-3 rounded-md" data-region="NorthAmerica" onClick={handleSelectRegion}>North America</button>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-cyan-300 text-black p-3 rounded-md" data-region="SouthAmerica" onClick={handleSelectRegion}>South America</button>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-cyan-300 text-black p-3 rounded-md" data-region="Oceania" onClick={handleSelectRegion}>Oceania</button>
                    </div>
                </div>
                
                <hr className="py-3" />

                {/* Country Checkboxes */}
				<div className="flex flex-wrap gap-3">
                    {checkboxes()}
                </div>
			</div>
			<div className="flex flex-col flex-1 gap-y-3 top-0">
                <CodeBlock code={code} isCopied={isCopied} onClick={() => {
                    navigator.clipboard.writeText(JSON.stringify(code));
                    setIsCopied(true);
                }} />
			</div>
		</div>
    );
}

export default Form;