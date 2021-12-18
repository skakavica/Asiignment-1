import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";
import MedicalTreatmentList from "./MedicalTreatmentList";



export default function App() {

  return (
   <div  > 

     <MedicalTreatment treatId="001" courseTreatId ="Medicen" type= "Prescription"  category ="some" name="Sebastian" date={Date()}/>
     <MedicalTreatmentList />

   </div>
  );
} 








