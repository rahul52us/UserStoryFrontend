import { useState, useEffect, useCallback } from "react";
import { observer } from "mobx-react-lite";
import store from "../../../../../store/store";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import StudentTable from "./StudentTable/StudentTable";
import StudentProfileIndex from "./studentProfile/StudentProfileIndex";
import moment from "moment";
import { CreateStudentSideTab, EditStudentSideTab } from "../utils/constant";

const StudentFormIndex = observer(() => {
  const navigate = useNavigate()
  const [firstTimeCall, setFirstTimeCall] = useState(true);
  const { type } = useParams();
  const { state } = useLocation();
  const location = useLocation();
  const {
    classStore: { getClasses, classes },
    auth: { openNotification },
    Student: { getStudents, student },
  } = store;

  const cls = useState(new URLSearchParams(location.search).get("class"))[0];
  const sct = useState(new URLSearchParams(location.search).get("section"))[0];
  const editId = new URLSearchParams(location.search).get("edit")

  const [date, setDate] = useState({
    startYear:
      new Date(
        new URLSearchParams(location.search).get("startYear") || new Date()
      ) || new Date(),
    endYear:
      new Date(
        new URLSearchParams(location.search).get("endYear") || new Date()
      ) || new Date(),
  });

  const getClassesFun = useCallback(
    (value: boolean) => {
      if (value) {
        getClasses({
          startYear: date.startYear,
          endYear: date.endYear,
        })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            openNotification({
              title: "Failed to Get Classes",
              message: err.message,
              type: "error",
            });
          });
      }
    },
    [date, openNotification, getClasses]
  );

  const getStudentFun = useCallback(
    (sectionId: string) => {
      if (type === "index" && !student.hasFetch) {
        getStudents({ section: sectionId })
          .then(() => {})
          .catch((err) => {
            openNotification({
              title: "Failed to Get Students",
              message: err.message,
              type: "error",
            });
          });
      }
    },
    [type, getStudents, openNotification, student.hasFetch]
  );

  useEffect(() => {
    try {
      if (state) {
        getStudentFun(state.sectionId);
      } else {
        const dd: any = JSON.parse(
          sessionStorage.getItem("classInfo") || "null"
        );
        if (dd) {
          let section: any = dd.section ? JSON.parse(dd.section)?.id : null;
          if (section) {
            getStudentFun(section);
          }
        } else {
          const filtercls: any = classes.data.filter(
            (it: any) => it.name === cls?.split("-").join(" ")
          );
          if (filtercls.length) {
            const filtersct: any = filtercls[0].sections?.filter(
              (sc: any) => sc.name === sct?.split("-").join(" ")
            );
            if (filtersct.length) {
              getStudentFun(filtersct[0]._id);
            }
          }
        }
      }
    } catch (err) {}
  }, [getStudentFun, state, classes.data,cls,sct ]);

  useEffect(() => {
    if (firstTimeCall && !classes.hasFetch) {
      getClassesFun(true);
      setFirstTimeCall(false);
    }
  }, [getClassesFun, firstTimeCall, classes]);

  const createEditLink = (id : any) => {
    navigate(`/dashboard/students/edit?class=${cls}&section=${sct}&startYear=${moment(date.startYear).format('YYYY-MM-DD')}&endYear=${moment(date.endYear).format('YYYY-MM-DD')}&edit=${id}&profileTab=dashboard`)
  }

  const getCurrentTab = () => {
    switch(type){
     case "index":
      return <StudentTable date={date} setDate={setDate} editLink={createEditLink} />
     case "create":
      return <StudentProfileIndex sideTab={CreateStudentSideTab} type="create" />
     case "edit":
       return <StudentProfileIndex sideTab={EditStudentSideTab} type="edit" editTabLink={`/dashboard/students/edit?class=${cls}&section=${sct}&startYear=${moment(date.startYear).format('YYYY-MM-DD')}&endYear=${moment(date.endYear).format('YYYY-MM-DD')}&edit=${editId}`} />
    default:
      return <StudentTable date={date} setDate={setDate} editLink={createEditLink} />
    }
  }
  return(
    getCurrentTab()
  )
});

export default StudentFormIndex;