import React, { Component } from "react"
import { connect } from "react-redux"
import { activityFeedRequestAction } from "../Dashboard/actions/DashboardHomeActions"
import ActivityComponent from "./components/ActivityComponent"
import DashboardHeaderComponent from "../Header/DashboardHeaderContainer"
import SideBarMenuComponent from "../Dashboard/components/SideBarMenuComponent"


class ActivityContainer extends Component {

    constructor(props) {
        super(props)
        this.props.activityFeedRequestAction()
    }
    
	searchHandler = (queryString) => {
		this.props.history.push({
			pathname: '/search',
			search: `?query=${queryString}`
		})
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="wrapper">
                    <section className="mid-container">
                        <div className="mainContent">
                            <SideBarMenuComponent hasSubmenu={false} 
                            userType={this.props.login.user_role ? this.props.login.user_role.length ? this.props.login.user_role[0] : 0 : 0}/>
                            <ActivityComponent activityFeed={this.props.dashboardHome.activityFeed} />
                        </div>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dashboardHome: state.dashboardHome,
        login: state.login.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        activityFeedRequestAction: (value) => dispatch(activityFeedRequestAction(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityContainer)
