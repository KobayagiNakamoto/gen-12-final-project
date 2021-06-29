import { Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../assets/styles/dashboard.css";

function Dashboard() {
  const [data, setData] = useState();

  const apiURL = "https://jsonplaceholder.typicode.com/posts/comments";

  useEffect(() => {
      async function fetchData() {
          const response = await axios.get(apiURL);
          setData(response.data);
      }
      fetchData();
  }, []);

  return (
    <Container fluid className="dashContainer">
        {data &&
            data.map((x) => {
                return (
                  <Card className="card" key={x.id}>
                    <Card.Img
                        variant="top"
                        src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
                    />
                      <Card.Body>
                          <Card.Title className="cardTitle">
                              {x.name}
                          </Card.Title>
                          <Card.Text className="cardText">
                              {x.body}
                          </Card.Text>
                          <Button
                              variant="success"
                              className="cardButton"
                          >
                              Full Recipe
                          </Button>
                          <Card.Footer className="cardFooter">
                              {
                                <div>
                                    <span className="material-icons">
                                        schedule
                                    </span>
                                    <span> 45min</span>
                                </div>
                              }
                              {
                                <div>
                                    <span className="material-icons">
                                        restaurant
                                    </span>
                                    <span> 4 persons</span>
                                </div>
                              }
                          </Card.Footer>
                      </Card.Body>
                  </Card>
                );
            })}
    </Container>
  );
}

export default Dashboard;
