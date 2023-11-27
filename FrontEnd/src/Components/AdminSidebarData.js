import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const AdminSidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Add-Event',
    path: '/createevent',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'View-Event',
    path: '/viewevent',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'View-Payment',
    path: '/paymentdetails',
    icon: <FaIcons.FaCcVisa />,
    cName: 'nav-text'
  },
  {
    title: 'View-Feeds',
    path: '/viewfeed',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/supportt',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
