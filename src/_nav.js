/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApps,
  cilAppsSettings,
  cilBell,
  cilCalculator,
  cilChart,
  cilChartPie,
  cilCheckCircle,
  cilCursor,
  cilDescription,
  cilDrop,
  cilEnvelopeClosed,
  cilExposure,
  cilGift,
  cilGradient,
  cilGroup,
  cilImage,
  cilInfo,
  cilInputPower,
  cilKeyboard,
  cilMediaStop,
  cilMoney,
  cilNewspaper,
  cilNotes,
  cilOptions,
  cilPencil,
  cilPowerStandby,
  cilPuzzle,
  cilShieldAlt,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilViewModule,
  cilViewStream,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'


const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // permissions: ['Dashboardread'],
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  // {
  //   component: CNavItem,
  //   name: 'Profile',
  //   to: '/profile',
  //   icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  //     // permissions: ['Inforead'],
  // },
  {
    component: CNavItem,
    name: 'Performance Chart',
    to: '/PerformanceChart',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      // permissions: ['Messagesread'],
  },
  // {
  //   component: CNavItem,
  //   name: 'Featured Items',
  //   to: '/featureditems',
  //   icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  //   // permissions: ['Dashboard Usersread'],
  // },
  {
    component: CNavItem,
    name: 'Payment Sheet',
    to: '/PaymentSheet',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
      // permissions: ['Item Categoryread'],
  },
   {
    component: CNavItem,
    name: 'Attendance Sheet',
    to: '/attendanceSheet',
    icon: <CIcon icon={cilGradient} customClassName="nav-icon" />,
      // permissions: ['Product Requestread'],
  },
  {
    component: CNavItem,
    name: 'Expiry Data',
    to: '/ExpiryData',
    icon: <CIcon icon={cilMediaStop} customClassName="nav-icon" />,
      // permissions: ['Permission Modelsread'],
  },
  {
    component: CNavItem,
    name: 'Expense Sheet',
    to: '/ExpenseSheet',
    icon: <CIcon icon={cilExposure} customClassName="nav-icon" />,
      // permissions: ['Permission Modelsread'],
  },
   {
    component: CNavItem,
    name: <span style={{fontSize:'12px',fontWeight:'bold'}}>Weekly based Performance chart</span>,
    to: '/WeeklyBasedPerformanceSheet',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
      // permissions: ['Featuredread'],
  },
  {
    component: CNavItem,
    name: <span style={{fontSize:'12px',fontWeight:'bold'}}>Yearly based Performance chart</span>,
    to: '/YearlyBasedPerformanceChart',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
      // permissions: ['Admin Reportread'],
  },
  // {
  //   component: CNavItem,
  //   name: 'Audios',
  //   to: '/audios',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //     // permissions: ['Customer Reportread'],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Prayers',
  //   to: '/prayers',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   //  permissions: ['Product Reportread'],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Bible',
  //   to: '/bible',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   //  permissions: ['Settlement Reportread'],
  // },
  {
    component: CNavItem,
    name: <span style={{fontSize:'12px',fontWeight:'bold'}}>Driver based Performance chart</span>,
    to: '/DriverBasedPerformanceChart',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    //  permissions: ['Contentread'],
  },
  // {
  //   component: CNavItem,
  //   name: 'Calender',
  //   to: '/calender',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   //  permissions: ['Report Historyread'],
  // },
  {
    component: CNavItem,
    name: 'Vehicle Documents',
    to: '/VehicleDocuments',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    //  permissions: ['Report Historyread'],
  },
  {
    component: CNavItem,
    name: 'Driver Documents',
    to: '/DriverDocuments',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    //  permissions: ['Report Historyread'],
  },
  {
    component: CNavItem,
    name: 'Driver Performance',
    to: '/DriverPerformance',
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
    //  permissions: ['Report Historyread'],
  },
  {
    component: CNavItem,
    name: 'Driver Payment Status',
    to: '/DriverPaymentStatus',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    //  permissions: ['Report Historyread'],
  },

  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       to: '/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]



export default _nav
