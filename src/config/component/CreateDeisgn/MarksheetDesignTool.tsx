import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Input, Select, Heading,  Button } from '@chakra-ui/react';
import { useFormik } from 'formik';
import store from '../../../store/store';

const MarksheetDesignTool: React.FC = observer(() => {
  const { ExamStore } = store;
  const [semesterData, setSemesterData] = useState<any>([]);

  useEffect(() => {
    ExamStore.getExam('64cd3381a2ec66f3216bdfdd')
      .then((data: any) => {
        setSemesterData(data.semister);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }, [ExamStore]);

  const formik = useFormik({
    initialValues: {
      semesterData: semesterData,
    },
    onSubmit: (values) => {
      console.log(values.semesterData);
    },
  });

  const handleMarksChange = (
    semesterIndex: number,
    testIndex: number,
    subjectIndex: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    const newData = [...formik.values.semesterData];
    if (testIndex === -1) {
      newData[semesterIndex].subjects[subjectIndex].marks = value;
    } else {
      newData[semesterIndex].noOfTest[testIndex].subjects[subjectIndex].marks = value;
    }
    formik.setFieldValue('semesterData', newData, true);
  };

  useEffect(() => {
    formik.setValues({ semesterData: semesterData });
  }, [semesterData]);

  const handleGradeChange = (
    semesterIndex: number,
    testIndex: number,
    subjectIndex: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;

    const newData = [...formik.values.semesterData];
    if (testIndex === -1) {
      newData[semesterIndex].subjects[subjectIndex].grade = value;
    } else {
      newData[semesterIndex].noOfTest[testIndex].subjects[subjectIndex].grade = value;
    }

    formik.setFieldValue('semesterData', newData, true);
  };

  const calculateTotalMarks = (subject: any) => {
    return subject.totalMarks;
  };

  const calculateObtainedMarks = (subject: any) => {
    if (subject.marks) {
      return parseFloat(subject.marks);
    }
    return 0;
  };

  const calculateSubjectGrade = (subject: any) => {
    if (subject.grade) {
      return subject.grade;
    }
    return '';
  };

  const calculateGPAPoints = (grade: string) => {
    console.log(grade)
    // Implement your GPA calculation logic here
    // Example: if (grade === 'A') return 4.0;
    return 0;
  };

  const calculateSemesterGPA = (semester: any) => {
    const totalSubjects = semester.subjects.length;
    let totalGPAPoints = 0;

    semester.subjects.forEach((subject: any) => {
      const subjectGrade = calculateSubjectGrade(subject);
      const subjectGPAPoints = calculateGPAPoints(subjectGrade);
      totalGPAPoints += subjectGPAPoints;
    });

    return totalGPAPoints / totalSubjects;
  };

  return (
    <Box width="100%" p={8}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        w="100%"
        boxShadow="md"
        textAlign="center"
        backgroundColor="#f0f0f0"
        marginBottom="20px"
      >
        <Heading size="xl" mb={4}>
          Student Marksheet
        </Heading>
        {/* ... Student information ... */}
      </Box>

      {formik.values.semesterData.map((semester: any, semesterIndex: number) => (
        <Box key={semester._id} borderWidth="1px" borderRadius="lg" p={4} w="100%" boxShadow="md" mb={4}>
          <Heading size="lg" mb={2}>
            {semester.name}
          </Heading>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Subject</Th>
                <Th>Total Marks</Th>
                {semester.subjects[0]?.gradingType === 'number' ? <Th>Obtained Marks</Th> : <Th>Grade</Th>}
              </Tr>
            </Thead>
            <Tbody>
              {semester.subjects.map((subject: any, subjectIndex: number) => (
                <Tr key={subject._id}>
                  <Td>{subject.name}</Td>
                  <Td>{subject.totalMarks}</Td>
                  {subject.gradingType === 'number' ? (
                    <Td>
                      <Input
                        type="number"
                        value={subject.marks || ''}
                        onChange={(event) => handleMarksChange(semesterIndex, -1, subjectIndex, event)}
                      />
                    </Td>
                  ) : (
                    <Td>
                      <Select
                        value={subject.grade || ''}
                        onChange={(event) => handleGradeChange(semesterIndex, -1, subjectIndex, event)}
                      >
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                      </Select>
                    </Td>
                  )}
                </Tr>
              ))}
            </Tbody>
          </Table>

          {semester.noOfTest.map((test: any, testIndex: number) => (
            <Box key={test._id} mt={4} borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
              <Heading size="md" mb={2}>
                {test.name}
              </Heading>
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th>Subject</Th>
                    <Th>Total Marks</Th>
                    {test.subjects[0]?.gradingType === 'number' ? <Th>Obtained Marks</Th> : <Th>Grade</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {test.subjects.map((subject: any, subjectIndex: number) => (
                    <Tr key={subject._id}>
                      <Td>{subject.name}</Td>
                      <Td>{subject.totalMarks}</Td>
                      {subject.gradingType === 'number' ? (
                        <Td>
                          <Input
                            type="number"
                            value={subject.marks || ''}
                            onChange={(event) => handleMarksChange(semesterIndex, testIndex, subjectIndex, event)}
                          />
                        </Td>
                      ) : (
                        <Td>
                          <Select
                            value={subject.grade || ''}
                            onChange={(event) => handleGradeChange(semesterIndex, testIndex, subjectIndex, event)}
                          >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                          </Select>
                        </Td>
                      )}
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          ))}
        </Box>
      ))}

      <Box borderWidth="1px" borderRadius="lg" p={4} w="100%" boxShadow="md" backgroundColor="#f0f0f0">
        <Heading size="md">Marksheet Summary</Heading>
        {formik.values.semesterData.map((semester: any) => (
          <Box key={semester._id} p={2}>
            <Heading size="sm">{semester.name}</Heading>
            <p>Total Marks: {semester.subjects.reduce((total: any, subject: any) => total + calculateTotalMarks(subject), 0)}</p>
            <p>Obtained Marks: {semester.subjects.reduce((total: any, subject: any) => total + calculateObtainedMarks(subject), 0)}</p>
            <p>Semester GPA: {calculateSemesterGPA(semester)}</p>
          </Box>
        ))}
      </Box>

      <Button type="submit" mt={4} alignSelf="center">
        Submit
      </Button>
    </Box>
  );
});

export default MarksheetDesignTool;
