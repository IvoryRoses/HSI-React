import NavigationBar from "../NavigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="no-scrollbar">
        <p className="bg-black text-green-600">Home</p>
        <p className="pt-[100rem]">Trial</p>
      </div>
    </>
  );
}
