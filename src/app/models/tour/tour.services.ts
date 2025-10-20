import type { ITour } from './tour.interface.js';
import { TourModel } from './tour.model.js';

const CreateTourService = async (payLoad: ITour) => {
  const tour = await TourModel.create(payLoad);

  return tour;
};
const GetTourService = async () => {
  const tour = await TourModel.find()
    .populate('destination')
    .populate('activities')
  return tour;
};

export const TourService = {
  CreateTourService,
  GetTourService,
};
