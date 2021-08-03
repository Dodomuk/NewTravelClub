
import autobind from 'autobind-decorator';
import { action , observable, runInAction } from 'mobx';
import { Membership } from '../../../model';
import MembershipApi from '../apiclient/MembershipApi';

@autobind
class MembershipsService {
  //
  static instanceName = 'membershipsService';
  static instance: MembershipsService;

  private readonly membershipApi: MembershipApi;

  @observable
  members: Membership[] = [];

  constructor(membershipApi: MembershipApi = MembershipApi.instance) {
    //
    this.membershipApi = membershipApi;
  }

  @action
  async findMembershipByClubId(clubId : string): Promise<Membership[]> {
    //
    const members = await this.membershipApi.findAllMembershipsByClubId(clubId);
    runInAction(() => this.members = members);
    return members;
  }

  @action
  async findMembershipByMemberId(memberId: string): Promise<Membership[]> {
    //
    const members = await this.membershipApi.findAllMembershipsOfMember(memberId);

    runInAction(() => this.members = members);
    return members;
  }

  @action
  clearMembers() {
    //
    this.members = [];
  }
  
}

MembershipsService.instance = new MembershipsService();

export default MembershipsService;
