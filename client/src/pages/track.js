import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from '../components';
import React from 'react';
import TrackDetail from '../components/track-detail';

const GET_TRACK = gql`
    query getTrack($trackId: ID!) {
        track(id: $trackId) {
            id
            title
            author {
                id
                name
                photo
            }
            thumbnail
            length
            modulesCount
            description
            numberOfViews
            modules {
                id
                title
                length
            }
        }
    }
`;

const Track = ({trackId}) => {
    const {loading, error, data} = useQuery(GET_TRACK, {
        variables: {trackId}
    });

    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data}>
                {/* this is where our component displaying the data will go */}
                <TrackDetail track={data?.track} />
            </QueryResult>
        </Layout>
    )
}

export default Track;
