import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Login from "./Login";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center max-w-[300px] mx-auto py-6 sm:px-6 lg:px-8">
          <Login />
        </div>
      </div>
    </>
  );
}
