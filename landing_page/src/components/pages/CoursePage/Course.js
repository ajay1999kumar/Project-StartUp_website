import React from 'react'
import { SpecificationTable } from '../../CourseSpecificationTable/SpecificationTable'
import FeeTable from '../../FeeTable/FeeTable'
import GatePrepSection from '../../GatePrepSection'
import Services from '../../Services';
import {service2} from '../HomePage/Data'

 function Course() {
    return (
        <div>
            <GatePrepSection/>
            <Services {...service2}/>
            <SpecificationTable/>
           <FeeTable/>
        </div>
    )
}

export default Course