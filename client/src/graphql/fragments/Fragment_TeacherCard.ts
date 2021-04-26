/*tslint:disable*/
/*eslint-disable*/
//This file was automatically generated and should not be edited.
import gql from 'graphql-tag';
export const Fragment_TeacherCard = gql`fragment Fragment_TeacherCard on Teacher {
  id
  localized_path
  snippet
  full_name
  image(params: {width: 350}) {
    processed_url
  }
}
`;
