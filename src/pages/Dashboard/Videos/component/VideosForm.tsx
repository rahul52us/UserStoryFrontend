import { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { FaPlus, FaTimes } from "react-icons/fa";
import CustomInput from "../../../../config/component/CustomInput/CustomInput";
import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import store from "../../../../store/store";
import videosValidation from "../utils/videos.validation";

interface VideoFormValues {
  title: string;
  videoType: any;
  videoLink: string;
  description: string;
}

const VideoForm = observer(({ close }: any) => {
  const [showError, setShowError] = useState(false);
  const {
    VideoStore: { createVideo },
    auth: { openNotification },
  } = store;

  return (
    <Box>
      <Formik<VideoFormValues>
        initialValues={{
          title: "",
          videoLink: "",
          description: "",
          videoType: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          values.videoType = values.videoType.value;
          createVideo(values)
            .then((data) => {
              openNotification({
                title: "Create Successfully",
                message: data?.message,
                type: "success",
              });
              resetForm();
              close();
            })
            .catch((err) => [
              openNotification({
                title: "Create Failed",
                message: err?.message,
                type: "error",
              }),
            ])
            .finally(() => {
              setSubmitting(false);
              setShowError(false);
            });
        }}
        validationSchema={videosValidation}
      >
        {({ handleChange, setFieldValue, values, errors, isSubmitting }) => {
          return (
            <Form>
              <Flex gap={4}>
                <CustomInput
                  name="title"
                  placeholder="Enter the Title"
                  label="Title"
                  required={true}
                  onChange={handleChange}
                  value={values.title}
                  error={errors.title}
                  showError={showError}
                />
                <CustomInput
                  label="Video Type"
                  required={true}
                  type="select"
                  name="videoType"
                  value={values.videoType}
                  error={errors.videoType}
                  options={[{ label: "Youtube", value: "youtube" }]}
                  onChange={(e: any) => setFieldValue("videoType", e)}
                  showError={showError}
                />
              </Flex>
              <CustomInput
                name="videoLink"
                placeholder="Enter the Video Link"
                label="Video Link"
                required={true}
                onChange={handleChange}
                value={values.videoLink}
                error={errors.videoLink}
                showError={showError}
              />
              <CustomInput
                name="description"
                placeholder="Description"
                label="Description"
                type="textarea"
                error={errors.description}
                onChange={handleChange}
                value={values.description}
                rows={4}
                showError={showError}
                required
              />
              <Flex justifyContent="end" mt={5} mr={3} mb={2}>
                <Button leftIcon={<FaTimes />} mr={2} onClick={close}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  leftIcon={<FaPlus />}
                  colorScheme="blue"
                  isLoading={isSubmitting}
                  onClick={() => {
                    setShowError(true);
                  }}
                >
                  Create
                </Button>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
});

export default VideoForm;
