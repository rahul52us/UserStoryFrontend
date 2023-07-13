import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import store from "../../../store/store";
import { authentication } from "../../../config/constant/routes";

const VerifyEmail = observer(() => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      store.auth
        .verifyEmail(token)
        .then((data: any) => {
          store.auth.openNotification({
            title: "Verify Successfully",
            message: data?.message,
          });
          navigate(`/create/organisation/${token}`);
        })
        .catch((err: any) => {
          store.auth.openNotification({
            title: "Verification Failed",
            message: err.message,
            type:'error'
          });
          navigate(authentication.register)
        });
    }
  }, [navigate, token]);

  return <div>Please Wait</div>;
});

export default VerifyEmail;
