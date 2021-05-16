import React from 'react'
import { SpecificationTable } from '../../CourseSpecificationTable/SpecificationTable'
import FeeTable from '../../FeeTable/FeeTable'

 function Course() {
    return (
        <div>
            <SpecificationTable/>
           <FeeTable/>
        </div>
    )
}

export default Course