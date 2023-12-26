import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice/userSlice";

export default function ReduxInputcomponent() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Redux state test</h2>
      <input type="text" value={user.name} onChange={e=>{
        dispatch(
          login(e.target.value)
        )
      }}/>
    </div>
  );	
};
