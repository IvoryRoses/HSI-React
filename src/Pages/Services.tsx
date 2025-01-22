import NavigationBar from "../NavigationBar";

export default function Services() {
  return (
    <>
      <NavigationBar />
      <div className="no-scrollbar">
        <div id="top" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Services</h1>
        </div>
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <h2 className="text-3xl font-bold">Second Page</h2>
        </div>
      </div>
    </>
  );
}
