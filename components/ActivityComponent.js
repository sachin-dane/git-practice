import React from "react"
import { Link, Redirect } from "react-router-dom"
import ActivityFeedListComponent from "../../Dashboard/components/ActivityFeedListComponent"
import { Scrollbars } from 'react-custom-scrollbars';
import {Helmet} from 'react-helmet';

const AcivityComponent = (props) => {
    return (
        <React.Fragment>
        <Helmet>
            <title>Activity | biproxi.com</title>
            <meta name="description" content="Activity | Use the biproxi.com business marketplace to find commercial real estate." />
        </Helmet>
        <div className="right-sideBar">
            <section className="inner-wrapper">
                <div className="title-border">
                    <h4>ACTIVITY FEED</h4>
                </div>
                <div className="activity-page">
                    {props.activityFeed.length ?
                        ( <Scrollbars style={{ height: 600 }}>
                            <div className="profile-listing">
                                <ul className="reset">
                                    {props.activityFeed.map((obj, index) => <ActivityFeedListComponent
                                        key={index}
                                        title={obj.title}
                                        agent_profile_image={obj.agent_profile_image}
                                        firstname={obj.firstname}
                                        lastname={obj.lastname}
                                        action_slug={obj.action_slug}
                                        activity_on={obj.activity_on}
                                        category_name={obj.category_name}
                                        folder_name={obj.folder_name}
                                        user_role={obj.user_role}
                                        company_name={obj.company_name}
                                        listing_id={obj.listing_id}
                                        user_id={obj.user_id}
                                        email={obj.email}
                                        />)
                                    }
                                </ul>
                            </div>
                        </Scrollbars>) :
                        (<div className="no-data text-center">
                            <div className="data-text text-center">
                                <h4>Currently there is no activity feed</h4>
                            </div>
                        </div>)
                    }
                </div>
            </section>
        </div>
        </React.Fragment>
    )
}

export default AcivityComponent