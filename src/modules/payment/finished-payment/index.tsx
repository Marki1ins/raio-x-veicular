import Container from "@/layout";

import Header from "../header";
import SuccessMessage from "./success-message";
import DownloadCarInfo from "./download-car-info";

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header hasArrow={false} />
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 mt-16 md:flex-row md:gap-16">
          <SuccessMessage />
          <DownloadCarInfo />
        </div>
      </Container>
    </div>
  );
}
