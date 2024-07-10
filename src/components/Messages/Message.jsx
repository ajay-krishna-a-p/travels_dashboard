import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  InputGroup,
  Dropdown,
  Table,
  Card,
  Image,
  Badge,
} from "react-bootstrap";
import "./Message.css";
import "./Button.css";
import { useNavigate } from "react-router-dom";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../Config/Config";

export default function Message() {
  const navigate = useNavigate();
  const handleNavigate = (message) => {
    navigate("/viewusermessage",{state:{
        product: message
    }});
  };

  const [Message, setMessage] = useState([]);
  useEffect(() => {
    handleQuery();
  }, []);
  const handleQuery = () => {
    const q = query(
      collection(db, "product-messages"),
      orderBy("date", "desc")
      
    );
    setMessage(null);
    fetchData(q);
  };
  const fetchData = async (q) => {
    setMessage(null);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setMessage(newData);
    });
  };

  return (
    <div>
      {Message !== null &&
        Message.map((message) => (
          <Card
            key={message.id}
            onClick={()=>handleNavigate(message)}
            style={{ cursor: "pointer", borderRadius:'15px' }}
            className="mt-4"
          >
            <Row
              style={{
                justifyContent: "start",
                padding: "10px",
              }}
            >
              <Col>
                <Image
                  src={message.data.photoURL ? message.data.photoURL : ""}
                  roundedCircle
                  style={{ width: "100px", height: "100px", padding: "10px" }}
                />
              </Col>
              <Col md="7" style={{ alignContent: "center" }}>
                <Row>
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      {message.data.item_title}
                    </span>
                  </div>
                </Row>
                <Row>
                  <div>{message.data.place}</div>
                </Row>
              </Col>
              
              <Col
                style={{
                  alignContent: "center",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Col>
                    <Badge
                      style={{
                        height: "30px",
                        width: "30px",
                        alignContent: "center",
                      }}
                    >
                      {message.data.admin_badge}
                    </Badge>
                  </Col>
                </div>
              </Col>
            </Row>
          </Card>
        ))}
    </div>
  );
}
