import officeImage from "./office.jpg";

function App() {

  const office = {
    Name: "Skyline Office",
    Rent: 55000,
    Address: "Noida, Uttar Pradesh"
  };

  const officeList = [
    {
      Name: "Skyline Office",
      Rent: 55000,
      Address: "Noida"
    },
    {
      Name: "Tech Park",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "Business Hub",
      Rent: 45000,
      Address: "Hyderabad"
    }
  ];

  return (

    <div>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="400"
        height="250"
      />

      <h2>Single Office</h2>

      <p><b>Name :</b> {office.Name}</p>

      <p
        style={{
          color: office.Rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent :</b> {office.Rent}
      </p>

      <p><b>Address :</b> {office.Address}</p>

      <hr />

      <h2>Office List</h2>

      {

        officeList.map((item, index) => (

          <div key={index}>

            <h3>{item.Name}</h3>

            <p
              style={{
                color: item.Rent < 60000 ? "red" : "green"
              }}
            >
              Rent : {item.Rent}
            </p>

            <p>Address : {item.Address}</p>

            <hr />

          </div>

        ))

      }

    </div>

  );

}

export default App;