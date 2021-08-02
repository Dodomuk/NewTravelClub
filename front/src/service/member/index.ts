
import MemberService from './logic/MemberService';
import MembersService from './logic/MembersService';

export const store = {
  memberService: MemberService.instance,
  membersService: MembersService.instance,
};

export {
  MemberService,
  MembersService,
};
