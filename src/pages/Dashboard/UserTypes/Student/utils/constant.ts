import { getIdFromObject } from "../../../utils/commonFunction"

export const sendStudentData = (data : any) => {
    const sendData = {...data}
    sendData.name = `${sendData.firstName} ${sendData.lastName}`
    delete sendData.firstName
    delete sendData.lastName
    delete sendData.confirmPassword
    return {
        ...sendData,
        name:sendData.name,
        class : getIdFromObject([sendData.class]).length ? getIdFromObject([sendData.class])[0] : "",
        section: getIdFromObject([sendData.section]).length ? getIdFromObject([sendData.section])[0] : "",
        language: [sendData.language]
    }
}