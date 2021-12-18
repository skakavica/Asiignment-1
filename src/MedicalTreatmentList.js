import React from "react";
import MedicalTreatment from "./MedicalTreatment";


const propsAsJson = '[{"id" : "R432", "courseTreatId" : "Prescription", "type":"something", "category":"LHC", "name":"Sebastian", "date":"03/04/2021"}, ' 
+ 
'{"id" : "R5643", "courseTreatId" : "Prescription", "type":"something", "category":"LHC", "name":"Sebastian", "date":"03/04/2021"}, '
+
'{"id" : "R6452", "courseTreatId" : "Prescription", "type":"something", "category":"LHC", "name":"Sebastian", "date":"03/04/2021"}, '
+
'{"id" : "R7532", "courseTreatId" : "Prescription", "type":"something", "category":"LHC", "name":"Sebastian", "date":"03/04/2021" } ,'
+
'{"id" : "R0909", "courseTreatId" : "Prescription", "type":"something", "category":"LHC", "name":"Sebastian", "date":"03/04/2021" }]'



const mtList = JSON.parse(propsAsJson)
export default function MedicalTreatmentList(){
  
  const listMTL = mtList.map((mtList) => 
  <li>
    <MedicalTreatment treatId={mtList.id} courseTreatId={mtList.courseTreatId} type={mtList.type} category={mtList.category}
   name={mtList.name} date={mtList.date} />
    </li>
 
  )
  return (
    <ul>
      {listMTL}

      </ul>
  )


}