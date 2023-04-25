import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'หน้าหลัก',
        icon: <AiIcons.AiFillHome />,
        path: '/dashboard'
    },
    {
        title: 'แดชบอร์ด',
        path: '/dashboard/server1',
        icon: <FaIcons.FaServer />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />
    },
    {
        title: 'กลับไปยังหน้าแรก',
        path: '/home',
        icon: <IoIcons.IoMdArrowRoundBack />,
    }
];
