import { formatDistance } from "date-fns";

export const formatDate = (date: string | Date): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return `${date.getDate()} ${date.toLocaleString('default', {month: 'short', year: 'numeric'})}`
};

export const formatTime = (date: string | Date): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return `${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
};

export const getTimeAgo = (date: string | Date | undefined): string => {
  if (!date) {
    return '';
  }

  if (typeof date === 'string') {
    date = new Date(date);
  }

  return formatDistance(date, new Date(), { addSuffix: true });
};
