enum InputTypes {
    TXT = 'text',
    PW = 'password',
    SUBMIT = 'submit',
}

enum Errors {
    ERR = 'Somthing went wrong!',
    FILL_CREDS = 'All fields must be supplied!',
    PW_MATCH = 'Passwords are not match!',
    AXIOS = ''
}

enum Str { 
    EMPTY = '',
    CHOOSE_VAL = 'Choose a new value',
    WELCOME_B = 'Welcome back!',
}

enum Path {
    BASE_URL = "http://127.0.0.1:3500/api/users",
    UPDT_USR = '/user-details',
    ID_PARAM = ':id',
    
    HOME_SFX = "",
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

    LOGIN_BTN = 'loginBtn',
    SIGNUP_BTN = 'signupBtn',
    UPDT_BTN = 'updateBtn',
}

export  { 
    InputTypes, 
    ClassName,
    Errors,
    UpdateOptions,
    Path,
    Str,
 };