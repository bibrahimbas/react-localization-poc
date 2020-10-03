import React from 'react'
import DropDown from 'react-bootstrap/Dropdown'
import DropDownItem from 'react-bootstrap/DropdownItem'
import './setting.css'

function LanguageSetting() {
    return (
        <div>
        <section className="main-section">Please select your language preference</section>
        <DropDown className='dropdown'>
            <DropDownItem>English</DropDownItem>
            <DropDownItem>Turkish</DropDownItem>
            <DropDownItem>French</DropDownItem>
        </DropDown>
        </div>
    )
}

export default LanguageSetting;