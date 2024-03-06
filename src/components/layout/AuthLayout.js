import { Col, Row } from "antd";
import image from "../../assets/images/bg/man.jpg";
import '../../assets/css/auth_layout.css'

function AuthLayout({ children }) {
    return (
        <Row className="auth-layout">
            <Col flex="40%">
                <div className="img-wrapper">
                    <img src={image} alt="Background" />
                </div>
            </Col>
            <Col flex="auto" className="content-main-wrapper">
                <div className="content-wrapper">
                    <div className="box">
                        {children}
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default AuthLayout