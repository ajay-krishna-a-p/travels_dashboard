/* eslint-disable prettier/prettier */

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Config/Config.js";

const formatDate = (dateString) => {
  if (dateString && dateString.seconds) {
    return new Date(dateString.seconds * 1000).toLocaleDateString();
  }
  return dateString || '';
};

// Specify the display order and the fields to remove
// const displayOrder = [
//    'createdAt','item_name',  'item_title', 'featured', 'type', 'userName','UserMobile','response',  'price', 'price and rent','place', 'state','country', 'facilities','features',
//   'desc', 'status','specifications',
// ];

// const fieldsToRemove = ['category_id', 'long', 'lat', 'images', 'item_id',  'keys', 'order', 'lat', 'long', 'like'];

const mapFieldsToTableRows = (fields) => {
  return fields.map(field => {
    return [
      field.field_name,
      field.field_title,
      field.required ? 'Yes' : 'No',
      field.type,
      field.options.join(', ') // Join options if any
    ];
  });
};

const Download = async (data, user) => {

  // Create a new instance of jsPDF
  const pdfWidth = 210; // Width in mm (A4 size)
  const pdfHeight = 297; // Height in mm (A4 size)
  const pdfDoc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: [pdfWidth, pdfHeight],
  });

  const email = 'Land of jewels';
  const title = "CRM";
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const date = new Date();

  await addDoc(collection(db, "downloads"), {

    user_data: user,
    date: date,
    time: currentTime,
    data: data,
  });

  // Set the font size for the header
  pdfDoc.setFontSize(18);
  pdfDoc.text(` ${title}`, 15, 15);
  pdfDoc.setFontSize(8);

  // Add email to PDF
  pdfDoc.text(`Email: ${email}`, 155, 20);
  pdfDoc.text(`Date: ${currentDate}`, 155, 5);
  pdfDoc.text(`Time: ${currentTime}`, 155, 10);

  // Define table headers
  const headers = [["Field Name", "Field Title", "Required", "Type", "Options"]];

  // Start Y position for the first table
  let startY = 30;

  // Iterate over each item in the data array
  data.forEach(item => {
    // Add the item name as the table title
    pdfDoc.setFontSize(12);
    pdfDoc.text(`Item Name: ${item.data.name}`, 15, startY);
    // Map field_properties to table rows
   const rows = item.data.field_properties ? mapFieldsToTableRows(item.data.field_properties) : [];

    // Add the table to the PDF using autoTable
    pdfDoc.autoTable({
      head: headers,
      body: rows,
      startY: startY + 10, // Set the Y position to start the table
      styles: {
        overflow: 'linebreak' // Handle text overflow
      },
      columnStyles: {
        0: { cellWidth: 40 }, // Width for "Field Name" column
        1: { cellWidth: 40 }, // Width for "Field Title" column
        2: { cellWidth: 20 }, // Width for "Required" column
        3: { cellWidth: 30 }, // Width for "Type" column
        4: { cellWidth: 60 }  // Width for "Options" column
      }
    });

    // Update the startY for the next table
    startY = pdfDoc.autoTable.previous.finalY + 20;
  });

  // Page number
  const totalPages = pdfDoc.internal.getNumberOfPages();

  for (let i = 1; i <= totalPages; i++) {
    pdfDoc.setPage(i);
    // Add page number
    pdfDoc.text(`Page ${i} of ${totalPages}`, pdfDoc.internal.pageSize.width - 15, pdfDoc.internal.pageSize.height - 5, {
      align: 'right',
    });

    // Watermark
    pdfDoc.setTextColor(200, 200, 200);
    pdfDoc.textWithLink("CRM", pdfDoc.internal.pageSize.width / 2, pdfDoc.internal.pageSize.height / 2, {
      color: [200, 200, 200],
      fontSize: 200,
      angle: 45,
      opacity: 0.5,
    });
  }

  // Save the PDF or open in a new tab
  pdfDoc.save('data.pdf');
};

export default Download;
