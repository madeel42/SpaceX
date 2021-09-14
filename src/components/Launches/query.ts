import { gql } from 'graphql-tag'

export const LunchesDataList = gql`
query LunchesDataList{
    launches {
      mission_id
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }
`