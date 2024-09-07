const isEmpty = value => {
  if (value === null || value === undefined) return true;

  // Check for empty string
  if (typeof value === 'string' && value.trim() === '') return true;

  // Check for empty array
  if (Array.isArray(value) && value.length === 0) return true;

  // Check for empty object
  if (typeof value === 'object' && Object.keys(value).length === 0) return true;

  // check for empty number
  if (typeof value === 'number' && value === 0) return true;
  return false;
};
module.exports = isEmpty;