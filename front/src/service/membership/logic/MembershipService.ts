
import autobind from 'autobind-decorator';
import { action, observable, runInAction } from 'mobx';
import _ from 'lodash';
import { Membership , MembershipCdo } from '../../../model';
import MembershipApi from '../apiclient/MembershipApi';


@autobind
class MembershipService {
  //
  static instanceName = 'membershipService';
  static instance: MembershipService;

  private readonly membershipApi: MembershipApi;

  @observable
  membership: Membership | null = null;

  constructor(membershipApi: MembershipApi = MembershipApi.instance) {
    //
    this.membershipApi = membershipApi;
  }
  
  
  async registerMembership(membership: Membership): Promise<string> {
    //
    
    const membershipCdo = MembershipCdo.fromModel(membership);
    return this.membershipApi.registerMembership(membershipCdo);
  }

  async modifyMember(membership: Membership): Promise<void> {
    //
    const nameValueList = Membership.asNameValues(membership);

    return this.membershipApi.modifyMembership(membership.id, nameValueList);
  }

  async removeMember(memberId: string): Promise<void> {
    //
    return this.membershipApi.removeMembership(memberId);
  }

  @action
  async findMemberById(membershipId: string): Promise<Membership | null> {
    //
    const membership = await this.membershipApi.findMembershipById(membershipId);

    runInAction(() => this.membership = membership);

    return membership;

  }

  @action
  setMembership(membership : Membership) {
    //
    this.membership = membership;
  }

  @action
  setMembershipProps(key: string, value: any) {
    //
    if (!this.membership) {
      throw new Error('Membership should not be null.');
    }

    this.membership = _.set(this.membership, key, value);
  }

  @action
  clearMember() {
    //
    this.membership = null;
  }
}

MembershipService.instance = new MembershipService();

export default MembershipService;
