import React, {useState} from 'react'
import TabButton from './TabButton';
import TabContent from './TabContent';

const Main = (props) => {


    const [state, setState] =  useState ({
        selectedTab : 1
    });

    const tabOnClick = (event, value) => {
        setState({
            selectedTab: value
        });
    };

    return (
        <div>
            <h1>Tabs</h1>
            {[1, 2, 3].map((val, index) => (
                <TabButton 
                key = {index}
                onClick ={(e) => tabOnClick(e, val)}
                selected = {state.selectedTab === val} 
                > Tab {val}</TabButton>
            )
            
            )}
                <TabContent> Tab {state.selectedTab} is currently showing. </TabContent>
        </div>
    )
}


export default Main;