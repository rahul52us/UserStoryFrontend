import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

const StudentProfileIndex = observer(() => {
  const { className }: any = useParams();

  return <div>StudentProfileIndex {className}</div>;
});

export default StudentProfileIndex;