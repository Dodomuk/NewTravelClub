
import autobind from 'autobind-decorator';
import { action , observable, runInAction } from 'mobx';

import { CommunityMember } from '../../../model';
import MemberApi from '../apiclient/MemberApi';

@autobind
class MembersService {
  //
  static instanceName = 'membersService';
  static instance: MembersService;

  private readonly communityMemberApi: MemberApi;

  @observable
  members: CommunityMember[] = [];

  constructor(communityMemberApi: MemberApi = MemberApi.instance) {
    //
    this.communityMemberApi = communityMemberApi;
  }


  @action
  async findAllMembers(): Promise<CommunityMember[]> {
    //
    const members = await this.communityMemberApi.findAllMembers();
    runInAction(() => this.members = members);
    return members;
  }

  @action
  async findMembersByName(name: string): Promise<CommunityMember[]> {
    //
    const members = await this.communityMemberApi.findMembersByName(name);

    runInAction(() => this.members = members);
    return members;
  }

  @action
  clearMembers() {
    //
    this.members = [];
  }
  
}

MembersService.instance = new MembersService();

export default MembersService;
