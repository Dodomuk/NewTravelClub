
import { store as clubStore } from './club';
import { store as memberStore } from './member';

export default {
  ...clubStore,
  ...memberStore
};
