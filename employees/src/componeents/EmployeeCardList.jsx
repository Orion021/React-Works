import { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeCardList() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 25,
      city: "New York",
      country: "USA",
      avatar: "https://i.pravatar.cc/150?img=1",
      status: "active",
      skills: ["React", "CSS", "JavaScript"],
      hobby: "Photography",
      profilePic: "https://picsum.photos/100/100?random=1",
      coverPic: "https://picsum.photos/200/100?random=2",
      favoriteFoodPic: "https://picsum.photos/80/80?random=3",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      age: 30,
      city: "London",
      country: "UK",
      avatar: "https://i.pravatar.cc/150?img=2",
      status: "inactive",
      skills: ["Node.js", "Express", "MongoDB"],
      hobby: "Gaming",
      profilePic: "https://picsum.photos/100/100?random=4",
      coverPic: "https://picsum.photos/200/100?random=5",
      favoriteFoodPic: "https://picsum.photos/80/80?random=6",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      age: 22,
      city: "Sydney",
      country: "Australia",
      avatar: "https://i.pravatar.cc/150?img=3",
      status: "active",
      skills: ["Python", "Django", "SQL"],
      hobby: "Hiking",
      profilePic: "https://picsum.photos/100/100?random=7",
      coverPic: "https://picsum.photos/200/100?random=8",
      favoriteFoodPic: "https://picsum.photos/80/80?random=9",
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana@example.com",
      age: 28,
      city: "Paris",
      country: "France",
      avatar: "https://i.pravatar.cc/150?img=4",
      status: "active",
      skills: ["Java", "Spring Boot", "Hibernate"],
      hobby: "Painting",
      profilePic: "https://picsum.photos/100/100?random=10",
      coverPic: "https://picsum.photos/200/100?random=11",
      favoriteFoodPic: "https://picsum.photos/80/80?random=12",
    },
    {
      id: 5,
      name: "Ethan Hunt",
      email: "ethan@example.com",
      age: 35,
      city: "Berlin",
      country: "Germany",
      avatar: "https://i.pravatar.cc/150?img=5",
      status: "inactive",
      skills: ["C#", ".NET", "Azure"],
      hobby: "Skydiving",
      profilePic: "https://picsum.photos/100/100?random=13",
      coverPic: "https://picsum.photos/200/100?random=14",
      favoriteFoodPic: "https://picsum.photos/80/80?random=15",
    },
  ]);

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} user={employee} />
      ))}
    </div>
  );
}

export default EmployeeCardList;
