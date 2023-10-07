export const advancedSearch = (
  dataArray: any[],
  searchValue: string
): any[] => {
  // Convert the searchValue to lowercase for case-insensitive search
  const searchTerm = searchValue.toLowerCase();

  // Filter the dataArray based on the partial match of the searchValue in the title field
  const filteredData = dataArray.filter((item: any) => {
    const itemTitle = item.title.toLowerCase();
    return itemTitle.includes(searchTerm);
  });

  return filteredData;
};
