import { Selector} from "testcafe";
import { Role } from 'testcafe';

const loginInput =Selector("#username");
const signInButton1 =Selector(".Ut3prtt_wDsi7NM_83Jc > .yfCvx60qsR50VNBG15jF");

const password =Selector("#password");
const signInButton2 =Selector(".Ut3prtt_wDsi7NM_83Jc");

const bookingAccountTitle1 =Selector(".bui_font_display_one");
const bookingAccountTitle2 =Selector(".fa27fe07b6");

/*
const userOne = Role('https://account.booking.com/sign-in', async t => {
    await t
        .typeText(loginInput ,"lakshikarasanjali1114@gmail.com",{paste:true})
        .click(signInButton1)
        .expect(bookingAccountTitle1.exists).ok();
});

const userTwo = Role('https://account.booking.com/sign-in/password', async t => {
    await t
    .typeText(password ,"MRlr95&*avacado",{paste:true})
    .click(signInButton2)
    .expect(bookingAccountTitle2.exists).ok();
});*/



    fixture `Login tests1`
        .page `https://account.booking.com/sign-in`

        test('Username is correct', async t=> {
            await t
            .typeText(loginInput ,"lakshikarasanjali1114@gmail.com",{paste:true})
            .click(signInButton1)
            .expect(bookingAccountTitle1.exists).ok();
            
        })
        
        .page `https://account.booking.com/sign-in/password`
        test('Password is correct, User login success', async k=> {
            await k
            .typeText(password ,"MRlr95&*avacado",{paste:true})
            .click(signInButton2)
            .expect(bookingAccountTitle2.exists).ok();
        })
        