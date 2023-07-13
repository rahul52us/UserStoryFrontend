import {lazy} from 'react';
import { authentication } from '../constant/routes';

const Login = lazy(() => import("../../pages/Authentication/Login/Login"));
const Register = lazy(
  () => import("../../pages/Authentication/Register/Register")
);
const ForgotPassword = lazy(
  () => import("../../pages/Authentication/ForgotPassword/ForgotPassword")
);
const ResetPassword = lazy(
  () => import("../../pages/Authentication/ResetPassword/ResetPassword")
);
const CreateOrganisation = lazy(
  () => import("../../pages/Authentication/CreateOrganisation/CreateOrganisation")
);

const VerifyEmail = lazy(
    () => import("../../pages/Authentication/VerifyEmail/VerifyEmail")
  );

export const AuthenticateRoutes = [
    {
      element: <Login />,
      path: authentication.login,
      publicRoutes: true,
    },
    {
      element: <Register />,
      path: authentication.register,
      publicRoutes: true,
    },
    {
      element: <ForgotPassword />,
      path: authentication.forgotPassword,
      publicRoutes: true,
    },
    {
      element: <ResetPassword />,
      path: authentication.resetPassword,
      publicRoutes: true,
    },
    {
      element: <VerifyEmail />,
      path: authentication.verifyEmail,
    },
    {
      element: <CreateOrganisation />,
      path: authentication.createOrganisation,
    },
  ];

