import React from "react";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag"

function CountryCheckbox({ displayValue, value, onCheck, checked = false }) {
    function handleChange(e) {
        let isChecked = e.target.checked;
        onCheck(isChecked, displayValue, value);
    }

    return (
        <div className={"flex items-center px-4 border rounded dark:border-gray-700 cursor-pointer" + (checked ? ' bg-yellow-200' : ' border-blue-gray-500')}>
            <input id={`checkbox-${value}`} checked={checked} onChange={handleChange} type="checkbox" name="country-checkbox" className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
            <label htmlFor={`checkbox-${value}`} className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">{displayValue} ({value})</label>
            <ReactCountryFlag className="emojiFlag" countryCode={value} svg />
        </div>
    );
}

export default CountryCheckbox;