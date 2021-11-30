import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// companys
const CompanyList = React.lazy(() => import('./views/companys/list/CompanyList'))
const CompanyDetails = React.lazy(() => import('./views/companys/details/CompanysDetails'))
const CompanyCreate = React.lazy(() => import('./views/companys/create/CompanyCreate'))
const Profile = React.lazy(() => import('./views/profile/profileview/Profile'))
const EditProfile = React.lazy(() => import('./views/profile/editprofile/EditProfile'))


// Medicine
const MedicineList = React.lazy(() => import('./views/medicine/list/MedicineList'))
const MedicineDetails = React.lazy(() => import('./views/medicine/details/MedicineDetails'))
const MedicineCreate = React.lazy(() => import('./views/medicine/create/MedicineCreate'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/companys', name: 'companys', component: CompanyList, exact: true },
  { path: '/companys/list', name: 'List', component: CompanyList },
  { path: '/companys/company-create', name: 'Create New Company', component: CompanyCreate },
  { path: '/companys/company-details', name: 'Company Details', component: CompanyDetails },

  { path: '/medicines', name: 'Medicine', component: MedicineList, exact: true },
  { path: '/medicines/list', name: 'List', component: MedicineList },
  { path: '/medicines/medicines-create', name: 'Add New Medicine', component: MedicineCreate },
  { path: '/medicines/medicines-details', name: 'Medicine Details', component: MedicineDetails },

  { path: '/profile', name: 'Profile', component: Profile, exact:true },
  { path: '/profile/profileview', name: 'View Profile', component: Profile },
  { path: '/profile/editprofile', name: 'Profile Edit', component: EditProfile },


]

export default routes
