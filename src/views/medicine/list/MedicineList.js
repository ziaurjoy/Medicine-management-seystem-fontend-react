import {
  CButton,
  CButtonGroup, CCard,
  CCardBody,
  CCardHeader,
  CCol, CNavLink, CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react'
import React from 'react'

const MedicineList = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Medicine List</strong>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Medicne Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Sell Price</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Expiration Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Napa Extra</CTableDataCell>
                  <CTableDataCell>5Tk</CTableDataCell>
                  <CTableDataCell>20/02/21</CTableDataCell>
                  <CTableDataCell>
                    <CButtonGroup role="group" aria-label="Basic example">
                      <CButton color="secondary">
                        <CNavLink href="company-details">Views</CNavLink>
                      </CButton>
                      <CButton color="info">
                        <CNavLink href="#">Update</CNavLink>
                      </CButton>
                      <CButton color="danger">
                        <CNavLink href="#">delete</CNavLink>
                      </CButton>
                    </CButtonGroup>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>Jacob</CTableDataCell>
                  <CTableDataCell>Thornton</CTableDataCell>
                  <CTableDataCell>@fat</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                  <CTableDataCell>@twitter</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default MedicineList
