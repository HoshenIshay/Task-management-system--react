import { connect } from "react-redux";

const ErrorDialoge = (props) => {
    return ( <p>
{props.message}
    </p> );
}

// const mapStateToProps=(state)=>{
//     return {
//         message:state.error.message
//     }
// }
// export default connect(mapStateToProps) (ErrorDialoge);

export default ErrorDialoge;