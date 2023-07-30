import moment from "moment";
import { cloneDeep } from "lodash";

export const classMediums = [
  {
    value: "english",
    label: "English",
  },
  {
    value: "hindi",
    label: "Hindi",
  },
  {
    value: "gujrati",
    label: "Gujrati",
  },
];


// const optamizedSectionData = (data : any) => {
  // data.forEach((item:any) => {
  //   item.medium = item.medium.value
  // })
//   return data
// }

export const optamizedClassData = (data: any) => {
  const object: any = cloneDeep(data);

  object.name = data.name;
  object.startYear = moment(data.startYear).format("YYYY-MM-DD");
  object.endYear = moment(data.endYear).format("YYYY-MM-DD");
  object.medium = data.medium?.value;
  object.sections = data.sections;

  object.sections.forEach((item: any, index : number) => {
    if (!item.name && index === 0) {
      item.name = data.name;
      return
    }
    item.medium = item?.medium?.value
  });
  return object
};


export const setClassInitialValue = (data: any) => {
  let updatedSections : any = []
  if(data){
  updatedSections = data?.sections?.map((item: any) => {
    return {
      ...item,
      medium: classMediums.find((it) => it.value === item.medium) || classMediums[0],
    };
  })};

  return {
    name: data ? data.name : "",
    medium: data ? classMediums.filter((item) => item.value === data.medium)?.[0] : classMediums[0],
    startYear: data ? data.startYear ? moment(data.startYear).toDate() : undefined : undefined,
    endYear: data ? data.endYear ? moment(data.endYear).toDate() : undefined : undefined,
    sections: updatedSections && updatedSections.length ? updatedSections : [{ name: "", medium: classMediums[0] }],
  };
};
