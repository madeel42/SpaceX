import React from 'react'
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useLuncheInfoDataQuery } from '../../generated/graphql'
import Typography from '@material-ui/core/Typography';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        ListFontStyle: {
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: 'cursive'
        }
    }),
);

interface Props {
    open: boolean,
    launchId: number
}
export const LauncheContainer: React.FC<Props> = ({ open, launchId }) => {
    const classes = useStyles()
    const { data, loading, error } = useLuncheInfoDataQuery({
        variables: {
            id: `${launchId}`
        },
    });
    if (loading)
        return <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })} > <div className={classes.drawerHeader} />
            <Typography paragraph>Loading ...</Typography></main>
    if (!data || error) {
        return <h1>Error</h1>
    }
    console.log(data, 'data');
    return <main
        className={clsx(classes.content, {
            [classes.contentShift]: open,
        })}
    >
        <div className={classes.drawerHeader} />

        <h2>Mission</h2>
        <ul>
            <li> <h2>Mission Name: <span className={classes.ListFontStyle}>{data.launch?.mission_name}</span></h2></li>
            <li> <h2>Launch Year: <span className={classes.ListFontStyle}>{data.launch?.launch_year}</span></h2></li>
            <li> <h2>Launch Year: <span className={classes.ListFontStyle}>{data.launch?.launch_site?.site_name}</span></h2></li>
        </ul>
        <h2>Rocket</h2>
        <ul>
            <li> <h2>Flight No: <span className={classes.ListFontStyle}>{data.launch?.flight_number}</span></h2></li>
            <li> <h2>Rocket Name: <span className={classes.ListFontStyle}>{data.launch?.rocket?.rocket_name}</span></h2></li>
            <li> <h2>Rocket Type: <span className={classes.ListFontStyle}>{data.launch?.rocket?.rocket_type}</span></h2></li>
        </ul>

    </main>
}
