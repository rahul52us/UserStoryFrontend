export const PricingTypeData = [
  { value: "free", label: "Free" },
  { value: "paid", label: "Paid" },
]

export const AmountTypeData = [
  { value: "RS", label: "RS" },
  { value: "USD", label: "USD" },
]


export const setCategoryInitialValue = (data: any) => {
  return {
    title: data ? data.title : "",
    rating: data ? data.rating : "",
    description: data ? data.description : "",
    pricingType: data ? PricingTypeData.filter((item) => item.value === data?.pricingType)[0] : "",
    amountType: data ? AmountTypeData.filter((item) => item.value === data?.amountType)[0] : "",
    discountPrice: data ? data.discountPrice : "",
    originalPrice: data ? data.originalPrice : "",
    startYear: data ? data.startYear : undefined,
    endYear: data ? data.endYear : undefined,
    details: data ? data.editorState : "",
  };
};
