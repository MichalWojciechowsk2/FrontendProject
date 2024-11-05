import Home from "../pages/Home.jsx";
import Lab1 from "../pages/Lab1.jsx";
import Lab2 from "../pages/Lab2.jsx";
import Lab3 from "../pages/Lab3.jsx";
import Lab4 from "../pages/Lab4.jsx";
import AddObjectForm from "../components/AddObjectForm.jsx";
import EditObjectForm from "../components/EditObjectForm.jsx";

const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home></Home>,
    inNavbar: true,
  },
  {
    id: 2,
    label: "Labolatorium1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1></Lab1>,
    inNavbar: true,
  },
  {
    id: 3,
    label: "Labolatorium2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2></Lab2>,
    inNavbar: true,
  },
  {
    id: 4,
    label: "Labolatorium3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3></Lab3>,
    inNavbar: true,
  },
  {
    id: 5,
    label: "Labolatorium4",
    url: "/lab4",
    urlPattern: "/lab4",
    element: <Lab4></Lab4>,
    inNavbar: true,
  },
  {
    id: 6,
    label: "Labolatorium4(Add object)",
    url: "/lab4/add",
    urlPattern: "/lab4/add",
    element: <AddObjectForm></AddObjectForm>,
    inNavbar: false,
  },
  {
    id: 7,
    label: "Labolatorium4(Edit)",
    url: "/lab4/edit",
    urlPattern: "/lab4/edit/:id",
    element: <EditObjectForm></EditObjectForm>,
    inNavbar: false,
  },
];

export default menuItems;
