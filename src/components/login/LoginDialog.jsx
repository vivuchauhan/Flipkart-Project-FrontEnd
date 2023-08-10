// import { useState, useContext } from "react";
// import {
//   Dialog,
//   Box,
//   TextField,
//   Typography,
//   Button,
//   styled
// } from "@mui/material";
// import { authenticateSingnup, authenticateLogin } from "../../service/api";
// import { DataContext } from "../../context/DataProvider";

// const DialogStyle = styled(Dialog)(({theme})=>({
//   [theme.breakpoints.down('sm')]:{
//      width:'100%'
//   }
// }));

// const DialogWrap =styled(Box)(({theme}) => ({
//   display:'flex',
//   height:'100%',

//   [theme.breakpoints.down('sm')]:{
//     display:'flex',
//     height:'100%',
//     width:'100%',
//     flexDirection:'row'
//   }
// }))

// const Component = styled(Box)(({theme}) =>({
//     height: '70vh',
//     width: '90vh',
//     [theme.breakpoints.down('sm')]:{
//       height: '60vh',
//       width: '65vh',
//     }
//   }));
// const Image = styled(Box)`
//     background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
//     height: 82.5%;
//     width: 28%;
//     padding: 45px 35px;
    
//     & > p, & > h5 {
//         color: #FFFFFF;
//         font-weight:600;
//     }
// `;
// const Wrapper=styled(Box)`
//     display: flex;
//     flex-direction: column;
//     padding: 25px 35px;
//     flex: 1;
//     & > div, & > button, & > p{
//         margin-top: 20px
//     }
// `;
// const LoginButton = styled(Button)`
//     text-transform: none;
//     background: #FB641B;
//     color: #fff;
//     height: 48px;
//     border-radius:2px;
//     &:hover {
//         background-color: #ffbf00;
//       }
// `;
// const OtpButton = styled(Button)`
//     text-transform: none;
//     background: #fff;
//     color: #2874f0;
//     height: 48px;
//     border-radius: 2px;
//     box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
// `;
// const Text = styled(Typography)`
//     font-size: 12px;
//     color: #878787;
// `;
// const CreateAccount = styled(Typography)`
//     font-size: 14px;
//     text-align: center;
//     color: #2874f0;
//     font-weight: 600;
//     cursor: pointer;
// `;
// const Error= styled(Typography)`
//     font-size: 10px;
//     color: #ff6161;
//     line-height: 0;
//     margin-top: 10px;
//     font-weight: 600;
// `;

// const accountInitialValues = {
//     login:{
//         view: 'login',
//         heading: 'Login',
//         subHeading: 'Get access to your Orders, Wishlist and Recommendations'
//     },
//     signup:{
//         view: 'signup',
//         heading: "Looks like you're new here!",
//         subHeading: 'Sign up with your mobile number to get started'
//     }
// }

// const signupinitislvalues = {
//     firstname: '',
//     lastname: '',
//     username:'',
//     email: '',
//     password:'',
//     phone:''
// }
// const loginInitialvalues = {
//     username: '',
//     password:''
// }

// const LoginDialog = ({ open, setOpen }) => {

//   const [account, toggleAccount] = useState(accountInitialValues.login);
//   const [signup, setSingup] = useState(signupinitislvalues);
//   const [login, setLogin] = useState(loginInitialvalues);
//   const [ error, setError] = useState(false);

//   const { setAccount } = useContext(DataContext);

//   const toggleSignup = () =>{
//     toggleAccount(accountInitialValues.signup);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     toggleAccount(accountInitialValues.login);
//     setError(false);
//   };

//   const onInputChange = (e) => {
//     setSingup({...signup,[e.target.name]: e.target.value });
//   };

//   const signupUser = async () => {
//     let response = await authenticateSingnup(signup);
//     if(!response) return;
//     handleClose();
//     setAccount(signup.firstname);
//   };

//   const onValueChange=(e)=>{
//     setLogin({...login, [e.target.name]: e.target.value});
//   };

//   const loginUser = async ()=>{
//     let response = await authenticateLogin(login);
//     console.log(response);
//     if(response.status === 200){
//         handleClose();
//         setAccount(response.data.data.firstname);  
//     } else {
//         setError(true);
//     }
//   };



//   return (
//     <DialogStyle open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
//       <Component>
//         <DialogWrap >
//             <Image>
//                 <Typography variant="h5">
//                    {account.heading}
//                 </Typography>
//                 <Typography style={{marginTop: 20}}>
//                     {account.subHeading}
//                 </Typography>
//             </Image>
//             { account.view === 'login' ?
//                 <Wrapper>
//                     <TextField variant="standard" onChange={(e)=> onValueChange(e)} name="username" type="text" label="Eneter Username" />
                    
//                     { error && <Error>Please enter valid username or password</Error>}
                    
//                     <TextField variant="standard" onChange={(e)=> onValueChange(e)} name="password" type="password" label="Eneter Password" />
                    
//                     <Text>
//                     By continuing, you agree to Flipkart's Terms of Use and Privacy
//                     Policy.
//                     </Text>
                    
//                     <LoginButton onClick={() => loginUser()}>Login</LoginButton>
//                     <Typography style={{textAlign:'center'}}>OR</Typography>
//                     <OtpButton>Request OTP</OtpButton>
                    
//                     <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
//                 </Wrapper>
//             :
//                 <Wrapper>
//                         <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="firstname" label="Eneter Firstname" type="text"/>
//                         <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="lastname" label="Eneter Lastname" type="text"/>
//                         <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="username" label="Eneter Username" type="text"/>
//                         <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="email" label="Eneter Email" type="email" />
//                         <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="password" label="Eneter Password" type="text"/>
//                         <TextField variant="standard" onChange={(e)=> onInputChange(e)} name="phone" label="Eneter Phone" type="tel"/>
//                         <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
//                 </Wrapper>
//             }
//         </DialogWrap>
//       </Component>
//     </DialogStyle>
//   );
// };

// export default LoginDialog;







import { useState, useContext } from "react";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled
} from "@mui/material";
import { authenticateSingnup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const DialogStyle = styled(Dialog)(({theme})=>({
  [theme.breakpoints.down('sm')]:{
     width:'100%'
  }
}));

const DialogWrap =styled(Box)(({theme}) => ({
  display:'flex',
  height:'100%',

  [theme.breakpoints.down('sm')]:{
    display:'flex',
    height:'100%',
    width:'100%',
    flexDirection:'row'
  }
}))

const Component = styled(Box)(({theme}) =>({
    height: '70vh',
    width: '80vh',
    [theme.breakpoints.down('sm')]:{
      height: '60vh',
      width: '65vh',
    }
  }));
const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 100%;
    width: 28%;
    padding: 25px 35px;
    
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight:600;
    }
`;
const Wrapper=styled(Box)`
    display: flex;
    flex-direction: column;
    height:100%;
    padding: 15px 35px;
    flex: 1;
    & > div, & > button, & > p{
        margin-top: 20px
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius:2px;
    &:hover {
        background-color: #ffbf00;
      }
`;
const OtpButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`;
const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`;
const Error= styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const accountInitialValues = {
    login:{
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupinitislvalues = {
    firstname: '',
    lastname: '',
    username:'',
    email: '',
    password:'',
    phone:'',
    errors: {} // To store validation errors for each field
}


const loginInitialvalues = {
    username: '',
    password:''
}

const LoginDialog = ({ open, setOpen }) => {

  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupinitislvalues);
  const [login, setLogin] = useState(loginInitialvalues);
  const [error, setError] = useState(false);

  const [signupErrors, setSignupErrors] = useState({
    firstname: false,
    lastname: false,
    username: false,
    email: false,
    password: false,
    phone: false,
  });

  const { setAccount } = useContext(DataContext);

  const toggleSignup = () =>{
    toggleAccount(accountInitialValues.signup);
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const handleBackdropClick = () => {
    handleClose();
    // Reset the signupErrors state when clicking outside the dialog
    setSignupErrors({
      firstname: false,
      lastname: false,
      username: false,
      email: false,
      password: false,
      phone: false,
    });
  };


  const validateSignupForm = () => {
    const errors = {};

    if (!signup.firstname.trim()) {
      errors.firstname = 'First name is required';
    }

    if (!signup.lastname.trim()) {
      errors.lastname = 'Last name is required';
    }

    if (!signup.username.trim()) {
      errors.username = 'Username is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!signup.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(signup.email)) {
      errors.email = 'Invalid email format';
    }

    if (signup.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!signup.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(signup.phone)) {
      errors.phone = 'Invalid phone number format';
    }

    return errors;
  };

  const onInputChange = (e) => {
    setSignup({...signup,[e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    const errors = validateSignupForm();

    if (Object.keys(errors).length === 0) {
      let response = await authenticateSingnup(signup);
      if (!response) return;
      handleClose();
      setAccount(signup.firstname);
    } else {
      setSignup((prevState) => ({
        ...prevState,
        errors: { ...errors }
      }));
    }
  };

  

  const onValueChange=(e)=>{
    setLogin({...login, [e.target.name]: e.target.value});
  };

  const loginUser = async () =>{
    let response = await authenticateLogin(login);
    console.log(response);
    if(response.status === 200){
        handleClose();
        setAccount(response.data.data.firstname);  
    } else {
        setError(true);
    }
  };

  return (
    <DialogStyle open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
      <Component>
        <DialogWrap >
            <Image>
                <Typography variant="h5">
                   {account.heading}
                </Typography>
                <Typography style={{marginTop: 20}}>
                    {account.subHeading}
                </Typography>
            </Image>
            { account.view === 'login' ?
                <Wrapper>
                    <TextField
                      variant="standard"
                      onChange={(e)=> onValueChange(e)}
                      name="username"
                      type="text"
                      label="Enter Username"
                    />
                    
                    {signup.errors.username && <Error>{signup.errors.username}</Error>}
                    
                    <TextField
                      variant="standard"
                      onChange={(e)=> onValueChange(e)}
                      name="password"
                      type="password"
                      label="Enter Password"
                    />
                    
                    {error && <Error>Please enter valid username or password</Error>}
                    
                    <Text>
                    By continuing, you agree to Flipkart's Terms of Use and Privacy
                    Policy.
                    </Text>
                    
                    <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <OtpButton>Request OTP</OtpButton>
                    
                    <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                </Wrapper>
            :
                <Wrapper>
                        <TextField
                            variant="standard"
                            onChange={(e)=> onInputChange(e)}
                            name="firstname"
                            label="Enter Firstname"
                            type="text"
                           // error={!!signup.errors.firstname}
                        />
                          {signup.errors.firstname && (
                            <Typography fontSize={'10px'} height={'0px'} color="error">
                              {signup.errors.firstname}
                            </Typography>
                          )}

                        <TextField
                            variant="standard"
                            onChange={(e)=> onInputChange(e)}
                            name="lastname"
                            label="Enter Lastname"
                            type="text"
                          //  error={!!signup.errors.lastname}
                        />
                          {signup.errors.lastname && (
                            <Typography fontSize={'10px'} height={'0px'} color="error">
                              {signup.errors.lastname}
                            </Typography>
                          )}

                        <TextField
                          variant="standard"
                          onChange={(e)=> onInputChange(e)}
                          name="username"
                          label="Enter Username"
                          type="text"
                          //error={!!signup.errors.username}
                        />
          
                          {signup.errors.username && (
                            <Typography fontSize={'10px'} height={'0px'} color="error">
                              {signup.errors.username}
                            </Typography>
                          )}

                        <TextField
                          variant="standard"
                          onChange={(e)=> onInputChange(e)}
                          name="email"
                          label="Enter Email"
                          type="email"
                         // error={!!signup.errors.email}
                        />
                          {/* {errorUser && <Error>{errorUser}</Error>} */}
                          {signup.errors.email && (
                            <Typography fontSize={'10px'} height={'0px'} color="error">
                              {signup.errors.email}
                            </Typography>
                          )}

                        <TextField
                          variant="standard"
                          onChange={(e)=> onInputChange(e)}
                          name="password"
                          label="Enter Password"
                          type="password"
                         // error={!!signup.errors.password}
                        />
                         {signup.errors.password && (
                            <Typography fontSize={'10px'} height={'0px'} color="error">
                              {signup.errors.password}
                            </Typography>
                          )}

                        <TextField
                          variant="standard"
                          onChange={(e)=> onInputChange(e)}
                          name="phone"
                          label="Enter Phone"
                          type="tel"
                         // error={!!signup.errors.phone}
                        />
                          {signup.errors.phone && (
                            <Typography fontSize={'10px'} height={'0px'} color="error">
                              {signup.errors.phone}
                            </Typography>
                          )}
                        <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
                </Wrapper>
            }
        </DialogWrap>
      </Component>
    </DialogStyle>
  );
};

export default LoginDialog;


