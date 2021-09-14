import { gql } from 'graphql-tag'

export const LuncheInfoData = gql`
query LuncheInfoData($id: String!) {
    launch(id: $id) {
      mission_name
      flight_number
      launch_year
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
  }
}

`