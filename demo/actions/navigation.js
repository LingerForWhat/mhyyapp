'use strict'
import type {Action} from './types';

type Tab = 'home' | 'class' | 'huiben' | 'my'

module.export = {
  switchTab: {tab: Tab}: Action => ({
      type: 'SWITCH_TAB',
      tab,
  }),

};
