// Post Component and Post json file
import Post from "../Post";
import postdata from "../../data/post/data";

// Nav Component and Nav json file
import Nav from "../Nav";
import navigation from "../../data/navigation/data";

// Footer Component and Footer json file
import Footer from "../Footer";
import footer from "../../data/footer/data";

export default function Main({ children }) {
  return (
    <>
      <Nav data={navigation} />
      <Post data={postdata} />
      {children}
      <Footer data={footer} />
    </>
  );
}
