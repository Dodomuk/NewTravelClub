
import ClubService from './logic/ClubService';
import ClubsService from './logic/ClubsService';


export const store = {
  clubService: ClubService.instance,
  clubsService: ClubsService.instance,
};

export {
  ClubService,
  ClubsService,
};
