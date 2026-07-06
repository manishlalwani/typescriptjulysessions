

abstract class page {

    logo: boolean = true;

    abstract title(): void;
    abstract url(): void;

    loading(): void {
        console.log('Page Loaded in 20 Secs');
    }

    header(): void {
        console.log('Page Header---');
    }

}

class LoginPage extends page {
    override title(): void {
        console.log('Login Page Title');
    }
    override url(): void {
        console.log('https://www.google.com');
    }

    override loading(): void {
        console.log('Login Page Loaded in 10 Secs');
    }

    doLogin(): void {
        console.log('Login Via User Id and Password');
    }

}

let lp: LoginPage = new LoginPage();
lp.header();
lp.title();
lp.loading();
lp.url();
lp.doLogin();
console.log(lp.logo);

//let p1 : LoginPage = new page()
//Cannot create an instance of an abstract class.