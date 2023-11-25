import Navbar from "../components/Navbar";

export default function Home() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <>
      <Navbar />
      <h1 className="heading">
        {getGreeting()}, Welcome to my first React page!
      </h1>

      <footer>
        <p>Copyright © 2023 Shawn Arlantico</p>
      </footer>
    </>
  );
}
