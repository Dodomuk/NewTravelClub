
import MembershipService from './logic/MembershipService';
import MembershipsService from './logic/MembershipsService';

export const store = {
  membershipService: MembershipService.instance,
  membershipsService: MembershipsService.instance,
};

export {
  MembershipService,
  MembershipsService,
};
