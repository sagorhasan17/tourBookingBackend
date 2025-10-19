import type { IDestination } from "./destination.interface.js"
import { DesModel } from "./destination.model.js"



const CreateDesService = async(payLoad: IDestination) =>{
    const desti = await DesModel.create(payLoad)
    
    return desti
}

export const DesService = {
    CreateDesService
}