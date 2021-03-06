import { NextPage } from "next";
import buildClient from "../api/build-client";

interface Props {
  currentUser: { email: string; iat: number; id: string } | null;
}
const LandingPage: NextPage<Props> = ({ currentUser }) => {
  return currentUser ? (
    <h1>
      {" "}
      You are signed in as <b>{currentUser.email}</b>
    </h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};
LandingPage.getInitialProps = async (context) => {
  console.log("LANDING PAGE");

  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};
export default LandingPage;
