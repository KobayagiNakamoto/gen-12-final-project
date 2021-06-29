import { Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../assets/styles/dashboard.css";

function Dashboard() {
  const [data, setData] = useState();

  const apiURL = "https://jsonplaceholder.typicode.com/posts/1/comments";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(apiURL);
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <Container>
        <div id="asd1">
          {data &&
            data.map((x) => {
              return (
                <Card className="card" key={x.id}>
                  <Card.Img
                    variant="top"
                    src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
                    className="fluid"
                  />
                  <Card.Body>
                    <Card.Title className="cardTitle">{x.email}</Card.Title>
                    <Card.Text className="cardText">{x.body}</Card.Text>
                    <Button variant="success" className="cardButton">
                      Full Recipe
                    </Button>
                    <Card.Footer className="cardFooter">
                      {
                        <div>
                          <span className="material-icons">schedule</span>
                          <span> {x.id} minutes </span>
                        </div>
                      }
                      {
                        <div>
                          <span className="material-icons">restaurant</span>
                          <span> {x.id} persons</span>
                        </div>
                      }
                    </Card.Footer>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
    </Container>
  );
}

export default Dashboard;
