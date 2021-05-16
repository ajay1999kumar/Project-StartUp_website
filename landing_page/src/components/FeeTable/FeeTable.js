import React from 'react'
import  './FeeTable.css'
function FeeTable() {
    return (
        <div className="container-table">
            <h1>Fee Structure: </h1>
            <table className="fee-table">
            <tr>
                        <th> Course</th>
                        <th> Fee</th>
                        <th> Teaching Hours</th>
                        <th> Course Validity</th>
                        <th> Course Language</th>
                        <th> Commencement Date</th>
                        <th> Batch Timings</th>
                        
                    </tr>
                
                <tbody>
                    
                    <tr>
                        <td>ESE + Gate 2022 Live Online Courses</td>
                        <td>Rs. 62501 + GST</td>
                        <td>1200 Hours</td>
                        <td >Till ESE 2022 Pre and Gate 2022 Examination</td>
                        
                       <td className="sub-col">
                            <tr >
                                <td>Hinglish</td>
                            </tr>
                            <tr>
                                <td>Hinglish</td>                      
                            </tr>
                            <tr>
                                <td>English</td> 
                            </tr>   
                        </td>             
                            

                        
                        <td className="sub-col">
                            <tr>
                               <td> 5th May, 2021</td>
                            </tr>
                            <tr>
                            <td> 5th May, 2021</td>
                            </tr>
                            <tr>
                            <td> 5th May, 2021</td>            
                            </tr>
                          </td>  
                        
                        <td className="sub-col">
                            
                            <tr>
                                <td><span>1st Batch</span> <br/>8:30 AM to 1:30 PM </td>
                            </tr>
                            <tr>
                                <td><span>2nd Batch</span><br/> 2:30 PM to 8:30 PM</td>                      
                            </tr>
                            <tr>
                                <td><span>3rd Batch</span><br/> 2:30 PM to 8:30 PM</td>                 
                            </tr>
                            
                        </td>
                    </tr>   
                    
                    </tbody>
            </table>
            
        </div>
    )
}

export default FeeTable