import { Component } from "react";

const styles= {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alingItems: 'center',
        display: 'flex',
    }
}
class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;