import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CForm, CFormCheck,
  CFormInput,
  CFormLabel, CFormSelect,
  CFormTextarea, CRow
} from '@coreui/react'
import React from 'react'

const MedicineCreate = () => {
  return (
    <CRow>
        <CCol className="mx-auto" xs={10}>
        <CCard className="mb-4">
          <CCardBody>
            <CCardHeader>
              <strong>Create A New Medicine</strong>
            </CCardHeader>
            <CForm className="row g-3">
              <CCol xs={12}>
                <CFormLabel htmlFor="name">Medicine Name</CFormLabel>
                <CFormInput id="name" name="name" placeholder="Input Medicine Name ..." />
              </CCol>
              <CCol xs={12}>
                <CFormLabel htmlFor="medical_type">Medical Type </CFormLabel>
                <CFormInput id="medical_type" placeholder="Input Medical Type ... " />
              </CCol>
              <CCol xs={6}>
                <CFormLabel htmlFor="buy_price">Buy Price </CFormLabel>
                <CFormInput id="buy_price" name="buy_price" placeholder="Input Buy Price ..." />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="sell_price">sell_price</CFormLabel>
                <CFormInput id="sell_price" name="sell_price" placeholder="Input Sell Price ...." />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="CGST">Central Goods and Services Tax</CFormLabel>
                <CFormInput id="CGST" name="CGST" placeholder="Central Goods and Services Tax" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="SGST">State Goods and Services Tax</CFormLabel>
                <CFormInput id="SGST" name="SGST" placeholder="State Goods and Services Tax" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="mfg">Manufacture Date</CFormLabel>
                <CFormInput id="mfg" type="date" name="mfg" placeholder="Manufacture Date ...." />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="exp_date">Expiration Date</CFormLabel>
                <CFormInput id="exp_date" type="date" name="exp_date" placeholder="Expiration  Date ...." />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="batch_no">Batch No</CFormLabel>
                <CFormInput id="batch_no" name="batch_no" placeholder="Input Batch No ...." />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="company">Company</CFormLabel>
                <CFormSelect aria-label="ab">
                  <option>Select Company</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="in_stock">In Stock</CFormLabel>
                <CFormInput id="in_stock" name="in_stock" placeholder="In Stock ...." />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="quantity_strip">Quantity in strip</CFormLabel>
                <CFormInput id="quantity" name="quantity" placeholder="Quantity in strip ...." />
              </CCol>
              <CCol xs={12}>
                <CFormLabel htmlFor="discription">Discription </CFormLabel>
                <CFormTextarea id="discription" name="discription"></CFormTextarea>
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

export default MedicineCreate
