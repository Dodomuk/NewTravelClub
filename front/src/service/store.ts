
import { store as clubStore } from './club';
import { store as memberStore } from './member';
import { store as membershipStore } from './membership'; 

export default {
  ...clubStore,
  ...memberStore,
  ...membershipStore
};
