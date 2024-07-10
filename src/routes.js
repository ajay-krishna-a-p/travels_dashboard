/* eslint-disable prettier/prettier */
import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))




//crm
// const InfoView = React.lazy(() => import('./components/Userinfo/InfoView.jsx'))
// const Info = React.lazy(() => import('./components/Userinfo/info.jsx'))
// const ViewinfoProfile = React.lazy(() => import('./components/Userinfo/ViewinfoProfile.jsx'))
// const Adduser = React.lazy(() => import('./components/DashboardUser/CreateUser.jsx'))
// const Featured = React.lazy(() => import('./components/Featureditems/FeaturedItems.jsx'))
// const AddFeatured = React.lazy(() => import('./components/Featureditems/AddFeaturedItems.jsx'))
// const Profile = React.lazy(() => import('./components/Profile/Profile.jsx'))
// const DashboardUsers = React.lazy(() => import('./components/DashboardUser/DashboardUsers.jsx'))
// const EditUser = React.lazy(() => import('./components/DashboardUser/EditUser.jsx'))
// const Permissions = React.lazy(() => import('./components/DashboardUser/Permissions.jsx'))
// const Dynamicform = React.lazy(() => import('./components/Dynamicform/Dynamicform.jsx'))
// const EditProductRequest = React.lazy(() => import('./components/Dynamicform/EditProductRequest.jsx'))

// const Dynamicformreport = React.lazy(() => import('./components/Dynamicform/DynamicformReport.jsx'))
// const ProductrequestViewdetails = React.lazy(() => import('./components/Dynamicform/ProductrequestViewdetails.jsx'))
// const ItemCategory = React.lazy(() => import('./components/ItemCategory/ItemCategory.jsx'))
// const AddItemCategory = React.lazy(() => import('./components/ItemCategory/AddItemCategory.jsx'))
// const EditItemCategory = React.lazy(() => import('./components/ItemCategory/EdititemCategory.jsx'))
// const Models = React.lazy(() => import('./components/Permissionmodels/Models.jsx'))
// const Addpermissionmodel = React.lazy(() => import('./components/Permissionmodels/Addpermissionmodel.jsx'))
// const Messages = React.lazy(() => import('./components/Messages/Message.jsx'))
// const UsersMessages = React.lazy(() => import('./components/Messages/UsersMessages.jsx'))
// const ViewUserMessage = React.lazy(() => import('./components/Messages/ViewUserMessage.jsx'))
// const ReportHistory = React.lazy(() => import('./components/Reporthistory/ReportHistoryPage.jsx'))
// const Content = React.lazy(() => import('./components/Content/Content.jsx'))
// const CustomerReport = React.lazy(() => import('./components/Report/CustomerReport.jsx'))
// const ProductReport = React.lazy(() => import('./components/Report/ProductReport.jsx'))
// const SettlementReport = React.lazy(() => import('./components/Report/SettlementReport.jsx'))
// const AdminReport = React.lazy(() => import('./components/Report/AdminReport.jsx'))










// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

//CHURCH
// const Users = React.lazy(() => import('./components/Church/Users/Users.jsx'))
// const AddUsers = React.lazy(() => import('./components/Church/Users/AddUsers.jsx'))
// const FeaturedItems = React.lazy(() => import('./components/Church/FeaturedItems/FeaturedItems.jsx'))
// const Wards = React.lazy(() => import('./components/Church/Wards/Wards.jsx'))
// const AddWard = React.lazy(() => import('./components/Church/Wards/AddWard.jsx'))
// const Clergy = React.lazy(() => import('./components/Church/Clergy/Clergy.jsx'))
// const Notice = React.lazy(() => import('./components/Church/Notice/Notice.jsx'))
// const AddNotice = React.lazy(() => import('./components/Church/Notice/AddNotice.jsx'))
// const BloodDonation = React.lazy(() => import('./components/Church/BloodDonation/BloodDonation.jsx'))
// const Committe = React.lazy(() => import('./components/Church/Committe/Committe.jsx'))
// const AddCommitte = React.lazy(() => import('./components/Church/Committe/AddCommitte.jsx'))
// const Audios = React.lazy(() => import('./components/Church/Audios/Audios.jsx'))
// const Prayers = React.lazy(() => import('./components/Church/Prayers/Prayers.jsx'))
// const Bible = React.lazy(() => import('./components/Church/Bible/Bible.jsx'))
// const Gallery = React.lazy(() => import('./components/Church/Gallery/Gallery.jsx'))
// const AddGallery = React.lazy(() => import('./components/Church/Gallery/AddGallery.jsx'))
// const Calender = React.lazy(() => import('./components/Church/Calender/Calender.jsx'))
// const Marriage = React.lazy(() => import('./components/Church/Marriage/Marriage.jsx'))
// const Notifications = React.lazy(() => import('./components/Church/Notifications/Notifications.jsx'))
// const Profile = React.lazy(() => import('./components/Church/Profile/Profile.jsx'))
// const ApplicationConfiguration = React.lazy(() => import('./components/Church/ApplicationConfiguration/ApplicationConfiguration.jsx'))
// const ScrollNews = React.lazy(() => import('./components/Church/ScrollNews/ScrollNews.jsx'))
// const AddClergy = React.lazy(() => import('./components/Church/Clergy/AddClergy.jsx'))

//Travels
const AttendanceSheet = React.lazy(() => import('./components/Travels/AttendanceSheet/AttendanceSheet.jsx'))
const DriverBasedPerformanceChart = React.lazy(() => import('./components/Travels/DriverBasedPerformanceChart/DriverBasedPerformanceChart.jsx'))
const DriverDocuments = React.lazy(() => import('./components/Travels/DriverDocuments/DriverDocuments.jsx'))
const DriverPaymentStatus = React.lazy(() => import('./components/Travels/DriverPaymentStatus/DriverPaymentStatus.jsx'))
const DriverPerformance = React.lazy(() => import('./components/Travels/DriverPerformance/DriverPerformance.jsx'))
const ExpenseSheet = React.lazy(() => import('./components/Travels/ExpenseSheet/ExpenseSheet.jsx'))
const ExpiryData = React.lazy(() => import('./components/Travels/ExpiryData/ExpiryData.jsx'))
const PaymentSheet = React.lazy(() => import('./components/Travels/PaymentSheet/PaymentSheet.jsx'))
const PerformanceChart = React.lazy(() => import('./components/Travels/PerformanceChart/PerformanceChart.jsx'))
const VehicleDocuments = React.lazy(() => import('./components/Travels/VehicleDocuments/VehicleDocuments.jsx'))
const WeeklyBasedPerformanceSheet = React.lazy(() => import('./components/Travels/WeeklyBasedPerformanceSheet/WeeklyBasedPerformanceSheet.jsx'))
const YearlyBasedPerformanceChart = React.lazy(() => import('./components/Travels/YearlyBasedPerformanceChart/YearlyBasedPerformanceChart.jsx'))








const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/attendanceSheet', name: 'Attendance Sheet', element: AttendanceSheet },
  { path: '/DriverBasedPerformanceChart', name: 'Driver based Performance chart', element: DriverBasedPerformanceChart },
  { path: '/DriverDocuments', name: 'Driver Documents', element: DriverDocuments },
  { path: '/DriverPaymentStatus', name: 'Driver Payment Status', element: DriverPaymentStatus },
  { path: '/DriverPerformance', name: 'Driver Performance', element: DriverPerformance },
  { path: '/ExpenseSheet', name: 'Expense Sheet', element: ExpenseSheet },
  { path: '/ExpiryData', name: 'Expiry Data', element: ExpiryData },
  { path: '/PaymentSheet', name: 'Payment Sheet', element: PaymentSheet },
  { path: '/PerformanceChart', name: 'Performance Chart', element: PerformanceChart },
  { path: '/VehicleDocuments', name: 'Vehicle Documents', element: VehicleDocuments },
  { path: '/WeeklyBasedPerformanceSheet', name: 'Weekly Based Performance Sheet', element: WeeklyBasedPerformanceSheet },
  { path: '/YearlyBasedPerformanceChart', name: 'Yearly Based Performance Chart', element: YearlyBasedPerformanceChart },










  // { path: '/addusers', name: 'Add Users', element: AddUsers },
  // { path: '/featureditems', name: 'FeaturedItems', element: FeaturedItems },
  // { path: '/wards', name: 'Wards', element: Wards },
  // { path: '/addward', name: 'Add Ward', element: AddWard },
  // { path: '/clergy', name: 'Clergy', element: Clergy },
  // { path: '/notice', name: 'Notice', element: Notice },
  // { path: '/addnotice', name: 'Add Notice', element: AddNotice },
  // { path: '/blooddonation', name: 'BloodDonation', element: BloodDonation },
  // { path: '/committe', name: 'Committe', element: Committe },
  // { path: '/addcommitte', name: 'Add Committe', element: AddCommitte },
  // { path: '/audios', name: 'Audios', element: Audios },
  // { path: '/prayers', name: 'Prayers', element: Prayers },
  // { path: '/bible', name: 'Bible', element: Bible },
  // { path: '/gallery', name: 'Gallery', element: Gallery },
  // { path: '/addalbum', name: 'Add Album', element: AddGallery },
  // { path: '/calender', name: 'Calender', element: Calender },
  // { path: '/marriage', name: 'Marriage', element: Marriage },
  // { path: '/notifications', name: 'Notifications', element: Notifications },
  // { path: '/profile', name: 'Profile', element: Profile },
  // { path: '/applicationConfiguration', name: 'Application Configuration', element: ApplicationConfiguration },
  // { path: '/scrollNews', name: 'Scroll News', element: ScrollNews },
  // { path: '/addClergy', name: 'Add Clergy', element: AddClergy },



  // { path: '/info', name: 'Info', element: Info },
  // { path: '/infoview', name: 'Info View', element: InfoView },
  // { path: '/viewinfoprofile', name: 'View Info Profile', element: ViewinfoProfile },
  // { path: '/featured', name: 'Featured', element: Featured },
  // { path: '/addfeatured', name: 'Add Featured', element: AddFeatured },
  // { path: '/profile', name: 'Profile', element: Profile },
  // { path: '/dashboardusers', name: 'Dashboard Users', element: DashboardUsers },
  // { path: '/productrequest', name: 'Product Request', element: Dynamicformreport },
  // { path: '/adduser', name: 'Add User', element: Adduser },
  // { path: '/dynamicform', name: 'DynamicForm', element: Dynamicform },
  // { path: '/Itemcategory', name: 'Item Category', element: ItemCategory },
  // { path: '/addItemcategory', name: 'Add Item Category', element: AddItemCategory },
  // { path: '/editItemcategory', name: 'Edit Item Category', element: EditItemCategory },
  // { path: '/models', name: 'Permission Models', element: Models },
  // { path: '/addpermissionmodel', name: 'Add Permission Models', element: Addpermissionmodel },
  // { path: '/productrequestviewdetails', name: 'Product Request View Details', element: ProductrequestViewdetails },
  // { path: '/messages', name: 'Messages', element: Messages },
  // { path: '/usermessages', name: 'UsersMessages', element: UsersMessages },
  // { path: '/viewusermessage', name: 'View User Message', element: ViewUserMessage },
  // { path: '/edituser', name: 'Edit User', element: EditUser },
  // { path: '/permissions', name: 'Permissions', element: Permissions },
  // { path: '/reporthistory', name: 'Report History', element: ReportHistory },
  // { path: '/editproductrequest', name: 'Edit Product Request', element: EditProductRequest },
  // { path: '/content', name: 'Content', element: Content },
  // { path: '/customerreport', name: 'Customer Report', element: CustomerReport },
  // { path: '/productreport', name: 'Product Report', element: ProductReport },
  // { path: '/settlementreport', name: 'Settlement Report', element: SettlementReport },
  // { path: '/adminreport', name: 'Admin Report', element: AdminReport },









  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  // { path: '/theme', name: 'Theme', element: Colors, exact: true },
  // { path: '/theme/colors', name: 'Colors', element: Colors },
  // { path: '/theme/typography', name: 'Typography', element: Typography },
  // { path: '/base', name: 'Base', element: Cards, exact: true },
  // { path: '/base/accordion', name: 'Accordion', element: Accordion },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', element: Cards },
  // { path: '/base/carousels', name: 'Carousel', element: Carousels },
  // { path: '/base/collapses', name: 'Collapse', element: Collapses },
  // { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  // { path: '/base/navs', name: 'Navs', element: Navs },
  // { path: '/base/paginations', name: 'Paginations', element: Paginations },
  // { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  // { path: '/base/popovers', name: 'Popovers', element: Popovers },
  // { path: '/base/progress', name: 'Progress', element: Progress },
  // { path: '/base/spinners', name: 'Spinners', element: Spinners },
  // { path: '/base/tables', name: 'Tables', element: Tables },
  // { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  // { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  // { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  // { path: '/charts', name: 'Charts', element: Charts },
  // { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  // { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  // { path: '/forms/select', name: 'Select', element: Select },
  // { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  // { path: '/forms/range', name: 'Range', element: Range },
  // { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  // { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  // { path: '/forms/layout', name: 'Layout', element: Layout },
  // { path: '/forms/validation', name: 'Validation', element: Validation },
  // { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', element: Flags },
  // { path: '/icons/brands', name: 'Brands', element: Brands },
  // { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  // { path: '/notifications/badges', name: 'Badges', element: Badges },
  // { path: '/notifications/modals', name: 'Modals', element: Modals },
  // { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
