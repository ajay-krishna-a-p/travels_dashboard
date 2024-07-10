/* eslint-disable prettier/prettier */
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
import { useLocation, useNavigate } from "react-router-dom";
import {
    addDoc,
  collection,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { app, db } from "../Config/Config";
import { getFunctions, httpsCallable } from 'firebase/functions'

export default function ViewUserMessage() {
  const [MessageList, setMessageList] = useState([]);
  const [message,setMessage]=useState("");
  const location = useLocation();
  useEffect(() => {
    handleQuery();
  }, []);
  const handleQuery = () => {
    const q = query(
      collection(db, "product-messages", location.state.product.id, "messages"),
      orderBy("date", "asc"),
    );
    setMessageList(null);
    fetchData(q);
  };
  const fetchData = async (q) => {
    setMessageList(null);
     onSnapshot(q, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setMessageList(newData);
    });
  };

  const handleMessageSend=async(e)=>{
    e.preventDefault();
    await updateDoc(doc(db, "product-messages", location.state.product.id),{
       admin_badge: 0,
       user_badge: increment(1),
       date: new Date(),
    });
    await addDoc(collection(db, "product-messages", location.state.product.id, "messages"),{
        message: message,
        date: new Date(),
        source: "admin"
    });
    Notification(message);
    setMessage("");
  }

    const Notification = (msg) => {
      const userDetails = {
        title: 'New Message',
        body: msg,
        uid: location.state.product.data.uid,
      }
      const functions = getFunctions(app, 'asia-south1')
      const MessageFun = httpsCallable(functions, 'adminmessagingnotification')
      MessageFun(userDetails).then((result) => {
        const data = result.data
        if (data === 200) {
          console.log('success')
        } else {
          console.log('Error')
        }
      })
    }

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {MessageList !== null &&
        MessageList.map((item) => (
          <>
            {item.data.source === "customer" ? (
              <div style={{ paddingRight: "50%" }}>
                <Card
                  style={{
                    backgroundColor: "#CBE3FF",
                    borderColor: "#CBE3FF",
                    color: "black",
                  }}
                  key={item.id}
                  className="mt-3"
                >
                {console.log(location.state.product)}
                  <Row>
                    <Col>
                      <Image
                        src="src/assets/profile.png"
                        roundedCircle
                        style={{
                          width: "100px",
                          height: "100px",
                          padding: "10px",
                        }}
                      />
                    </Col>
                    <Col md="9" style={{ alignContent: "center" }}>
                      {item.data.message}
                    </Col>
                  </Row>
                </Card>
              </div>
            ) : (
              <div style={{ paddingLeft: "50%" }}>
                <Card
                  style={{
                    backgroundColor: "#FFFCB6",
                    borderColor: "#FFFCB6",
                    color: "black",
                  }}
                  className="mt-3"
                >
                  <Row>
                    <Col>
                      <Image
                        src="src/assets/profile.png"
                        roundedCircle
                        style={{
                          width: "100px",
                          height: "100px",
                          padding: "10px",
                        }}
                      />
                    </Col>
                    <Col md="9" style={{ alignContent: "center" }}>
                     {item.data.message}
                    </Col>
                  </Row>
                </Card>
              </div>
            )}
          </>
        ))}
        <form  onSubmit={handleMessageSend}>

      <Row style={{ position: "fixed", bottom: 70, width: "90%" }}>
        <Col md="10" style={{ marginTop: "10px" }}>
          <Form.Group controlId="validationCustom02">
            <Form.Control
              name="price"
              type="text"
              placeholder="Enter Message"
              required
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              style={{
                resize: "none",
                display: "flex",
                verticalAlign: "bottom",
                width: "96%",
                height:'70px'
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col style={{ marginTop: "20px" }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
      </form>
    </div>
  );
}
