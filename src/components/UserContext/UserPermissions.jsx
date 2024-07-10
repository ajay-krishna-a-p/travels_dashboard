/* eslint-disable prettier/prettier */
import { useUser } from './UserContext.js';

const usePermission = (requiredPermissions) => {
  const { permission } = useUser();

  // Check if permission or permission.permissions is null/undefined
  if (!permission || !Array.isArray(permission.permissions)) {
    console.error('Permissions are not available or not in the expected format');
    return false;
  }

  // Check if the user has any of the required permissions
  if (!Array.isArray(requiredPermissions)) {
    requiredPermissions = [requiredPermissions]; // Convert to array if not already an array
  }

  const hasPermission = requiredPermissions.every(perm => permission.permissions.includes(perm));

  return true;
};

export default usePermission;
