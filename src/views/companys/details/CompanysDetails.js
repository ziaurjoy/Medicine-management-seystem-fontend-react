import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow, CCardTitle, CCardText } from '@coreui/react'

const CompanysDetails = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol className="mx-auto" xs={8}>
        <CCard className="mb-4">
          <CCardHeader>Bangladesh Phanrmacy</CCardHeader>
          <CCardBody>
            <CCardTitle>Bangladesh Phanrmacy</CCardTitle>
            <p>Email : Bangladesh@gmail.com</p>
            <p>Phone : 01771833614</p>
            <p>License Number : Ban563</p>
            <p>Address : Dhaka, Bangladesh</p>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content.This content is a little bit longer.
            </CCardText>
            <CCardText>
              <small className="text-medium-emphasis">Last updated 3 mins ago</small>
            </CCardText>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CompanysDetails
