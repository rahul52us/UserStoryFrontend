export interface AmountTypeObjectI {
    label: string;
    value: string;
  }

  export interface StatusObjectI {
    label: string;
    value: string;
  }

export interface NotesCategoryFormDto {
    title : String,
    rating:number,
    startYear:any,
    endYear:any,
    description:String,
    pricingType:any,
    originalPrice:any,
    discountPrice:any,
    amountType:any,
    details:any
}