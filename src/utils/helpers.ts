export const isValidField = (field: string): boolean => {
    return field.trim().length < 12;
  };