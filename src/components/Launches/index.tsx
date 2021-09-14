import React from 'react'
import { useLunchesDataListQuery } from '../../generated/graphql'
import { ListData } from './ListData'

export const LaunchesContainer = () => {
    const { data, loading, error } = useLunchesDataListQuery();

    if (loading)
        return <h1>Loading...</h1>
    if (!data || error) {
        return <h1>Error</h1>
    }
    console.log(data, 'data');

    return (
        <div>
            <ListData data={data} />
        </div>
    )
}
