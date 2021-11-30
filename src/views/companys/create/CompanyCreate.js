import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CRow,
  CForm,
} from '@coreui/react'

const CompanyCreate = () => {
  return (
    <CRow>
      <CCol className="mx-auto" xs={10}>
        <CCard className="mb-4">
          <CCardBody>
            <CCardHeader>
              <strong>Create A New Compnay</strong>
            </CCardHeader>
            <CForm className="row g-3">
              <CCol xs={12}>
                <CFormLabel htmlFor="name">Company Name</CFormLabel>
                <CFormInput id="name" name="name" placeholder="Input Company Name ..." />
              </CCol>
              <CCol xs={12}>
                <CFormLabel htmlFor="license">License </CFormLabel>
                <CFormInput id="license" placeholder="Input License Id ... " />
              </CCol>
              <CCol xs={12}>
                <CFormLabel htmlFor="Adress">Address </CFormLabel>
                <CFormInput id="Adress" name="Adress" placeholder="Input Company Address ..." />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="phone">Phone</CFormLabel>
                <CFormInput id="phone" name="phone" placeholder="Input Company Phone Number ...." />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="email">Email</CFormLabel>
                <CFormInput id="email" name="email" placeholder="Input Company Email ...." />
              </CCol>
              <CCol xs={12}>
                <CFormLabel htmlFor="discription">Discription </CFormLabel>
                <CFormInput id="discription" placeholder="Input Company Discription ...." />
              </CCol>
              <CCol xs={12}>
                <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
              </CCol>
              <CCol xs={12}>
                <CButton type="submit">Submit</CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CompanyCreate
