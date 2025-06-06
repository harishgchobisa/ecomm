import { useParams } from "react-router";


const UserDetails = () => {
  const pageID= useParams();
  console.log("Page ID:", pageID);
  return (
    <div>
      <h1>User Details Page</h1>
    </div>
  );
}

export default UserDetails;