import Apple from "./Apple";
import Button1 from "./Button1";
import CourseGoal from "./CourseGoal";
import Discount from "./Discount";
import EmployeeData from "./EmployeeData";
import Greetings from "./Greetings";
import Increment from "./Increment";

function App()
{

  const employee = {id:1001,name:"naveen",salary:10000}
 return(
  <>
    {/* <Increment/>
   <Button1/>
   <Apple/>
  <Discount/> */}
  {/* <Greetings name="Naveen"></Greetings>
  <Greetings name="Raju"></Greetings>
  <Greetings/> */}
  {/* <EmployeeData employeeObj = {employee}></EmployeeData> */}

  <CourseGoal title={"Learn React" } discription={"In-Depth"}/>
  <CourseGoal title={"About ratan sir"} discription={"ratan sir is nice"}/>
  </>
 )
}

export default App;