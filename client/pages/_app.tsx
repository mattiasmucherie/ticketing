import "bootstrap/dist/css/bootstrap.css";
import { AppContext, AppProps } from "next/app";
import buildClient from "../api/build-client";
import { CurrentUser } from "../types/types";
import Header from "./component/header";

interface AppComponentProps extends AppProps {
  currentUser: CurrentUser | null;
}

const AppComponent = ({
  Component,
  pageProps,
  currentUser,
}: AppComponentProps) => {
  return (
    <>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </>
  );
};

AppComponent.getInitialProps = async (appContext: AppContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");
  let pageProps;
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  return { pageProps, ...data };
};
export default AppComponent;
