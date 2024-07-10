/* eslint-disable prettier/prettier */
import * as XLSX from 'xlsx';

function exportToExcel(dataObj,user, filename) {
  const dataArray = dataObj;

  // Check if dataArray is defined and is an array
  if (!Array.isArray(dataArray) || dataArray.length === 0) {
    console.error("Data array is undefined, null, or empty.");
    return;
  }

  // Define the desired display order and fields to remove
  const displayOrder = ['createdAt', 'item_name', 'country', 'userName', 'state', 'facilities', 'featured', 'item_title', 'response', 'UserMobile', 'place', 'price', 'price and rent', 'features', 'contact number', 'desc', 'type', 'discription', 'specifications', 'status'];
  const fieldsToRemove = ['category_id', 'long', 'lat', 'images', 'item_id', 'keys', 'order', 'like'];

  // Map data and handle undefined values
  const mappedData = dataArray.map(item => {
    const mappedItem = {};
    displayOrder.forEach(key => {
      if (!fieldsToRemove.includes(key)) {
        if (['createdAt'].includes(key)) {
          if (!isNaN(item.data[key])) {
            // If the value is a valid timestamp, convert it to a Date object
            const dateValue = new Date(item.data[key].seconds * 1000);
            // Convert the Date object to a local date string
            mappedItem[key] = dateValue.toLocaleDateString();
          } else {
            // If the value is not a valid timestamp, handle the error or set a default value
            console.error(`Invalid timestamp for key '${key}': ${item.data[key]}`);
            mappedItem[key] = ''; // Set a default value or handle the error
          }
        } else if (key === 'specifications') {
          // Map the specifications field
          const specifications = item.data[key];
          if (typeof specifications === 'object' && specifications !== null) {
            Object.entries(specifications).forEach(([subKey, subValue]) => {
              mappedItem[`${subKey}`] = Array.isArray(subValue) ? subValue.join(', ') : subValue;
            });
          }
        } else {
          // Handle other keys
          mappedItem[key] = item.data[key] !== undefined ? item.data[key] : '';
        }
      }
    });
    return mappedItem;
  });

  // Create a new workbook and add a worksheet
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(mappedData);
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Write the workbook to a file
  XLSX.writeFile(wb, filename);
}

export default exportToExcel;
