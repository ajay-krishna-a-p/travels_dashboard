/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { app, db } from '../Config/Config.js';
import { addDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default async function ReportHistory(userdata, type, details,userid ) {
  const date_today = new Date();
  


  const messageTypes = {
    warning: (userdata, date, details) => `${userdata.name} encountered a warning on ${date.toDateString()}. Details: ${details}.`,
    success: (userdata, date, task) => `${userdata.name} successfully completed the task "${task}" on ${date.toDateString()}.`,
    error: (userdata, date, errorDetails) => `${userdata.name} encountered an error on ${date.toDateString()}. Error details: ${errorDetails}.`,
    info: (userdata, date, infoDetails) => `Information for ${userdata.name} logged on ${date.toDateString()}. Details: ${infoDetails}.`,
    alert: (userdata, date, alertDetails) => `${userdata.name} received an alert on ${date.toDateString()}. Alert details: ${alertDetails}.`,
    confirmation: (userdata, date, action) => `${userdata.name} requested confirmation for "${action}" on ${date.toDateString()}.`,
    critical: (userdata, date, issueDetails) => `${userdata.name} encountered a critical issue on ${date.toDateString()}. Issue details: ${issueDetails}.`,
    important: (userdata, date, importantDetails) => `Important message for ${userdata.name} on ${date.toDateString()}. Details: ${importantDetails}.`,
    notification: (userdata, date, notificationDetails) => `${userdata.name} received a notification on ${date.toDateString()}. Notification details: ${notificationDetails}.`,
    reminder: (userdata, date, reminderDetails) => `${userdata.name} received a reminder on ${date.toDateString()}. Reminder details: ${reminderDetails}.`,
    welcome: (userdata, date) => `Welcome message sent to ${userdata.name} on ${date.toDateString()}.`,
    goodbye: (userdata, date, goodbyeReason) => `Farewell message sent to ${userdata.name} on ${date.toDateString()}. Reason: ${goodbyeReason}.`,
    profileUpdate: (userdata, date, updatedFields) => `${userdata.name} updated their profile on ${date.toDateString()}. Updated fields: ${updatedFields.join(", ")}.`,
    settingsChange: (userdata, date, settingsDetails) => `${userdata.name} changed their settings on ${date.toDateString()}. Changes: ${settingsDetails}.`,
    dataExport: (userdata, date, dataType) => `${userdata.name} exported ${dataType} data on ${date.toDateString()}.`,
    login: (userdata, date) => `${userdata} logged in on ${date.toDateString()}.`,
    logout: (userdata, date) => `${userdata.name} logged out on ${date.toDateString()}.`,
    passwordChange: (userdata, date) => `${userdata.name} changed their password on ${date.toDateString()}.`,
    accountDeletion: (userdata, date) => `${userdata.name} deleted their account on ${date.toDateString()}.`,
    fileUpload: (userdata, date, fileName) => `${userdata.name} uploaded a file named "${fileName}" on ${date.toDateString()}.`,
    permissionUpdate: (userdata, date, permissionDetails) => `${userdata.name} updated permissions on ${date.toDateString()}. Details: ${permissionDetails}.`,
    loginerror: (userdata, date,details) => `${userdata} attempted login on ${date.toDateString()}.  Details: ${details}.`
    // Add more types and messages as needed
  };

  // Ensure the type exists in messageTypes
  if (!messageTypes[type]) {
    console.error('Invalid message type');
    return 'Invalid message type';
  }

  let message = messageTypes[type];

  try {
    // Add document to Firestore
    if(type==="loginerror"){
      await addDoc(collection(db, 'report_history'), {
        user_name: "Unknown",
        report_status: type,
        description: message(userdata, date_today, details),
        user_email: "unknown",
        date: date_today,
        uid: "unknown"
      });
     
    }else if(type==="login"){
      await addDoc(collection(db, 'report_history'), {
        user_name: userdata,
        report_status: type,
        description: message(userdata, date_today, details),
        user_email: userdata,
        date: date_today,
        uid: userid,
      });

    }else{
      await addDoc(collection(db, 'report_history'), {
        user_name: userdata.name,
        report_status: type,
        description: message(userdata, date_today, details),
        user_email: userdata.email,
        date: date_today,
        uid: userdata.uid
      });
      consolelog("hlo")
    }
   

    console.log('Document added to Firestore successfully');
  } catch (error) {
    console.error('Error adding document to Firestore:', error);
  }

  return 'done';
}
