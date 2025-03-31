/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_pagePage = typeof import('./pages/home_page.js');
type login_pagePage = typeof import('./pages/login_page.js');
type signup_pagePage = typeof import('./pages/signup_page.js');
type confirmation_pagePage = typeof import('./pages/confirmation_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_pagePage: home_pagePage, login_pagePage: login_pagePage, signup_pagePage: signup_pagePage, confirmation_pagePage: confirmation_pagePage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
