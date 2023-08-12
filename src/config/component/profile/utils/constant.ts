export const studentInitialValues = (data : any) => {
    return {
        firstName : data?.name?.split(' ')[0] || "",
        lastName :  data?.name?.split(' ')[1] || "",
        username : data?.username || "",
        motherName :data?.profile_details?.motherName || "",
        fatherName :data?.profile_details?.fatherName || "",
        sibling :data?.profile_details?.sibling || "",
        nickName :data?.profile_details?.nickName || "",
        mobileNo:data?.profile_details?.mobileNo || "",
        class:data?.profile_details?.class || undefined,
        section:data?.profile_details?.section || undefined,
        language:data?.profile_details?.language || undefined,
        medium:data?.profile_details?.medium || undefined,
        bio:data.bio || "",
        emergencyNo : data?.profile_details?.emergencyNo || "",
        addressInfo: data?.profile_details?.addressInfo?.length ? data?.profile_details?.addressInfo : [{
            address : '',
            country : '',
            state : '',
            city : '',
            pinCode : ''
        }]
    }
}