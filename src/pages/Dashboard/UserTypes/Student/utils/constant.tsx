import React from "react";
import { getIdFromObject } from "../../../utils/commonFunction";
import { IoIosBookmarks, IoIosPerson } from "react-icons/io";
import { MdExtension } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import {
  AiOutlineEdit,
  AiOutlineLock,
  AiOutlineLogout,
  AiOutlineMinusCircle,
} from "react-icons/ai";

interface IconProps {
  size: string;
  fontWeight: string;
}

export const CreateStudentSideTab = [
  {
    heading : 'Dashboard',
    title: "Dashboard",
    icon: <IoIosBookmarks size="18" fontWeight="bold" /> as React.ReactElement<IconProps>,
    path: 'dashboard'
  },
]

export const EditStudentSideTab = [
  {
    heading : 'Dashboard',
    title: "Dashboard",
    icon: <IoIosBookmarks size="18" fontWeight="bold" /> as React.ReactElement<IconProps>,
    path: 'dashboard'
  },
  {
    title: "My Profile",
    icon: <IoIosPerson size="18" fontWeight="bold" /> as React.ReactElement<IconProps>,
    path: 'view'
  },
  {
    title: "Enrolled Courses",
    icon: <IoIosBookmarks size="18" fontWeight="bold" /> as React.ReactElement<IconProps>,
  },
  {
    title: "My Quiz Attempts",
    icon: <MdExtension size="18" fontWeight="bold" /> as React.ReactElement<IconProps>,
  },
  {
    title: "Order History",
    icon: <AiOutlineShopping size="18" fontWeight="bold" />,
  },
  {
    heading : 'Account Settings',
    title: "Edit Profile",
    icon: <AiOutlineEdit size="18" fontWeight="bold" />,
    path: 'edit'
  },
  {
    title: "Withdraw",
    icon: <AiOutlineMinusCircle size="18" fontWeight="bold" />,
  },
  {
    title: "Change Password",
    icon: <AiOutlineLock size="18" fontWeight="bold" />,
    path: 'change-password'
  },
  {
    title: "Logout",
    icon: <AiOutlineLogout size="18" fontWeight="bold" />,
  }
];

export const sendStudentData = (data: any) => {
  const sendData = { ...data };
  sendData.name = `${sendData.firstName} ${sendData.lastName}`;
  delete sendData.firstName;
  delete sendData.lastName;
  delete sendData.confirmPassword;
  return {
    ...sendData,
    name: sendData.name,
    class: getIdFromObject([sendData.class]).length
      ? getIdFromObject([sendData.class])[0]
      : "",
    section: getIdFromObject([sendData.section]).length
      ? getIdFromObject([sendData.section])[0]
      : "",
    language: [sendData.language],
  };
};
