import {selector} from 'testcafe';

const loginInput = selector('#user_login');
const passwordInput = selector('#user_password');
const signInButton  = selector("[name='submit']");
const cashAccountTitle = selector()

fixture `login tests`
 .page `http://zero.webappsecurity.com/login.html`
 test(`A user can login successfully`, async t =>{
    await t
    .typetext(loginInput,"username",{paste:true})
    .typetext(passwordInput,"password",{paste:true})
    .click(signInButton)
    .expect(cashAccountTitle.exists).ok();
 })