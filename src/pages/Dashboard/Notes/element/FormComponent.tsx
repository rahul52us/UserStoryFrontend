import { useState } from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { EditorState } from "draft-js";
import CustomInput from "../../../../config/component/CustomInput/CustomInput";
import CategoryValidation from "../utils/validation";
import CustomSubmitBtn from "../../../../config/component/Button/CustomSubmitBtn";
import store from "../../../../store/store";
import { NotesCategoryFormDto } from "../utils/dto";
import moment from "moment";
import { toJS } from "mobx";
import { AmountTypeData, setCategoryInitialValue } from "../utils/common";
// import {  convertToRaw } from "draft-js";

const FormComponent = observer(({ formData }: any) => {
  console.log(toJS(formData.data));
  const {
    notesStore: { createCategory },
    auth: { openNotification },
  } = store;
  const [showError, setShowError] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const getEditorContentAsText = (data: any) => {
    const contentState: any = data;
    const plainText = contentState.getPlainText("\n");
    // console.log(plainText)
    return plainText;
  };

  return (
    <Formik
      initialValues={setCategoryInitialValue(formData.data)}
      validationSchema={CategoryValidation}
      onSubmit={(
        values: NotesCategoryFormDto,
        { setSubmitting, resetForm }
      ) => {
        createCategory({
          ...values,
          pricingType: values.pricingType.value,
          amountType: values.amountType.value,
          startYear: moment(values.startYear).format("YYYY-MM-DD"),
          endYear: moment(values.endYear).format("YYYY-MM-DD"),
          details: getEditorContentAsText(editorState.getCurrentContent()),
        })
          .then((data: any) => {
            openNotification({
              title: "Created Successfully",
              message: data?.message,
            });
            resetForm();
          })
          .catch((err) => {
            openNotification({
              title: "Create Failed",
              message: err?.message,
              type: "error",
            });
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      {({ values, handleChange, setFieldValue, errors, isSubmitting }) => (
        <Form>
            <Flex flexDirection="column" justifyContent="space-between" m={-6}>
              <Box
                mt={1}
                p={5}
                overflowY="auto"
                overflowX={"hidden"}
                flex="1"
                minH="85vh"
                maxH={"85vh"}
              >
                <Grid>
                  <Grid gridTemplateColumns={{ md: "1fr 1fr" }} gap={3} mb={2}>
                    <CustomInput
                      name="title"
                      placeholder="Enter the Title"
                      label="Title"
                      required={true}
                      value={values.title}
                      onChange={handleChange}
                      error={errors.title}
                      showError={showError}
                    />
                    <CustomInput
                      name="rating"
                      type="number"
                      placeholder="Enter the Rating"
                      label="Rating"
                      required={true}
                      value={values.rating}
                      onChange={handleChange}
                      error={errors.rating}
                      showError={showError}
                    />

                    <CustomInput
                      name="pricingType"
                      placeholder="Select the Pricing Type"
                      label="Pricing Type"
                      type="select"
                      value={values.pricingType}
                      options={[
                        { value: "free", label: "Free" },
                        { value: "paid", label: "Paid" },
                      ]}
                      required={true}
                      onChange={(e: any) => {
                        setFieldValue("pricingType", e);
                      }}
                      error={errors.pricingType}
                      showError={showError}
                    />
                    <CustomInput
                      name="amountType"
                      placeholder="Select the Amount Type"
                      label="Amount Type"
                      type="select"
                      value={values.amountType}
                      options={AmountTypeData}
                      required={true}
                      onChange={(e: any) => {
                        setFieldValue("amountType", e);
                      }}
                      error={errors.amountType}
                      showError={showError}
                    />
                    <CustomInput
                      name="discountPrice"
                      placeholder="Enter the Discount Price"
                      label="Discount Price"
                      required={true}
                      value={values.discountPrice}
                      onChange={handleChange}
                      error={errors.discountPrice}
                      showError={showError}
                    />
                    <CustomInput
                      name="originalPrice"
                      placeholder="Enter the Original Price"
                      label="Orignal Price"
                      required={true}
                      value={values.originalPrice}
                      onChange={handleChange}
                      error={errors.originalPrice}
                      showError={showError}
                    />
                    <CustomInput
                      type="date"
                      name="startYear"
                      label="StartYear"
                      value={values.startYear}
                      onChange={(e: any) => {
                        setFieldValue("startYear", e);
                      }}
                      required={true}
                      error={errors.startYear}
                      showError={showError}
                    />
                    <CustomInput
                      type="date"
                      name="endYear"
                      label="EndYear"
                      disabled={!values.startYear}
                      value={values.endYear}
                      onChange={(e: any) => {
                        setFieldValue("endYear", e);
                      }}
                      minDate={values.startYear}
                      error={errors.endYear}
                      showError={showError}
                      required
                    />
                  </Grid>
                  <Grid gap={2}>
                    <CustomInput
                      name="description"
                      type="textarea"
                      value={values.description}
                      placeholder="Write Description here"
                      label="Description"
                      required
                      rows={3}
                      onChange={handleChange}
                      showError={showError}
                      error={errors.description}
                    />
                    <CustomInput
                      label="Details"
                      name="details"
                      type="editor"
                      value={values.details}
                      onChange={(e: any) => {
                        setFieldValue("details", e);
                        setEditorState(e);
                      }}
                      required={true}
                      error={errors.details}
                      showError={showError}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Flex justifyContent="flex-end" mt={5} mr={5}>
                <CustomSubmitBtn
                  loading={isSubmitting}
                  type="submit"
                  onClick={() => setShowError(true)}
                />
              </Flex>
            </Flex>
        </Form>
      )}
    </Formik>
  );
});

export default FormComponent;
