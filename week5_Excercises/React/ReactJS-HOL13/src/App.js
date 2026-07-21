import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const choice = "books"; // books | blogs | courses

    if (choice === "books") {

        return <BookDetails />;

    } else if (choice === "blogs") {

        return <BlogDetails />;

    } else {

        return <CourseDetails />;

    }

}

export default App;