import { CarTypesProps, SearchProps } from "@/types";
import axios from "axios";
export const getCars=async(params:SearchProps)=>{
    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params:params,
        headers: {
          'X-RapidAPI-Key': '6730b5ad79msh8502975f7cec1dbp1a27a7jsnd05b04f9018e',
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
      };
      
    try {
        const {data} = await axios.request(options);
        return data
    } catch (error) {
        console.error(error);
    }
}



export const generateCarImages=(car:CarTypesProps,angle?:string)=>{
  const url = new URL("https://cdn.imagin.studio/getimage")

  const {make,year,model} = car
  url.searchParams.append('customer','hrjavascript-mastery')
  url.searchParams.append('make',make)
  url.searchParams.append('modelFamily',model.split(' ')[0])
  url.searchParams.append('zoomType','fullscreen')
  url.searchParams.append('modelYear',`${year}`)
  url.searchParams.append('angle',`${angle}`)

  return `${url}`
}