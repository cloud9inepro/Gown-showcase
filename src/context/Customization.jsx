// import { createContext, useContext, useState } from "react";

// const CustomizationContext = createContext();

// export const vehicleColors =[
//     {
//         color: "#ff0000",
//         name: "red"
//     },
//     {
//         color: "#1a5e1a",
//         name: "green"
//     },
//     {
//         color: "#0015ff",
//         name: "blue"
//     },
//     {
//         color: "#ffa500",
//         name: "yellow"
//     },
//     {
//         color: "#000000",
//         name: "black"
//     },
//     {
//         color: "#ffffff",
//         name: "white"
//     },
// ];

// export const rimColors =[
//     {
//         color: "#ffffff",
//         name: "white"
//     },
//     // {
//     //     color: "#ff0000",
//     //     name: "red"
//     // },
//     // {
//     //     color: "#1a5e1a",
//     //     name: "green"
//     // },
//     // {
//     //     color: "#0015ff",
//     //     name: "blue"
//     // },
//     // {
//     //     color: "#ffa500",
//     //     name: "yellow"
//     // },
//     {
//         color: "#000000",
//         name: "black"
//     },
    
// ];


// export const CustomizationProvider =(props) =>{
//     const [material, setMaterial] = useState('color')
//     const [vehicleColor, setVehicleColor] = useState(vehicleColors[0])
//     const [rimColor, setRimColor] = useState(rimColors[0])
//     return <CustomizationContext.Provider value={{
//         material,
//         setMaterial,
//         vehicleColor,
//         setVehicleColor,
//         rimColor, 
//         setRimColor,
//     }}>
//         {props.children}
//     </CustomizationContext.Provider>
// }

// export const useCustomization = () =>{
//     const context = useContext(CustomizationContext);
//     return context
// }