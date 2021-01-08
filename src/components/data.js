import React from 'react';
import { FaLinkedin, FaTwitter, FaGoogleDrive, FaBook, FaSearch, FaVideo, FaRegCalendar, FaGoogle } from 'react-icons/fa';

export const search =[
  {id: 1,
    url: 'https://www.google.com',
    icon: <FaSearch/>

  }
]
export const video = [
  {id: 1,
    url: 'https://duo.google.com/?web&utm_source=marketing_page_button_main',
  icon: <FaVideo/>}
]

export const social = [
  { id: 1,
    url: 'https://www.youtube.com',
    icon: <FaVideo/>,
  },
  { id: 2,
    url: 'https://www.googlebooks.com',
    icon: <FaBook/>,
  },
  { id: 3,
    url: 'https://www.googlecalendar.com',
    icon: <FaRegCalendar />,
  },
   {id: 4,
    url: 'https://www.googledrive.com',
    icon: <FaGoogleDrive />,
  },
  { id: 5,
    url: 'https://www.google.com',
    icon: <FaLinkedin />,
  },
  { id: 6,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
    },
    {
      id: 7,
      url:'https://www.google.com',
      icon: <FaGoogle/>
    },
];
