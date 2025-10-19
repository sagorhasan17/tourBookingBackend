import type { ITour } from "./tour.interface.js"
import { TourModel } from "./tour.model.js"



const CreateTourService = async(payLoad: ITour) =>{
    const tour = await TourModel.create(payLoad)
    
    return tour
}

export const TourService = {
    CreateTourService
}