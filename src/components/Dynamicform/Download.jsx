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
const displayOrder = [
   'createdAt','item_name',  'item_title', 'featured', 'type', 'userName','UserMobile','response',  'price', 'price and rent','place', 'state','country', 'facilities','features',
  'desc', 'status','specifications',
];

const fieldsToRemove = ['category_id', 'long', 'lat', 'images', 'item_id',  'keys', 'order', 'lat', 'long', 'like'];

const Download = async (data, user,orientation,width,height) => {
  // Create a new instance of jsPDF


   const pdfDoc = new jsPDF({
      orientation: orientation,
      unit: 'mm',
      format: [width, height],
    });

  const email = 'Land of jewels';
  const title = "CRM";
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const date = new Date();

  await addDoc(collection(db, "downloads"), {
     uid:user.uid,
    user_data: user,
    date: date,
    time: currentTime,
    data: data,
  });

  // Set the font size for the header and grid content
  pdfDoc.setFontSize(18);
  pdfDoc.text(` ${title}`, 15, 15);
  pdfDoc.setFontSize(8);

  // Add email to PDF
  pdfDoc.text(`Email: ${email}`, 155, 20);
  pdfDoc.text(`Date: ${currentDate}`, 155, 5);
  pdfDoc.text(`Time: ${currentTime}`, 155, 10);

  // Function to add a new table for each array
  const addTable = (tableTitle, items, startY) => {
    // Add table title
    pdfDoc.setFontSize(12);
    pdfDoc.text(tableTitle, 15, startY);

    // Filter and order the items
    const orderedItems = displayOrder
      .filter(key => !fieldsToRemove.includes(key))
      .map(key => {
        let value = items[key];

        if (key === 'specifications' && typeof value === 'object') {
          // Handle nested specifications field
          return Object.entries(value).map(([subKey, subValue]) => {
            if (Array.isArray(subValue)) {
              subValue = subValue.join(', ');
            }
            return [`${subKey}`, subValue];
          });
        } else if (key.includes('date') || key.includes('At')) {
          value = formatDate(value);
        } else if (Array.isArray(value)) {
          value = value.join(', ');
        } else {
          value = value || '';
        }

        return [[key, value]];
      })
      .flat(); // Flatten the array to merge nested arrays

    // Convert the items to a 2D array for the PDF
    const headers = [["Title", "Description"]];
    const rows = orderedItems;

    // Add the data grid to PDF using autoTable plugin
    pdfDoc.autoTable({
      head: headers,
      body: rows,
      startY: startY + 10, // Set the Y position to start the table

      styles: {
        overflow: 'linebreak' // Handle text overflow
      },
    });
  };

  // Start Y position for the first table
  let startY = 30;

  // Iterate over each array of objects in the data
  data.forEach(item => {
    const { id, data } = item;
    addTable(`Item Name: ${data.item_title}`, data, startY);
    startY = pdfDoc.autoTable.previous.finalY + 20; // Update the startY for the next table
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
