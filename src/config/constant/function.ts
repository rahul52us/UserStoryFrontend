const moment = require("moment");

export function getPostedDate(title: string, dateString: any) {
  try {
    const date = moment.utc(dateString);
    const formattedDate = date.format("MMM D, YYYY");
    return `${title} ${formattedDate}`;
  } catch (_) {
    return ``;
  }
}

export const advancedSearch = (dataArray: any[], searchValue: string): any[] => {
  // Convert the searchValue to lowercase for case-insensitive search
  const searchTerm = searchValue.toLowerCase();

  // Filter the dataArray based on the partial match of the searchValue in the title field
  const filteredData = dataArray.filter((item: any) => {
    const itemTitle = item.title.toLowerCase();
    return itemTitle.includes(searchTerm);
  });

  return filteredData;
};


export const currentYear = new Date();
export const oneYearLater = new Date(
    currentYear.getFullYear() + 1,
    currentYear.getMonth(),
    currentYear.getDate()
  );


