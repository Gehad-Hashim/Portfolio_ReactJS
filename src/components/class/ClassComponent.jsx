import React from "react";
import { Connect, connect } from "react-redux";
import { changeLang } from '../../Store/Actions/langAction'
import { changeTheme } from '../../Store/Actions/themeAction'
import { Container } from "react-bootstrap";
class ClassComponent extends React.Component {


    render() {
        // console.log(this.props);
        return (<>
            <h1>hello from class component</h1>
            <Container>
                <h2 className="text-warning">{this.props.myLang}</h2><br />
                <button className="btn btn-info" onClick={() => this.props.changeLang(
                    this.props.myLang == "en" ? "ar" : "en"
                )}
                >change language from class</button>
<br/>
                <button className="mt-5 btn btn-info" onClick={() => this.props.changeTheme(
                    this.props.myThem == "dark" ? "light" : "dark"
                )}
                >change theme from class</button>

            </Container>
        </>
        )

    }

}
const mapStateToProps = (state) => {
    return {
        myLang: state.langRed.lang,
        myThem:state.themeRed.theme
    }
}

export default connect(mapStateToProps, { changeLang ,changeTheme})(ClassComponent);