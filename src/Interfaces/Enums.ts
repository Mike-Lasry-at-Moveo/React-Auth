enum InputTypes {
    TXT = 'text',
    PW = 'password',
    SUBMIT = 'submit',
}

enum Errors {
    ERR = 'Somthing went wrong!',
    FILL_CREDS = 'All fields must be supplied!',
    PW_MATCH = 'Passwords are not match!',
    AXIOS = 'Error trying to activate axios: ',
    DEL_FAIL = 'Deleting user failed'
}
enum Role {
    ADMIN = 'admin',
    AUTHOR = 'author',
    EDITOR = 'editor',
    CLIENT = 'client',
}
enum Str { 
    DOT = '.',
    EMPTY = '',
    SPACE = ' ',
    EQUALS = '=',
    EXP = 'exp',
    JWT = 'jwt',
    SEMI_COLON = ';',
    CHOOSE_VAL = 'Choose a new value',
    WELCOME_B = 'Welcome back!',
    INVALID = "Please fill all fields properly!",
    PASSED_DATE = 'Thu, 01 Jan 1970 00:00:00 GMT',
}

enum Path {
    BASE_URL = "http://127.0.0.1:3500/api/users",
    UPDT_USR = '/user-details',
    ID_PARAM = ':id',
    
    HOME_SFX = '',
    PROFILE_SFX = 'profile',
    LOGIN_SFX = 'login',
    ADMIN_SFX = 'admin',
    SIGNUP_SFX = 'signup',
}

enum UpdateOptions {
    UN = 'username',
    FN = 'firstName',
    LN = 'lastName',
    EMAIL = 'email',
    ADDR = 'address',
    ROLE = 'role',
}

enum ClassName {
    APP = 'App',

    LOGIN_PAGE = 'loginPage',
    SIGNUP_PAGE = "signupPage",
    HOME_PAGE = 'homePage',
    
    NAVBAR = 'navbar',

    UN_INP = 'usernameInput',
    FN_INP = 'firstNameInput',
    LN_INP = 'lastNameInput',
    EMAIL_INP = 'emailInput',
    ADDR_INP = 'addressInput',
    PW_INP = 'passwordInput',
    CNFRM_INP = 'confirmPasswordInput',

    LOGIN_CNTRLS = 'loginControls',
    LOGIN_CNTRL = 'loginControl',
    
    UPDT_FORM = 'updateForm',

    UPDT_CNTRLS = 'loginControls',
    UPDT_CNTRL = 'loginControl',
    
    LOGIN_ACTNS = 'loginActions',
    LOGIN_ACTN = 'loginAction',

    UPDT_ACTNS = 'updateActions',
    UPDT_ACTN = 'updateAction',
    
    SIGNUP_CNTRLS = 'signupControls',
    SIGNUP_CNTRL = 'signupControl',
    
    SIGNUP_ACTNS = 'signupActions',
    SIGNUP_ACTN = 'signupnAction',

    USR_BDG = 'userBadge',
    USR_CARD = 'userCard',
    USR_LIST = 'userList',
    USR_DETS = 'userDetails',
    USR_INFO = 'userInformation',

    UPDT_USR = 'updateUserBtn',
    DEL_USR = 'deleteUserBtn',

    HOME_BTB = 'homeBtn',
    LOGIN_BTN = 'loginBtn',
    SIGNUP_BTN = 'signupBtn',
    UPDT_BTN = 'updateBtn',

    HOME_ICON_SRC = 'https://img.icons8.com/color/48/000000/home.png',
}

export {
    InputTypes, 
    ClassName,
    Errors,
    UpdateOptions,
    Role,
    Path,
    Str,
 };