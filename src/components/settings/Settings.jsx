import React from 'react';
import './Settings.scss';
import Title from '../assets/Title';
import ButtonDark from '../assets/ButtonDark';
import ButtonLight from '../assets/ButtonLight';
import SwitchDark from '../assets/SwitchDark';
import {Box} from '@material-ui/core';

const panelItems = [
    {
        id: '1',
        title: 'Dashboard Metrics',
        descriptions: 'Turn this on if you want to see the overall metrics of the tasks on the dashboard.'
    }, {
        id: '2',
        title: 'Notification Panel',
        descriptions: 'Turn this on for keeping the notification panel always visible on the dashboard.'
    }, {
        id: '3',
        title: 'Upcoming Deadlines Panel',
        descriptions: 'Turn this on for keeping the Upcoming Deadlines panel always visible on the dashboard.'
    }, {
        id: '4',
        title: 'WebApp Notifications',
        descriptions: 'Turn this on if you want to keep receiving the notifications within application.'
    }, {
        id: '5',
        title: 'Email Notifications',
        descriptions: 'Turn this on if you want to keep receiving the notifications of all the task related activities.'
    }
];

const Panel = panelItems.map((item) => 
<Box key={item.id} className="panel" display="flex">
    <Box flexGrow={1} p={2} m={2}>
        <Box><strong>{item.title}</strong></Box>
        <Box>{item.descriptions}</Box>
    </Box>
    <Box p={2} m={2}>
        <SwitchDark/>
    </Box>
</Box>
);

export default function Settings() {
    return (
        <React.Fragment>
            <Box className="container" p={2} m={4}>
                <Box flexGrow={1} display="flex">
                    <Box flexGrow={1}>
                        <Title name="Settings"/>
                    </Box>
                    <Box>
                        <ButtonDark/>
                        <ButtonLight/>
                    </Box>
                </Box>
                <hr className="lineDark"/>
                <Box>
                    {Panel}
                </Box>
            </Box>
        </React.Fragment>
    );
}