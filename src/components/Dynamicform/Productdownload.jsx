/* eslint-disable prettier/prettier */

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import {
  addDoc,
  setDoc,
  collection,

  doc,

} from "firebase/firestore";
import React from 'react';

import { db } from "../Config/Config.js";

const DisplayOrder = [
  { name: 'customername', displayName: 'Customer Name' },
  { name: 'customermobile', displayName: 'Customer Mobile' },
  { name: 'collection_name', displayName: 'Insurance Name' },
  { name: 'vehiclenumber', displayName: 'Vehicle Number' },
  { name: 'vehicletype', displayName: 'Vehicle Type' },
  { name: 'vehiclecategory', displayName: 'Vehicle Category' },
  { name: 'companyname', displayName: 'Company Name' },
  { name: 'policyvalidityyears', displayName: 'Policy Validity Years' },
  { name: 'typeofinsurance', displayName: 'Type of Insurance' },
  { name: 'currentinsurance', displayName: 'Current Insurance' },
  { name: 'policynumber', displayName: 'Policy Number' },
  { name: 'policystartdate', displayName: 'Policy Start Date' },
  { name: 'expirydate', displayName: 'Policy End Date' },

  { name: 'totalpremiumamount', displayName: 'Total Premium Amount' },
  { name: 'partialpaymentamount', displayName: 'Partial Payment Amount' },
  { name: 'recievedamount', displayName: 'Received Amount' },
  { name: 'paymentmode', displayName: 'Payment Mode' },
  { name: 'status', displayName: 'Status' },
  { name: 'place', displayName: 'Place' },
  { name: 'created_by', displayName: 'Created By' },
  { name: 'created_email', displayName: 'Created Email' },
    { name: 'created_date', displayName: 'Created Date' },

  { name: 'narration', displayName: 'Narration' },

  { name: 'others', displayName: 'Others' },
  { name: 'kyc', displayName: 'KYC' },
  { name: 'previousInsurance', displayName: 'Previous Insurance' },
    { name: 'rc', displayName: 'Rc' },
  { name: 'vehiclePhtos', displayName: 'Vehicle Photos' },
];
const formatDate = (dateString) => {
  const date = new Date(dateString.seconds*1000).toLocaleDateString();
  return date;
};
const isImageField = (name) => ['others', 'kyc', 'previousInsurance','rc','vehiclePhotos'].includes(name);

const Download = ({data},user) => {

  // Create a new instance of jsPDF
   let pdfDoc; // Declare pdfDoc once outside the if blocks
    const pdfWidth = 210; // Width in mm (A4 size)
    const pdfHeight = 297; // Height in mm (A4 size)
    pdfDoc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [pdfWidth, pdfHeight],
    });
const email = 'epointinsurance@gmail.com';
 const title="E Point Mananthavady";
// Replace with the actual number of attempts
const currentDate = new Date().toLocaleDateString();
const currenttime = new Date().toLocaleTimeString();
const date=new Date();

   addDoc(collection(db,"downloads"), {
      user_data:user,
      date:date,
      time:currenttime,
      data:data,

        })



  // Set the font size for the header and grid content
  pdfDoc.setFontSize(18);
  pdfDoc.text(` ${title}`, 15, 15);



  pdfDoc.setFontSize(8);

  // Add email to PDF
  pdfDoc.text(`Email: ${email}`, 155, 20);



  pdfDoc.text(`Date: ${currentDate}`, 155, 5);
  pdfDoc.text(`Time: ${currenttime}`, 155, 10);

  // Convert the data grid to a 2D array for the PDF
  const headers = [["Title", "Description"]];
  const rows = DisplayOrder.map(({ name, displayName }) => {
    const value = data[name];
    let formattedValue;

    if (name.includes('created_date') || name.includes('expirydate') || name.includes('policystartdate')) {
      formattedValue = formatDate(value);
    } else if (isImageField(name)) {

      formattedValue = value ? { url: value } : '';

    } else if(!isImageField(name)) {
      formattedValue = value;
    }

    return [displayName, formattedValue];
  });


  // Add the data grid to PDF using autoTable plugin
  pdfDoc.autoTable({
      head: headers,
      body: rows,
      startY: 30, // Set the Y position to start the table
      columnStyles: {
        0: { cellWidth: 50 }, // Width for the "Title" column
        1: { cellWidth: 130 } // Width for the "Description" column
      },

      styles: {
        overflow: 'linebreak' // Handle text overflow
      },
       didDrawCell: function (data) {
        console.log(data.cell.raw);
    if (data.column.index === 1 && typeof data.cell.raw === 'object' && data.cell.raw.url) {
      const cell = data.cell;
     const textX = cell.x + cell.width / 2 + 10; // Adjusted to move the link to the right
    const textY = cell.y + cell.height / 2 + 2; // Center the text vertically within the cell
      pdfDoc.textWithLink('View Image', textX, textY, { url: data.cell.raw.url , color: [0, 0, 255] }); // Display link for image
    }
  }
    });

  // Page number
  const totalPages = pdfDoc.internal.getNumberOfPages();

  for (let i = 1; i <= totalPages; i++) {
    pdfDoc.setPage(i);
    // Add page number
    pdfDoc.text(`Page ${i} of ${totalPages}`, pdfDoc.internal.pageSize.width - 15, pdfDoc.internal.pageSize.height - 5, {
      align: 'right',
    });



       const logoWidth = 30; // Adjust as needed
  const logoHeight = 30; // Adjust as needed
  // Adjust as needed


 // Watermark
  pdfDoc.setTextColor(200, 200, 200);
  pdfDoc.textWithLink("Epoint", pdfDoc.internal.pageSize.width / 2, pdfDoc.internal.pageSize.height / 2, {
    color: [200, 200, 200],
    fontSize: 200,
    angle: 45,
    opacity: 0.5,
  });

   // Add PNG image to each page
    // const logoWidth = 50;
    // const logoHeight = 50;
    // pdfDoc.addImage(logoUrl, 'png', 10, 10, logoWidth, logoHeight);
  }



  // Save the PDF or open in a new tab
  pdfDoc.save( data['collection_name']+data['customername']+data['customerid']+'.pdf');
};

export default Download;
